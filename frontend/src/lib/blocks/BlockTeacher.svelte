<script>
	import Btn from '$lib/ui/Btn.svelte';
    import imgPreview from '../js/img-preview.js';

    const diploms = [
        "https://kupit-diploms.com/images/red_bak_3.jpg",
        "https://childdevelop.com.ua/doc/images/news/109/10966/2__1__m.png",
        "https://diplomukr.kiev.ua/wp-content/uploads/2020/02/molodshij-speczialist-diplom-z-1993.jpg",
    ]

    const list = [
        "sed eiusmod tempor incidunt ut labore",
        "sed eiusmod tempor incidunt ut labore",
        "sed eiusmod tempor incidunt ut labore",
    ]
</script>

<section flex="col" class="cir cir-br mt-50">
    <div class="container" flex="md:30 col center">
        <h2 class="title" data-aos="fade-down">ПРО МАЙСТРА</h2>
        <!-- <p class="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
        </p> -->

        <div class="md:mt-20 md:>:w-half" flex="50 m-md:col space">

            <div class="mt--30 md:mt--100" flex="30 col">
                <h5 text="32" data-aos="fade-down">Привіт, мене звати Серж Файний</h5>
                <p text="18" data-aos="fade-down">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
                </p>

                <ul>
                    {#each list as item, index}
                        <li data-aos="fade-up" data-aos-delay="{index * 100}">{item}</li>
                    {/each}
                </ul>

                <div flex="30" class="diploms w-80% h-80 md:h-100">
                    {#each diploms as item, index}
                        <div data-aos="zoom-in-up"
                            data-aos-delay={index * 100}
                            data-aos-duration="500"
                        >
                            <img use:imgPreview src={item} alt="">
                        </div>
                    {/each}
                </div>

                <Btn />
            </div>

            <img class="m-md:order--1" src="/img/lotus.png" alt="" data-aos="fade-left">

        </div>
    </div>
</section>

<style>
    .diploms img {
        height: 100%;
        opacity: .3;
        cursor: pointer;
        transition: all .3s ;
    }

    .diploms img:hover {
        opacity: 1;
        transform: translateY(-10px);
    }

    
</style>