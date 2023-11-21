<script lang="ts">
	import { base } from '$app/paths';
	import Chip from '../Chip/Chip.svelte';

	export let project: any;
</script>

<a class="font-mono" href={`${base}/projects/${project.uid}`}>
		{project.data.name}
	<span>{project.data.type}</span>
</a>

<style lang="scss">
    a {
        display: block;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        line-height: 3rem;
        text-decoration: none;
        font-size: 1em;
        border-bottom: 2px solid black;
        @media (max-width: 1350px) {

		}
		@media (max-width: 850px) {
            .tags {
                display: none;
            }
		}
    }
</style>