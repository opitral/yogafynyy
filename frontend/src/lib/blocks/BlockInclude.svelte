<script>
    import Btn from '$lib/ui/Btn.svelte';

    const list = [
        {
            icon: '/icon/icon.svg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore',
        },
        {
            icon: '/icon/icon.svg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore',
        },
        {
            icon: '/icon/icon.svg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore',
        },
        {
            icon: '/icon/icon.svg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore',
        },
        {
            icon: '/icon/icon.svg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore',
        },
        {
            icon: '/icon/icon.svg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore',
        },
    ];
</script>

<section flex="col" class="cir cir-br mt-50">
    <div class="container" flex="20 md:50 col center">
        <h2 class="title" data-aos="fade-down">Курс включає в себе</h2>
        <!-- <p class="subtitle" data-aos="fade-down" data-aos-delay="100">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
        </p> -->

        <div grid="50 md:cols-2">
            {#each list as {icon, text}, index}
                <div flex="30 col center" data-aos="fade-up" data-aos-delay="{index * 100}">
                    <img class="sq-40" src={icon} alt="">
                    <p text="center">{text}</p>
                </div>
            {/each}
        </div>

        <div flex="20 col center" class="m-md:mt-50">
            <p text="24 center" class="max-w-450" data-aos="fade-up">
                Досі вагаєтесь, прийшов час змінювати своє життя на краще
            </p>
            <div data-aos="fade-up" data-aos-delay="100">
                <Btn />
            </div>
        </div>
    </div>
</section>
