<script>
    export let
        text = "ОТРИМАТИ ДОСТУП", 
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