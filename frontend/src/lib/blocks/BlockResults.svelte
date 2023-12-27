<script>
	import Btn from '$lib/ui/Btn.svelte';

    let list = [
        "sed eiusmod tempor incidunt ut labore",
        "sed eiusmod tempor incidunt ut labore",
        "sed eiusmod tempor incidunt ut labore",
        "sed eiusmod tempor incidunt ut labore",
    ]
</script>

<section flex="col" class="cir cir-tl md:mt-20">
    <div class="container" flex="col center">
        <!-- <h2 class="title">FYSM йога - що це</h2> -->

        <!-- <p class="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
        </p> -->

        <div class="mt-20" flex="20 md:100 m-md:col space">

            <img class="w-400" src="/img/lotus.png" alt="" data-aos="fade-right">

            <div class="" flex="30 col">
                <h5 text="24 md:36 up" data-aos="fade-down">
                    ваші результати після курсу
                </h5>

                <ul>
                    {#each list as item, index}
                        <li
                            data-aos="fade-left"
                            data-aos-delay="{(index * 100) + 100}"
                            text="18"
                        >{item}</li>
                    {/each}
                </ul>

                <div data-aos="fade-up">
                    <Btn />
                </div>
            </div>
        </div>
    </div>
</section>
