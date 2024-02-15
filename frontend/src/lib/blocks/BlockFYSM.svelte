<script>
	import Btn from '$lib/ui/Btn.svelte';

    const list = [
        "Методологія опирається на 3 постулати: безпечність, ефективність, простота. При цьому збережена уся аутентичність передана в йогічних писаннях",

        "назавжди позбавить вас болей в спині, гриж та протрузії всього за 40 хвилин практики на килимку",

        "FYSM - це про дисципліну, чесніть та результат. Алгоритми (послідовність вправ) покривають усі ключові запити і потреби сучасної людини яка хоче отримати від йоги “усе і одразу“",

        "у методології відсутні травмонебезпечні асани які є у класичній йозі. Кожна звʼязка асан це “КОД” яким ви через власне тіло пишете магічну реальність",

        "Незалежно від віку та обставин. Старий, немічний чи молодий. Неважливий початковий стан, гендер та вік. Той хто регулярно практикує йогу неодмінно досягне успіху ",
    ]
</script>

<section flex="col" class="cir cir-tl mt-50" id="fysm">
    <div class="container" flex="col center">
        <h2 class="title" data-aos="fade-down">
            ПРО FYSM ЙОГУ
        </h2>
        <p class="subtitle" data-aos="fade-down">
            FYSM - Fresh Yoga Synthesized Methodology <br>
            Сучасна синтезована методологія, що поєднала в собі найкраще з відомого у світі йоги
        </p>

        <div class="mt-20" flex="20 md:100 m-md:col space">

            <img class="md:w-40%" src="/img/video.png" alt="" data-aos="fade-right">

            <div class="" flex="30 col">
                <!-- <h5 data-aos="fade-up" data-aos-delay="100">Обретите здоровое и гибкое тело на всю жизнь</h5>
                <p text="18" data-aos="fade-up">Цей курс для вас, якщо:</p> -->

                <ul>
                    {#each list as item, index}
                        <li
                            text="14 400"
                            class="mb-15"
                            data-aos="fade-up"
                            data-aos-delay="{(index * 100)}"
                        >{item}</li>
                    {/each}
                </ul>

                <div data-aos="fade-left">
                    <Btn />
                </div>
            </div>
        </div>
    </div>
</section>
