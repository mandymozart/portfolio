<script lang="ts">
	import type { ClientDocument, CollaboratorDocument } from '../../../prismicio-types';

	export let partner: CollaboratorDocument | ClientDocument;
	console.log(partner.data);
</script>

<div>
	<!-- {#if partner.data.name}
		{partner.data.name}
	{/if} -->
	<a href={partner.data.link?.url ? partner.data.link.url : '#'} target="_blank">
		{#if partner.data.logo.url}
			<img src={partner.data.logo.url} alt={partner.data.logo.alt} class="w-full" />
		{:else}
			{partner.data.name}
		{/if}
	</a>
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
