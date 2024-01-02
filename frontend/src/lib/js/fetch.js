function toObj(obj) {
    const res = {}
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        if (Array.isArray(obj[key])) {
          res[key] = obj[key].map(e => typeof e === "object" ? toObj(e) : e)
        }
        else {  res[key] = toObj(obj[key]) }
      }
      else { res[key] = obj[key] }
    }
    return res
  }




const TYPES = {
    params: {
        method: "GET",
        headers: {},
        content: null,
        body: null,
        auth: null,
        timeout: 5000,
    },
    
    mime: {
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
    },

    errors: {
        url: (data) => `URL error. ${
            data === ""
            ? `"${data}" must not be empty`
            : `"${data}" must be a string`
        }`,

        timeout: (data) => `Timeout exceeded. The server did not respond to the request within ${data}ms`,

        parse: ([cnt, url]) => `Parsing error. Probably "${cnt}" is the wrong content type for "${url}", try another`,

        fetch: (data) => `Fetch error. Probably "${data}" does not exist or CORS is not allowed. Check if the URL is correct.`,

        bodyUsed: () => `The response body has already been used. Try using the $() function to get it manually`,
    },

    options: {
        default: ""
    },
}


function createError(err, data) {
    return `RapiError: ${TYPES.errors[err]?.(data) || err}`
}

function createParams(p = TYPES.params) {
    let data = {};

    data.method = p.method.toUpperCase();
    data.headers = p.headers || {}

    if (p.body && !['GET', 'HEAD'].includes(data.method)) {
        if (typeof p.body === 'object') {
            data.body = JSON.stringify(p.body)
        }
        else {
            data.body = p.body.toString()
        }
    }
    if (p.content) {
        data.headers['Content-Type'] = TYPES.mime[p.content] || p.content;
    }
    if (p.auth) {
        data.headers['Authorization'] = 'Bearer ' + p.auth;
    }
        
    return data;
}

function rest(response = new Response){
    function getCnt(cnt) {
        if (response.bodyUsed) {
            return console.error("\x1b[31m", createError("bodyUsed"))
        }
        return response[cnt]()
    }
    return {
        ...response,
        ...toObj(response),
        json: () => getCnt("json"),
        text: () => getCnt("text"),
        blob: () => getCnt("blob"),
        formData: () => getCnt("formData"),
        arrayBuffer: () => getCnt("arrayBuffer"), 
        response,
    }
}

const send = {
    data: function(response = new Response, content){
        return {
            ...rest(response),
            data: content,
            value: content,
            error: null
        }
    },
    error: function(response = new Response, content){
        return {
            ...rest(response),
            data: null,
            value: content,
            error: {
                type: content.type,
                cnt: content.cnt,
            }
        }
    },
}


export default function Rapi(
    ctx = fetch,
    options = TYPES.options
) {

    ctx ||= fetch;
    
    async function $(
        url = "",
        params = TYPES.params
    ) {
        if (!url || typeof url !== "string" ) throw Error(createError("url", url));

       if (options.default) {
            if (!/^https?(:+|\/+)+/.test(url)) {
                options.default = options.default.replace(/\/*$/, "/")
                url = options.default + url.replace(/^(?:\.*\/*)+/, "")
            }
       }

        let response = new Response
        
        try {
            response = await Promise.race([
                ctx(url, createParams(params)),
                
                new Promise(res => {
                    return setTimeout(() => {
                        return res({
                            errorType: "timeout",
                            cnt: createError("timeout", params.timeout),
                            ok: false,
                            status: 408,
                        })
                    }, params.timeout || 5000);
                }) 
            ])
        }
        catch (err) {
            return send.error(response, {
                type: "fetch",
                cnt: createError("fetch", url),
            });
        }



        response.errorType ||= false;

        
       try {
            if (response.ok) {
                return send.data(
                    response,
                    params.content ? await response[params.content]() : null
                );
            }
            else {
                return send.error(response, {
                    type: response.errorType,
                    cnt: response.cnt || (params.content ? await response[params.content]() : null)
                });
            }
       } catch (error) {
            return send.error(response, {
                type: "parse",
                cnt: createError("parse", [params.content, url]),
            });
       }

    }

    function createFetch(method = "GET", content) {
        return async ( url = "", params = TYPES.params ) => $( url, { ...params, method, content } )
    }
    
    function createMethod(method = "GET") {
        return {
            $           : createFetch( method ),
            json        : createFetch( method, 'json'        ),
            text        : createFetch( method, 'text'        ),
            blob        : createFetch( method, 'blob'        ),
            formData    : createFetch( method, 'formData'    ),
            arrayBuffer : createFetch( method, 'arrayBuffer' ),
        }  
    }

    return {
        $       : createFetch(),
        get     : createMethod( "GET"     ),
        post    : createMethod( "POST"    ),
        put     : createMethod( "PUT"     ),
        delete  : createMethod( "DELETE"  ),
        head    : createMethod( "HEAD"    ),
        options : createMethod( "OPTIONS" ),
        patch   : createMethod( "PATCH"   ),

        ctx:    (fetch_func = fetch) => ctx = fetch_func,
        config: (options_obj = {}) => options = { ...options, ...options_obj },
    }
}