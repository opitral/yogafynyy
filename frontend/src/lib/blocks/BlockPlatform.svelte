<script>
	import Btn from '$lib/ui/Btn.svelte';
</script>

<section flex="col" class="cir cir-tr mt-50">
    <div class="container" flex="col center">
        <h2 class="title" data-aos="fade-down">про платформу</h2>
        <!-- <p class="subtitle">
            Розкрий свій внутрішній потенціал через ЙОГУ
        </p> -->

        <div class="mt-20 " flex="50 md:100 m-md:col space">
            <div class="md:w-2/3" flex="30 col">
                <h5 data-aos="zoom-in-down">
                    Розкрий свій внутрішній потенціал через ЙОГУ
                </h5>

                <p text="14 md:18" data-aos="zoom-in" data-aos-delay="200">
                    нова методологія йоги, базується на ювелірно підібраних асанах, комбінаціях дихань та переходах
                    <br>
                    <br>
                    за рахунок цього за відносно короткий відрізок часу можна згенерувати стабільний результат практики всього за 20-40 хвилин в день, незалежно від локації, конституції тіла, віку, релігії або інший якостей людини
                </p>

                <div data-aos="zoom-in-up" data-aos-delay="300">
                    <Btn />
                </div>
            </div>

            <img class="md:w-1/3" src="/img/mockup.png" alt="" data-aos="zoom-in-left" data-aos-delay="400">
        </div>
    </div>
</section>
