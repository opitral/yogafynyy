<script>
	import Btn from '$lib/ui/Btn.svelte';
	import Footer from '$lib/blocks/Footer.svelte';
    import { page } from '$app/stores';

    export let form

    form ||= {}

    console.log(form)

    const support = "https://t.me/yoga-support"

    const statusContent = {
        success : {
            icon: `
                <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.918 44.274L35.8513 66.0717L78.8512 25.201" stroke="#C5E812" stroke-width="10" stroke-linecap="round"/>
                </svg>
            `,
            title: "Оплата пройшла успішно",
            subtitle: "Тепер ви маєте доступ до нашого телеграм бота, там ви знайдете все що потрібно",
            btn: {
                text: "Перейти до бота", link: form.message
            }
        },

        error: {
            icon: `
                <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M68.3848 22.6362L23.3848 67.6362" stroke="#C5E812" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23.3848 22.6362L68.3848 67.6362" stroke="#C5E812" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `,
            title: "Ой, щось пішло не так",
            subtitle: "Скоріше за все у нас виникли технічні негаразди, зверніться в підтримку або спробуйте пізніше",
            btn: {
                text: "Написати в підтримку", link: support
            }
        }
    }

    

    const status = form.message ? "success" : "error";
    const content = statusContent[status]
</script>

<div class="min-h-screen flex-col">
    <header class="py-30 bg-#222 rel z-1">
        <div class="container">
            <a href="/">
                <h4 text="$brand">LogoYoga</h4>
            </a>
        </div>
    </header>
    
    <main class="bg-#292929 grow py-50 md:py-30 cir cir-tl after:z-0 cir2 cir2-br before:z-0" flex="col">
        <div class="container grow py-30 rel z-1" flex="30 col center">
            <div class="grow" flex="30 col center" text="*:center">
                {@html content.icon}
                <h2 text="20 md:32">{content.title}</h2>
                <p text="14 md:18" class="max-w-600">{content.subtitle}</p>
                <Btn text={content.btn.text} href={content.btn.link} />
            </div>

            {#if status !== "error"}
                <p text="14" class="mt-100">
                    Виникли проблеми? Зверніться в
                    <a href="{support}" text="$brand">підтримку</a>
                </p>
            {/if}
        </div>
    </main>
    
    <Footer />
</div>