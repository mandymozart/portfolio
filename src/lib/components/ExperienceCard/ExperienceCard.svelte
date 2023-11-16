<script lang="ts">
	import type { Experience } from '$lib/types';
	import { getMonthName, getTimeDiff } from '$lib/utils/helpers';

	export let experience: Experience;

	const months = getTimeDiff(experience.period.from, experience.period.to);

	const from = `${getMonthName(
		experience.period.from.getMonth()
	)} ${experience.period.from.getFullYear()}`;
	const to = experience.period.to
		? `${getMonthName(experience.period.to.getMonth())} ${experience.period.to.getFullYear()}`
		: 'Present';

	const period = `${from} - ${to} · ${months}`;
</script>

<div>
<span class="period">{period}</span><br />
<span>{experience.name}</span>
	<p class="description">{experience.description}</p>
</div>
<style lang="scss">
	div{
		margin-bottom: 1rem;
	}
</style>

