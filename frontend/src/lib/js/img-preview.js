const stringToHTML = function (str) {
    return new DOMParser()
        .parseFromString(str, 'text/html')
        .body
        .children
};



export default function(node, params = {}) {
    node.addEventListener('click', function (e) {
        e.preventDefault();

        document.body.style.overflow = 'hidden';

        let id = `prev${Math.round(Math.random() * 100)}`;

        let html = stringToHTML(/* html */`
            <div
                class="fullscreen fixed flex-center flex-col gap-30 z-999"
                id="${id}"
                style="
                    box-shadow: inset 0 0 0 9999px rgba(0,0,0,.8);
                "
            >
                <img
                    class="w-80% fit-contain ${params.class}"
                    src="${params.src || node.src}"
                    alt="${params.alt}"
                />

                <button
                    class="bg-$brand c-black sq-40 round fs-24 pointer flex-center bold"
                >✕</button>
            </div>
        `);

        document.body.append(...html);

        const wrapper = document.querySelector(`#${id}`)
        const btn = document.querySelector(`#${id} button`)

        btn.addEventListener("click", () => {
            wrapper.remove()
            document.body.style.overflow = ''
        })
    });
}
