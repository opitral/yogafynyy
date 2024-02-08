<script>
	import Btn from '$lib/ui/Btn.svelte';
    const content = [
        [
            "Якщо ви вставте текст",  [
                "dolor sit amet",
                "dolor sit amet",
                "dolor sit amet",
                "dolor sit amet",
            ]
        ],
        [
            "Якщо ви вставте текст", [
                "dolor sit amet",
                "dolor sit amet",
                "dolor sit amet",
                "dolor sit amet",
            ]
        ],
        [
            "Якщо ви вставте текст", [
                "dolor sit amet",
                "dolor sit amet",
                "dolor sit amet",
                "dolor sit amet",
            ]
        ],
    ]
</script>

<section class="bg-#292929 mt-50">
    <div class="container py-50" flex="40 col center m-md:ai-s">
        <h2 class="title" data-aos="fade-down">
            Для кого підходить платформа
        </h2>

        <p text="500 center" class="op-50 w-full">
            ДЛЯ УСІХ В КОГО Є ХРЕБЕТ
        </p>

        <div flex="12 col center" class=" m-md:w-full">
            <p text="14 md:18 up *:center" flex="15 col">
                <span>ІДЕАЛЬНИЙ СТАРТ ДЛЯ НОВАЧКІВ ЯКІ ШУКАЮТЬ З ЧОГО ПОЧАТИ СВІЙ ШЛЯХ В ЙОГУ</span>
                <span>ПОГЛИБЛЕННЯ У НОВЕ ТА РОЗШИРЕННЯ БАЗИ ЗНАНЬ</span>
                <span>ДЛЯ ДОСВІДЧЕНИХ ПРАКТИКІВ</span>
            </p>
            <!-- <p text="24 up">
               
            </p> -->
                
                 
            <!-- {#each content as [title, list], index}
                <div class="md:max-w-300" flex="10 col center" data-aos="fade-up" data-aos-delay="{index * 100}">
                    <p text="20 md:18 bold" class="md:p-15+30 m-md:w-full">
                        {title}
                    </p>
                    
                    <ul class="bg-#222/80 p-20 w-full">
                        {#each list as item}
                            <li>{item}</li>
                        {/each}
                    </ul>
                </div>
            {/each} -->
        </div>

        <div data-aos="fade-down" class="m-md:flex-center m-md:w-full">
            <Btn />
        </div>
    </div>
</section>

<style>
    /* .title {
        position: relative;
    }
    .title:after {
        content: 'Спойлер. Для всіх)';
        font-size: 12px;
        margin-left: 10px;
        font-weight: 400;
        opacity: .3;
        position: absolute;
        bottom: 5px;
        width: max-content;
    } */
</style>
