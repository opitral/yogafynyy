const stringToHTML = function (str) {
	var dom = document.createElement('div');
	dom.innerHTML = str;
	return [...dom.children];
};

export default function(node, params = {}){
    node.addEventListener("click", function(e){
        e.preventDefault();

        document.body.style.overflow = 'hidden'

        let count = Math.round(Math.random() * 100);

        let html = /*html*/`
            <div
                class="fullscreen fixed preview flex-center"
                id="prev${count}"
                style="
                    box-shadow: inset 0 0 0 9999px rgba(0,0,0,.5);
                "
            >
                <button
                    class="close abs top-20 right-20 bg-tp fs-24 pointer"
                    onclick="
                        document.querySelector('#prev${count}').remove(),
                        document.body.style.overflow = ''
                    "
                >✕</button>
                
                <img
                    class="h-80% w-80% fit-contain ${params.class}"
                    src="${params.src || node.src}"
                    alt="${params.alt}"
                />
            </div>
        `

        const preview = stringToHTML(html);
        
        document.body.append(...preview)

    })
}