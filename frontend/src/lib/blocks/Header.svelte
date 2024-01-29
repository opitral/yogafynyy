<script>
	import Btn from '$lib/ui/Btn.svelte';

    const links = [
        { href: "#/", text: "Lorem link" },
        { href: "#/", text: "Lorem link" },
        { href: "#/", text: "Lorem link" },
        { href: "#/", text: "Lorem link" },
        { href: "#/", text: "Lorem link" },
    ]

</script>

<header flex="col" class="cir cir-br min-h-100vh m-md:mb-50" id="top">
    <div class="container grow" flex="col">

        <div flex="jc-c md:space" class="py-30">
            <h4 text="$brand">LogoYoga</h4>
            <nav class="m-md:hide" flex="50">
                {#each links as {href, text}}
                    <a text="h:$brand" {href}>{text}</a>
                {/each}
            </nav>
        </div>

        <div class="md:grow " flex="20 md:50 lg:100 space m-md:col">
            <div class="mt--40 md:mt--100 m-md:order-1" flex="30 col m-md:center" >
                <h1 text="36 md:48 900 nowrap">
                    YOGA <span text="$brand">HATA</span>
                </h1>
                <p text="16" class="op-50 m-md:ta-center">
                    Онлайн-платформа безпечної , простої та ефективної йоги в стилі FYSM від сертифікованого тренера Сержа Файного
                    <br>
                    <br>
                    Розкрий свій внутрішній потенціал та силу через Йогу та назавжди позбудься тривоги, стресу, болю та затисків в тілі
                    <br>
                    <br>
                    Більше 20 унікальних практик йоги, аудіо-медитацій та дихальних практик
                </p>
                <Btn />
            </div>

            <img class="max-w-450 lg:max-w-550 w-80% md:w-full" src="/img/hero.png" alt="">
        </div>
    </div>
</header>

<style>
    header {
        /* mix-blend-mode: screen; */
        background-image: url(/img/smoke.png);
        background-repeat: no-repeat;
        background-position-x: right;
        background-position-y: 100%;
        background-size: 60% auto;
    }

    @media (max-width: 768px) {
        header {
            background-position-y: 50%;
            background-size: 100% auto;
        }

    }
</style>