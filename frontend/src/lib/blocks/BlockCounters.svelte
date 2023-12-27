<script>
    const content = [
        ["150+", "Lorem ipsum dolor sit amet"],
        ["200+", "Lorem ipsum dolor sit amet"],
        ["50+",  "Lorem ipsum dolor sit amet"],
    ]
</script>

<section class="bg-#292929 mt-50">
    <div class="container py-50" flex="50 col center">
        <h2 class="title" data-aos="fade-down">Блок з цифрами</h2>

        <div flex="50 md:100 m-md:col">
            {#each content as [title, text], index}
                <div class="max-w-300" flex="10 col center">
                    <h4 text="36 md:64" data-aos="zoom-in-up" data-aos-delay={index * 100}>
                        {title}
                    </h4>
                    <p text="#fff/50" data-aos="zoom-in-up" data-aos-delay={index * 100 + 100}>
                        {text}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>
