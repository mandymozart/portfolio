<script lang="ts">
	import CommonPage from '$lib/components/CommonPage.svelte';
	import ExperienceCard from '$lib/components/ExperienceCard/ExperienceCard.svelte';
	import { EXPERIENCES } from '$lib/params';

	const { items, title } = EXPERIENCES;

</script>

<CommonPage {title}>
 <div class="font-mono">

	 {#each items as job }
	 <ExperienceCard experience={job} />
	 {/each}
	</div>
</CommonPage>
