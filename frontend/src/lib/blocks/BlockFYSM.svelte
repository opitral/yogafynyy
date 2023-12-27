<script>
	import Btn from '$lib/ui/Btn.svelte';

    const list = [
        "sed eiusmod tempor incidunt ut labore",
        "sed eiusmod tempor incidunt ut labore",
        "sed eiusmod tempor incidunt ut labore",
        "sed eiusmod tempor incidunt ut labore",
        "sed eiusmod tempor incidunt ut labore",
        "sed eiusmod tempor incidunt ut labore",
    ]
</script>

<section flex="col" class="cir cir-tl mt-50">
    <div class="container" flex="col center">
        <h2 class="title" data-aos="fade-down">FYSM йога - що це</h2>
        <p class="subtitle" data-aos="fade-down">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
        </p>

        <div class="mt-20 md:>:w-half" flex="20 md:100 m-md:col space">

            <img src="/img/video.png" alt="" data-aos="fade-right">

            <div class="" flex="30 col">
                <h5 data-aos="fade-up" data-aos-delay="100">Обретите здоровое и гибкое тело на всю жизнь</h5>
                <p text="18" data-aos="fade-up">Цей курс для вас, якщо:</p>

                <ul>
                    {#each list as item, index}
                        <li data-aos="fade-up" data-aos-delay="{(index * 100)}">{item}</li>
                    {/each}
                </ul>

                <div data-aos="fade-left">
                    <Btn />
                </div>
            </div>
        </div>
    </div>
</section>
