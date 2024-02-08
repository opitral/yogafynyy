<script>
    export let
        text = "ОТРИМАТИ ДОСТУП", 
        href = "#buy",
        icon = "",
        cls = ""
</script>

<a href={href} class="btn {cls}" target="_{href[0] == "#" ? "self" : "blank"}">
    {#if icon}
        <img src={icon} alt="">
    {/if}

    {text}
</a>

<style>
    
</style>