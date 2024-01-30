<script>
    import Btn from '$lib/ui/Btn.svelte';

    const list = [
        {
            icon: '/icon/include/bot.svg',
            text: 'інтерактивний та унікальний бот з 20+ високоякісними відео та аудіо практиками',
        },
        {
            icon: '/icon/include/audio.svg',
            text: 'понад 15 аудіо медитацій та афірмацій з живими інструментами Саунд-Хілінг цілющими вібраціями',
        },
        {
            icon: '/icon/include/message.svg',
            text: 'Безоціночне середовище Чат-комʼюніті зі спільними цінностями які прагнуть до розвитку',
        },
        {
            icon: '/icon/include/wind.svg',
            text: 'Дихальні практики для заспокоєння нервової системи та практики для заряду енергією',
        },
        {
            icon: '/icon/include/users.svg',
            text: 'Групові онлайн тренування йоги у потужній атмосфері української спільноти однодумців',
        },
        {
            icon: '/icon/include/question.svg',
            text: 'Служба турботи та підтримка на усіх рівнях повантаження в процес практик',
        },
    ];









</script>

<section flex="col" class="cir cir-br mt-50">
    <div class="container" flex="20 md:50 col center">
        <h2 class="title" data-aos="fade-down">
            ПЛАТФОРМА МІСТИТЬ
        </h2>
        <!-- <p class="subtitle" data-aos="fade-down" data-aos-delay="100">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore
        </p> -->

        <div grid="50 md:cols-2 ai-s">
            {#each list as {icon, text}, index}
                <div flex="30 col center" data-aos="fade-up" data-aos-delay="{index * 100}">
                    <img class="sq-50" src={icon} alt="">
                    <p text="center" class="max-w-450">{text}</p>
                </div>
            {/each}
        </div>

        <div flex="20 col center" class="mt-50">
            <p text="18 center" class="max-w-450" data-aos="fade-up">
                Досить відкладати щасливе життя на потім просто спробуй
            </p>
            <div data-aos="fade-up" data-aos-delay="100">
                <Btn />
            </div>
        </div>
    </div>
</section>
