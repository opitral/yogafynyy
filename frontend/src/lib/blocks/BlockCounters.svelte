<script>
    const content = [
        ["1",    "практика, аби відчути баланс в тілі, прилив енергії та ментальний спокій"],
        ["200+", "задоволених клієнтів, що позбулись Болісних діагнозів"],
        ["9",    "Практик потрібно для кардинальних змін у всіх сферах життя"],
    ]
</script>

<section class="bg-#292929 mt-50">
    <div class="container py-50" flex="50 col center">
        <h2 class="title" data-aos="fade-down">
            Статистика
        </h2>

        <div flex="50 md:100 m-md:col">
            {#each content as [title, text], index}
                <div class="max-w-300" flex="10 col center">
                    <h4 text="36 md:64" data-aos="zoom-in-up" data-aos-delay={index * 100}>
                        {title}
                    </h4>
                    <p text="#fff/50 center 14" data-aos="zoom-in-up" data-aos-delay={index * 100 + 100}>
                        {text}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>
