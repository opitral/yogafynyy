<script>
    import Header        from '$lib/blocks/Header.svelte';
	import BlockAbout    from '$lib/blocks/BlockAbout.svelte';
	import BlockTeacher  from '$lib/blocks/BlockTeacher.svelte';
    import BlockCounters from '$lib/blocks/BlockCounters.svelte';
    import BlockFysm     from '$lib/blocks/BlockFYSM.svelte';
    import BlockHelpIF   from '$lib/blocks/BlockHelpIF.svelte';
    import BlockPlatform from '$lib/blocks/BlockPlatform.svelte';
    import BlockForWho   from '$lib/blocks/BlockForWho.svelte';
    import BlockResults  from '$lib/blocks/BlockResults.svelte';
    import BlockReviews  from '$lib/blocks/BlockReviews.svelte';
    import BlockClients  from '$lib/blocks/BlockClients.svelte';
    import BlockInclude  from '$lib/blocks/BlockInclude.svelte';
    import BlockFaq      from '$lib/blocks/BlockFaq.svelte';
    import Footer        from '$lib/blocks/Footer.svelte';

	import FormModal     from '$lib/ui/FormModal.svelte';
    import Alert         from '$lib/ui/Alert.svelte';

    import { onMount    } from 'svelte';
    import { alertError } from '$lib/js/tst-variants.js';

    export let data

    onMount(async () => {
        AOS.init();
        if (data.error) {
            alertError.show(data.message)
        }
    })
</script>

<Header />

<BlockAbout    />
<BlockTeacher  />
<BlockCounters />
<BlockFysm     />
<BlockHelpIF   />
<BlockPlatform />
<BlockForWho   />
<!-- <BlockResults  /> -->
<BlockReviews  />
<!-- <BlockClients  /> -->
<BlockInclude  />
<BlockFaq      />

<Footer />

<FormModal {...data.data[0]}/>
<Alert     {...data.data[0]} />