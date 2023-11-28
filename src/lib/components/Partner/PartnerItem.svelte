<script lang="ts">
	import type { ClientDocument, CollaboratorDocument } from '../../../prismicio-types';

	export let partner: CollaboratorDocument | ClientDocument;
	console.log(partner);
</script>

<div>
	<!-- {#if partner.data.name}
		{partner.data.name}
	{/if} -->
	{#if partner.data.logo}
		<img src={partner.data.logo.url} alt={partner.data.logo.alt} class="w-full" />
	{/if}
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
	}
	img {
		margin-bottom: 1rem;
	}
</style>
