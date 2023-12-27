<script>
    const content = [
        "Lorem ipsum dolor sit amet, consectetur",
        "Lorem ipsum dolor sit amet, consectetur",
        "Lorem ipsum dolor sit amet, consectetur",
        "Lorem ipsum dolor sit amet, consectetur",
        "Lorem ipsum dolor sit amet, consectetur",
        "Lorem ipsum dolor sit amet, consectetur",
    ]
</script>

<section class="bg-#292929 mt-50">
    <div class="container py-50" flex="20 md:50 col center">
        <h2 class="title m-md:ta-center" data-aos="fade-down">Цей курс вам допоможе</h2>

        <div grid="30 cols-2 md:cols-3">
            {#each content as item, index}
                <div class="max-w-300" flex="20 col center" data-aos="fade-up" data-aos-delay="{index * 100}">
                    <img src="/icon/check.svg" alt="">
                    <p text="center" class="op-50">{item}</p>
                </div>
            {/each}
        </div>
    </div>
</section>
