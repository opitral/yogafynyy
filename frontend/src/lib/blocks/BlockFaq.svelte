<script>
	import Btn from '$lib/ui/Btn.svelte';
    const content = [
        {
            question: "Lorem ipsum dolor sit ame?",
            answer: "Lorem ipsum dolor sit , consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore"
        },
        {
            question: "Lorem ipsum dolor sit ame?",
            answer: "Lorem ipsum dolor sit amet, consectetur  elit, sed eiusmod tempor incidunt ut labore et dolore"
        },
        {
            question: "Lorem ipsum dolor sit ame?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed  tempor incidunt ut labore et dolore"
        },
        {
            question: "Lorem ipsum dolor sit ame?",
            answer: "Lorem ipsum  sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore"
        },
        {
            question: "Lorem ipsum dolor sit ame?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod  incidunt ut labore et dolore"
        },
    ]

    function createAccordeon(node) {
        const find = (el, sel) => el.querySelector(sel)
        let list = node.children
        
        for (const elem of list) {
            const title   = find(elem, ".acc_title")
            const content = find(elem, ".acc_cnt")
            const height  = content.scrollHeight + "px"

            title.addEventListener("click", function() {
                if (innerWidth > 768) return

                for (const elem2 of list) {
                    if (elem2 !== elem) {
                        find(elem2, ".acc_cnt").style.maxHeight = 0
                        elem2.classList.remove("active")
                    }
                }

                content.style.maxHeight = elem.classList.toggle("active") ? height : 0
            })

            title.addEventListener("mouseenter", function() {
                if (innerWidth < 768) return

                const answer = document.querySelector(".answer_content") 
                answer.innerText = content.innerText
            })

            title.addEventListener("mouseleave", function() {
                if (innerWidth < 768) return

                const answer = document.querySelector(".answer_content") 
                answer.innerText = ""
            })

            content.style.maxHeight = "0px"
            content.style.transition = "all 300ms"
        }
    }
</script>

<section class="bg-#292929 mt-50">
    <div class="container py-50" flex="50 col center">
        <h2 class="title" data-aos="fade-down">Виникли питання?</h2>

        <div flex="50 ai-c m-md:col">
            <div
                flex="col"
                class="md:max-w-400"
                use:createAccordeon
                data-aos="fade-up" data-aos-delay="0"
            >
                {#each content as {question, answer}}

                    <div class="w-full">
                        <div class="acc_title p-15 pointer" flex="10 space">
                            <p>{question}</p>
                            <img class="m-md:rotate-90" src="/icon/arrow.svg" alt="">
                        </div>
                        <div class="acc_cnt over-hidden" style="max-height: 0px">
                            <p class="p-15">{answer}</p>
                        </div>
                    </div>

                {/each}
            </div>

            <div
                class="max-w-400 rel"
                flex="20 col center" 
                data-aos="fade-up" 
                data-aos-delay="100"
            >

                <div class="answer_content"></div>

                <p text="20 bold center">
                    У вас інше питання? Задайте його нашому боту
                </p>
                <p text="14 center">
                    Перейдіть до нашого бота натисніть “Поставити питання” та напишіть що вас цікавить, в найближчий час ви отримаєте відповідь
                </p>

                <Btn text="@faqYoga" icon="/icon/tg.svg" cls="px-30" />
            </div>
        </div>
    </div>
</section>

<style>
    .answer_content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #292929;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        text-align: center;
        padding: 30px
    }
    .answer_content:empty {
        display: none;
    }

    :global(.active) .acc_title img {
        transform: rotate(180deg);
    }
</style>
