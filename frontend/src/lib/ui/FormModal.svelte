<script>
    import { page } from '$app/stores';
    import { store } from '$lib/store.js';
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import { alertError } from '$lib/js/tst-variants.js';
    import { api } from '$lib/js/api.js';

    export let price = 0,
        discount = 0,
        _id;

    let new_price = price - (price / 100) * discount;

    price /= 100;
    new_price /= 100;

    const fly_params = { y: 100, duration: 300 };

    let open;
    let body;
    let input_email;
    let input_phone;
    let mask_email;
    let mask_phone;
    let disabled;

    function hashChange(hash) {
        open = hash === '#buy';
    }

    $: hashChange($page.url.hash);

    $: if (body) {
        body.style.overflow = open ? 'hidden' : '';
    }

    $: if (open && body && input_phone) {
        // mask_email = new Inputmask('email').mask(input_email);
        mask_phone = new Inputmask('+38 (999) 99-99-999').mask(input_phone);
    }

    onMount(() => {
        body = document.body;
        addEventListener('hashchange', () => hashChange(location.hash));
    });

    async function submitForm(e) {
        if (disabled) return;

        disabled = true;

        const { data, error } = await api.post.json(`courses/${_id}/buy`, {
            body: {
                email: $store.email,
                phone: mask_phone.unmaskedvalue(),
            },
        });

        disabled = false;

        if (error) {
            if (error.type) {
                error.cnt = {
                    error: 'Помилка. Спробуйте пізніше',
                };
            }

            return alertError.show({
                text: error.cnt.error,
                time: 3000,
            });
        }

        // open(data.message);

        location.href = data.message;
    }
</script>

{#if open}
    <div class="modal" transition:fade>
        <form
            action="#"
            method="POST"
            flex="20 col ai-s"
            class="max-w-600"
            transition:fly={fly_params}
            on:submit|preventDefault={submitForm}
        >
            <div class="close">
                <button
                    type="button"
                    class="bg-tp pointer"
                    text="24"
                    on:click={() => {
                        history.back();
                        // open = false
                    }}
                >✕</button>
            </div>

            <p text="20 bold" class="w-95%">
                <!-- Купіть курс прямо зараз та отримайте знижку {discount}% -->
                Долучайся до платформи прямо зараз та отримай знижку {discount}%
            </p>
            <p text="18">
                Цінність курсу {new_price} грн
                <span text="14 gray delete">{price} грн</span>
            </p>
            <p text="20 bold">Вкажіть свої дані</p>

            <input
                required
                type="text"
                name="email"
                placeholder="Ваш E-mail"
                bind:this={input_email}
                bind:value={$store.email}
            />
            <input
                required
                type="tel"
                name="phone"
                placeholder="Ваш Телефон"
                bind:this={input_phone}
            />

            <button class="btn disabled:op-20" type="submit" {disabled}>
                Далі
            </button>
        </form>
    </div>
{/if}

<style>
    form {
        position: relative;
        background: var(--black);
        padding: 30px;
        border: 1px solid var(--brand50);
    }

    input {
        width: 100%;
        padding: 15px;
        background: var(--black);
        border: 1px solid var(--brand);
    }

    .modal {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        z-index: 999;
    }

    .close {
        position: absolute;
        top: 15px;
        right: 15px;
    }
</style>
