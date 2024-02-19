<script>
    import { onMount } from 'svelte';

    export let data;
    let loaded

    let files = data.files || [];

    onMount(() => {
        if (data.error) {
            console.log(data.error);
            alert('Помилка');
        }
        loaded = true
    });
</script>

{#if loaded}
    <div grid="50 md:cols-2 lg:cols-3 ji-c" class="p-40">
        {#each files as file}
            <a href={file}>
                <img class="h-200" src={file} alt="" />
            </a>
        {/each}
    </div>

{:else}
    <div class="fixed sq-full flex-center">
        <img id="loader" class="sq-50" src="logo-icon.svg" alt="">
    </div>
{/if}


<style>
    #loader {
        animation: load 3s alternate infinite;    
    }

    @keyframes load {
        to { scale: 1.5 }
    }
</style>
