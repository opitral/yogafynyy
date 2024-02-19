<script>
	import Btn from '$lib/ui/Btn.svelte';

    let reviews = [
        {
            userIcon: "/img/user.png",
            userName: "Елена Домот",
            text: `Курс класс, все тренировки нескучные! Костя круто объясняет, и то, что казалось невыполнимым.`,
            stars: 5
        },
        {
            userIcon: "/img/user.png",
            userName: "Елена Домот",
            text: `Занималась с Костей еще в другом проекте, когда нашел "своего тренера", ходишь за ним от зала к залу.`,
            stars: 5
        },
        {
            userIcon: "/img/user.png",
            userName: "Елена Домот",
            text: `Я занимаюсь online с Костей давно, практически регулярно иду на новый курс.`,
            stars: 4
        },
    ]
</script>

<section flex="col" class="cir cir-bl mt-50 ">
    <div class="container" flex="col center">
        <h2 class="title" data-aos="fade-down">
            мої клієнти скажуть більше
        </h2>

        <p class="subtitle" text="up" data-aos="fade-down" data-aos-delay="100">
            ВІдгуки практикуючих
        </p>

        <div flex="30 m-md:col" class="mt-30">

            {#each reviews as {userIcon, userName, text, stars}, index}
                <div 
                    class="bg-#2d2d2d p-30 w-full"
                    flex="20 col"
                    data-aos="fade-up"
                    data-aos-delay="{index * 100}"
                >
                    
                    <div flex="20 ai-c">
                        <img src={userIcon} alt="">
                        <p text="18 bold up">{userName}</p>
                    </div>
                    
                    <p class="grow">{text}</p>

                    <!-- <div>
                        <img style:opacity={stars >= 1 ? 1 : .3} src="/icon/star.svg" alt="">
                        <img style:opacity={stars >= 2 ? 1 : .3} src="/icon/star.svg" alt="">
                        <img style:opacity={stars >= 3 ? 1 : .3} src="/icon/star.svg" alt="">
                        <img style:opacity={stars >= 4 ? 1 : .3} src="/icon/star.svg" alt="">
                        <img style:opacity={stars >= 5 ? 1 : .3} src="/icon/star.svg" alt="">
                    </div> -->
                </div>
            {/each}

        </div>
    </div>
</section>
