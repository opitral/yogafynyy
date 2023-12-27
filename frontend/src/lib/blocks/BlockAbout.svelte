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

<section flex="col" class="cir cir-bl mt-50">
    <div class="container" flex="col center">
        <h2 class="title" data-aos="fade-down">
            YOGA BLOCK TITLE
        </h2>
        <p class="subtitle" data-aos="fade-down" data-aos-delay="100">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
        </p>

        <div class="mt-20 md:>:w-half" flex="20 md:100 m-md:col space">

            <img class="m-md:w-80%" src="/img/spider.png" alt="" data-aos="fade-right">

            <div class="md:mt--100" flex="30 col">
                <h5 data-aos="fade-up" data-aos-delay="200">
                    Обретите здоровое и гибкое тело на всю жизнь
                </h5>
                <p text="18" data-aos="fade-up" data-aos-delay="300">
                    Цей курс для вас, якщо:
                </p>

                <ul>
                    {#each list as item, index}
                        <li data-aos="fade-up"
                            data-aos-delay="{index * 200}"
                            data-aos-offset="0" 
                        >{item}</li>
                    {/each}
                </ul>

                <div data-aos="zoom-in">
                    <Btn />
                </div>
            </div>
        </div>
    </div>
</section>
