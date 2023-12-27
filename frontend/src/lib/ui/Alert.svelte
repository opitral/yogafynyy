<script>
    import { page } from '$app/stores';
	import { fly } from 'svelte/transition';

    export let discount = 0

    let ok = false
    let pos = { x: "100%", y: "0%" }
    $: modal_open = $page.url.hash == "#buy"

    setTimeout(()=>{
        
        if (typeof innerWidth !== "undefined" && innerWidth < 768) {
            pos = { x: "0%", y: "100%" }
        }

        ok = true
    }, 10000)
</script>

{#if ok && !modal_open}
    <div transition:fly={pos}>
        <p>Придбайте курс зараз <br> та отримайте знижку {discount}%</p>

        <a href="#buy" on:click={() => ok = false}>Придбати</a>

        <button on:click={() => ok = false}>✕</button>
    </div>
{/if}

<style>
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;

        position: fixed;
        bottom: 10px;
        right: 10px;
        
        background: var(--brand);
        padding: 20px;
    }

    @media (max-width: 768px) {
        div {
            bottom: 0;
            right: 0;
            width: 100%;
        }
    }

    p {
        color: var(--black);
        font-size: 14px;
        font-weight: bold;
    }

    a {
        background: var(--black);
        padding: 10px 15px;
        font-size: 14px;
    }

    button {
        background: transparent;
        color: var(--black);
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
    }
</style>