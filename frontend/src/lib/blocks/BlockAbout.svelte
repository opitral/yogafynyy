<script>
	import Btn from '$lib/ui/Btn.svelte';

    const list = [
        "відчуваєш дискомфорт та болі в спині та шиї",
        "маєш проблеми зі стресом та тривогою і хочеш заспокоїтися",
        "бажаєш отримати отримаєте сильне, гнучке та багатофункціональне тіло",
        "відчуваєш нестачу енергії, некеровані емоції, апатію та хронічну втому",
        "хочеш поліпшити якість сну,  концентраціію та памʼять а також позбутися ментальних блоків",
        "прагнеш пізнати йогу але незнаєш з чого почати",
    ]
</script>

<section flex="col" class="cir cir-bl mt-50">
    <div class="container" flex="col center">
        <h2 class="title" data-aos="fade-down">
            Просто довірся бо твої зміни вже почались
        </h2>
        <p class="subtitle" data-aos="fade-down" data-aos-delay="100">
            Отримай сильне, гнучке, підтягнуте та здорове тіло, чистий та спокійний розум та вміння справлятись зі стресом через практику ефективної та безпечної йоги в стилі FYSM
        </p>

        <div class="mt-20 md:>:w-half" flex="20 md:100 m-md:col space">

            <img class="m-md:w-80%" src="/img/spider.png" alt="" data-aos="fade-right">

            <div class="" flex="30 col">
                <h5 data-aos="fade-up" data-aos-delay="200">
                    Платформа  YOGA HATA саме для тебе, якщо:
                </h5>
                <p text="18" data-aos="fade-up" data-aos-delay="300">
                    Цей курс для вас, якщо:
                </p>

                <ul>
                    {#each list as item, index}
                        <li data-aos="fade-up"
                            data-aos-delay="{index * 200}"
                            data-aos-offset="0" 
                            class="mb-15"
                            text="14"
                        >{item}</li>
                    {/each}
                </ul>
                
                <p text="14 100" data-aos="fade-up">
                    Відчуй результат після першої практики або ми повернемо кошти!
                </p>

                <div data-aos="zoom-in">
                    <Btn />
                </div>
            </div>
        </div>
    </div>
</section>
