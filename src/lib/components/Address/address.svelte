<script lang="ts">
	import { PrismicRichText } from '@prismicio/svelte';
	import type { ContactSliceDefaultItem } from '../../../prismicio-types';

	export let address: ContactSliceDefaultItem;
</script>

<div>
	<PrismicRichText field={address.address} />
</div>

<style lang="scss">
	div {
		padding: 0 2rem;
	}
</style>
