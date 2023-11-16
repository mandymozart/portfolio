<script lang="ts">
	import { base } from '$app/paths';
	import Chip from '../Chip/Chip.svelte';

	export let project: any;
</script>

<a class="font-mono" href={`${base}/projects/${project.uid}`}>
		{project.data.name}
	<span>{project.data.type}</span>
	<span class="tags">
		{#each project.tags as tag}
            <Chip>{tag}</Chip>
        {/each}
    </span>
</a>

<style lang="scss">
    a {
        display: block;
        cursor: pointer;
        line-height: 4rem;
        font-size: 1em;
        @media (max-width: 1350px) {

		}
		@media (max-width: 850px) {
            .tags {
                display: none;
            }
		}
    }
</style>