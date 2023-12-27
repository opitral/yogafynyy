export function toObj(obj) {
    const res = {};
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            if (Array.isArray(obj[key])) {
                res[key] = obj[key].map((e) => (typeof e === 'object' ? toObj(e) : e));
            } else {
                res[key] = toObj(obj[key]);
            }
        } else {
            res[key] = obj[key];
        }
    }
    return res;
}

export const types = {
    xml:   'application/xml',
    zip:   'application/zip',
    pdf:   'application/pdf',
    json:  'application/json',
    doc:   'application/msword',
    js:    'application/javascript',
    xls:   'application/vnd.ms-excel',
    octet: 'application/octet-stream',
    ppt:   'application/vnd.ms-powerpoint',
    form:  'application/x-www-form-urlencoded',

    png:   'image/png',
    jpeg:  'image/jpeg',
    ico:   'image/x-icon',
    svg:   'image/svg+xml',

    csv:   'text/csv',
    css:   'text/css',
    html:  'text/html',
    plain: 'text/plain',

    wav:   'audio/wav',
    mp3:   'audio/mpeg',

    mp4:   'video/mp4',
    webm:  'video/webm',
};


function createParams(params = {}) {
    let data = {};

    let method  = params.method  ?? 'GET';
    let headers = params.headers ?? {};
    let content = params.content ?? null;
    let body    = params.body    ?? null;
    let auth    = params.auth    ?? null;

    data.method = method.toUpperCase();
    data.headers = headers

    if (body && method !== 'GET') {
        data.body = typeof body === 'object' ? JSON.stringify(body) : body.toString();
    }
    if (content) {
        data.headers['Content-Type'] = types[content];
    }
    if (auth) {
        data.headers['Authorization'] = 'Bearer ' + auth;
    }
        
    return data;
}

const send = {
    data:  (response, content) => ({ ...response, data:  content, error: null }),
    error: (response, content = { type, msg }) => ({ ...response, error: content, data:  null }),
}


export default function Rapi(
    ctx = fetch,
    options = {
        default: ""
    }
) {
    
    async function $(url = "", params = {}) {
        if (!url) throw Error('Rapi: URL is required');


       if (options.default) {
            if (!url.startsWith("http")) {
                if (!options.default.endsWith("/")) {
                    options.default += "/";
                }
                if (url.startsWith("/")) {
                    url = url.slice(1);
                }
                url = options.default + url;
            }
       }


        let response = await Promise.race([
            ctx(url, createParams(params)),
            
            new Promise(res => {
                return setTimeout(() => {
                    return res({
                        type: "rapi.timeout",
                        msg: `Rapi: Timeout after ${params.timeout} ms`,
                        ok: false
                    })
                }, params.timeout || 5000);
            }) 
        ])

        response.type ||= null;

        
       try {
        if (response.ok) {
            return send.data(response, await response[params.content]());
        }
        else {
            return send.error(response, {
                type: response.type,
                msg: response.msg || await response[params.content]()
            });
        }
       } catch (error) {
            return send.error(response, {
                type: "rapi.parse",
                msg: "Rapi: Error while parsing response"
            });
       }
    }

    function createType(method = "GET", content = "json") {
        return async (
            url = "",
            params = {
                ...new Request("http://localhost"),
                headers: Headers,
                content: content,
                body: {},
            }
        ) => $(
            url,
            {
                ...params,
                method,
                content
            }
        )
    }
    
    function createMethod(method = "GET") {
        return {
            $           : createType(),
            json        : createType( method, 'json'        ),
            text        : createType( method, 'text'        ),
            blob        : createType( method, 'blob'        ),
            formData    : createType( method, 'formData'    ),
            arrayBuffer : createType( method, 'arrayBuffer' ),
        }  
    } 

    return {
        $       : createType(),
        get     : createMethod( "GET"     ),
        post    : createMethod( "POST"    ),
        put     : createMethod( "PUT"     ),
        delete  : createMethod( "DELETE"  ),
        head    : createMethod( "HEAD"    ),
        options : createMethod( "OPTIONS" ),
        patch   : createMethod( "PATCH"   ),

        ctx:    (fetch_func ) => ctx = fetch_func,
        config: (options_obj) => options = { ...options, ...options_obj },
    }
}