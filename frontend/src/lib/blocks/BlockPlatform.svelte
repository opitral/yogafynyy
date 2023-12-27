<script>
	import Btn from '$lib/ui/Btn.svelte';
</script>

<section flex="col" class="cir cir-tr mt-50">
    <div class="container" flex="col center">
        <h2 class="title" data-aos="fade-down">про платформу</h2>
        <!-- <p class="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
        </p> -->

        <div class="mt-20 " flex="50 md:100 m-md:col space">
            <div class="md:w-2/3" flex="30 col">
                <h4 data-aos="zoom-in-down">Як це все працює</h4>

                <p text="14 md:18" data-aos="zoom-in" data-aos-delay="200">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore. 
                </p>

                <div data-aos="zoom-in-up" data-aos-delay="300">
                    <Btn />
                </div>
            </div>

            <img class="md:w-1/3" src="/img/mockup.png" alt="" data-aos="zoom-in-left" data-aos-delay="400">
        </div>
    </div>
</section>
