<script>
    export let
        text = "Записатися на курс", 
        href = "#buy",
        icon = "",
        cls = ""
</script>

<a href={href} class="btn {cls}">
    {#if icon}
        <img src={icon} alt="">
    {/if}

    {text}
</a>

<style>
    
</style>