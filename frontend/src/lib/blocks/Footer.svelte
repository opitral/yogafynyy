<script>

    import { icons } from "$lib/js/icon.js";

</script>
<footer>
    <div class="container py-40 md:py-80" flex="50 m-md:col space md:ai-s">

        <div flex="10 col m-md:center">
            <h3 class="">
                <a href="/#top">Yoga Rutm</a>
            </h3>

            <div class="social gap-20">
                <a href="#/" target="_blank">
                    {@html icons.inst}
                </a>
                <a href="#/" target="_blank">
                    {@html icons.yt}
                </a>
                <a href="#/" target="_blank">
                    {@html icons.tg}
                </a>
            </div>
        </div>

        <div flex="20 col center">
            <a href="tel:0981234567" target="_blank">
                +38 (098) 12 - 34 - 567
            </a>
            <a href="https://maps.google.com" target="_blank">
                м. Київ, вул. Шевченка, 1
            </a>
            <a href="mailto:lorem-ipsum-dolor@gmail.com" target="_blank">
                lorem-ipsum-dolor@gmail.com
            </a>
        </div>

        <div flex="10 col ai-c md:ai-e" class="op-50">
            <p>ФОП Файний Серж Батькович</p>
            <p>ІНН 2199115250</p>
        </div>

    </div>
</footer>

<div class="bg-$brand80 p-10" flex="center" text="14 $black">
    Copyright © { new Date().getFullYear() } Yoga Rutm
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