<script>

    import { icons } from "$lib/js/icon.js";

</script>
<footer>
    <div class="container py-40 md:py-80" flex="50 m-md:col space md:ai-s">

        <div flex="10 col m-md:center">
            <h3 class="">
                <a href="/#top">
                
                    <img class="h-30" src="/logo-line.svg" alt="YOGA HATA">
                        
                
                </a>
            </h3>

            <div class="social gap-20">
                <a href="https://www.instagram.com/faynyys" target="_blank">
                    {@html icons.inst}
                </a>
                <!-- <a href="#/" target="_blank">
                    {@html icons.yt}
                </a> -->
                <a href="https://t.me/yoga_help" target="_blank">
                    {@html icons.tg}
                </a>
            </div>
        </div>

        <div flex="20 col center">
            <a text="h:$brand" href="tel:+380637950650">
                +38 (063) 795-06-50
            </a>
            <!-- <a href="https://maps.google.com" target="_blank">
                м. Київ, вул. Шевченка, 1
            </a> -->
            <a text="h:$brand" href="mailto:faynyyyoga@gmail.com" target="_blank">
                faynyyyoga@gmail.com
            </a>

            <a text="h:$brand" href="/policy" target="_blank">
                Політика конфіденційності
            </a>

            <a text="h:$brand" href="/offer" target="_blank">
                Договір оферти
            </a>
        </div>

        <div flex="10 col ai-c md:ai-e" class="op-50">
            <p>ФОП Москалець Сергій Романович</p>
            <p>ІПН 3569803798</p>
        </div>

    </div>
</footer>

<div class="bg-$brand80 p-10" flex="center" text="14 $black">
    Copyright © { new Date().getFullYear() } YOGA HATA
</div>

<style>
    .social a :global(svg) {
        transition: filter 200ms;
        --size: 24px;
        width: var(--size);
        height: var(--size);
    }
    .social a :global(svg):hover {
        color: var(--brand);
    }
</style>