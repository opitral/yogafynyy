<script>
	import Btn from '$lib/ui/Btn.svelte';
    import imgPreview from '../js/img-preview.js';

    const diploms = [
        "/diplomas/1.png",
        "/diplomas/2.png",
    ]

    const list = [
        "Сертифікований тренер з йоги в стилі FYSM",
        "Дипломований масажист-терапевт",
        "Навчався в сучасному храмі духовного розвитку людини у Києві",
        "Провів через йогу FYSM більше 200 людей які всього за 2 місяці отримали повну трансформацію життя",
        "Через практику FYSM позбувся власного перекосу в тілі та пропрацював всі минулі спортивні та психологічні травми, а зараз ділиться цим з людьми",
    ]
</script>

<section flex="col" class="cir cir-br mt-50" id="teacher">
    <div class="container" flex="md:30 col center">
        <h2 class="title" data-aos="fade-down">
            ПРО ТІЧЕРА
        </h2>
        <!-- <p class="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
        </p> -->

        <div class="md:mt-20 " flex="50 m-md:col space center">

            <div class="" flex="30 col">
                <p text="14" data-aos="fade-down">
                    Тіло це єдине місце де вам доведеться жити вічно - куди б ви не тікали...
                </p>
                <h5 text="32" data-aos="fade-down">
                    Серж Файний
                </h5>
                <!-- <p text="18" data-aos="fade-down">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
                </p> -->

                <ul>
                    {#each list as item, index}
                        <li
                            data-aos="fade-up"
                            data-aos-delay="{index * 100}"
                            class="mb-15 fs-14"
                        >{item}</li>
                    {/each}
                </ul>

                <div flex="30" class="diploms w-80% h-80 md:h-100">
                    {#each diploms as item, index}
                        <div
                            data-aos="zoom-in-up"
                            data-aos-delay={index * 100}
                            data-aos-duration="500"
                        >
                            <img use:imgPreview src={item} alt="">
                        </div>
                    {/each}
                </div>

                <Btn />
            </div>

            <img class="m-md:order--1 md:w-50%" src="/img/lotus2.png" alt="" data-aos="fade-left">

        </div>
    </div>
</section>

<style>
    .diploms img {
        height: 100%;
        opacity: .6;
        cursor: pointer;
        transition: all .3s ;
    }

    .diploms img:hover {
        opacity: 1;
        transform: translateY(-10px);
    }

    
</style>