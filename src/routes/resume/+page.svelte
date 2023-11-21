<script>
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import { RESUME } from '$lib/params';

	const { link, title } = RESUME;
</script>

<CommonPage {title}>
	<div class="resume font-mono">
		{#if link}
			<a href={link} target="_blank">
				<Chip size={'1.25em'}>Download</Chip>
			</a>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
		<div class="c4 doc-content">
			<p class="c1"><span class="c0">Résumé</span></p>
			<p class="c1 c2"><span class="c0"></span></p>
			<p class="c1 c2"><span class="c0"></span></p>
			<p class="c1"><span class="c6">Tilman Porschütz/Mandy Mozart</span></p>
			<p class="c1"><span class="c0">Frontend Developer/Artist</span></p>
			<p class="c1"><span class="c0">Born in 1984 in Zwickau, Germany</span></p>
			<p class="c1"><span class="c0">Currently living and working in Vienna, Austria</span></p>
			<p class="c1">
				<span class="c7"
					><a
						class="c5"
						href="https://www.google.com/url?q=http://www.mandymozart.com&amp;sa=D&amp;source=editors&amp;ust=1700610734079586&amp;usg=AOvVaw0aBDr4N-GPANKni4O3Cj-f"
						>www.mandymozart.com</a
					></span
				><span class="c0">&nbsp;</span>
			</p>
			<p class="c1 c2"><span class="c0"></span></p>
			<p class="c1"><span class="c3">Education:</span></p>
			<p class="c1">
				<span class="c0"
					>2022 - 2023: Theater, Film, and Media Science at the University of Vienna</span
				>
			</p>
			<p class="c1">
				<span class="c0"
					>2004 - 2011: Diploma in Visual Communication at the Bauhaus-University Weimar</span
				>
			</p>
			<p class="c1">
				<span class="c0">2007 - 2008: Exchange student at Hongik University Seoul</span>
			</p>
			<p class="c1 c2"><span class="c0"></span></p>
			<p class="c1">
				<span class="c0"
					>I am a highly motivated and versatile Developer and UI/UX designer with more than 15+
					years experience in the field of visualization, interaction design, user interfaces, and
					immersive experiences. I have worked as a consultant, developer, designer, and artist. My
					focus lies in bridging human needs and digital realities through responsible design, user
					experience, and art. As a developer I worked on single page applications and websites in
					React, Angular, Svelte, Django, SAP Hybris, Bloomreach, Symphony and JamStack services
					such as contentful, sanity, prismic. As a CTO &nbsp;and project manager, I have led
					interdisciplinary teams of up to 15 people, working with boutique agencies, startups, and
					corporations.</span
				>
			</p>
			<p class="c1 c2"><span class="c0"></span></p>
			<p class="c1">
				<span class="c0"
					>I publicly discuss my experiences in tech through regular attendance at conferences and
					&nbsp;in my research work as an artist, musician, and enthusiast media scientist, which
					allows me to maintain a nuanced perspective on a world in constant flux. Production,
					consumption, humanity, research, society, and aesthetics are a unified entity for me, and
					I am grateful for the opportunity to be involved in many exciting projects in these
					fields.</span
				>
			</p>
			<p class="c1 c2"><span class="c0"></span></p>
			<p class="c1"><span class="c3">Jobs/Clients (Selection):</span></p>
			<p class="c1 c2"><span class="c0"></span></p>
			<p class="c1"><span class="c0">res.radio - Vienna Community Radio, Vienna</span></p>
			<p class="c1"><span class="c0">Development &amp; UX, 2023</span></p>
			<p class="c1 c2"><span class="c0"></span></p>
			<p class="c1">
				<span class="c0"
					>foryouandyourcustomers GmbH, Vienna (Lagerhaus, RWA, Hema, Constantia Flexible)</span
				>
			</p>
			<p class="c1">
				<span class="c0">UI/UX Architect &amp; Senior Frontend Developer, 2017 - 2023</span>
			</p>
			<p class="c1 c2"><span class="c0"></span></p>
			<p class="c1"><span class="c0">Collisions Festival SVS Records Gbr, Munich</span></p>
			<p class="c1"><span class="c0">UX &amp; Frontend Development, 2021/2022</span></p>
			<p class="c1 c2"><span class="c0"></span></p>
			<p class="c1"><span class="c0">Jan Van Eyck Academy, Maastricht</span></p>
			<p class="c1"><span class="c0">Video Conference Platform, UX Development 2021</span></p>
			<p class="c1 c2"><span class="c0"></span></p>
			<p class="c1"><span class="c0">Vienna Struggle Media GmbH, Vienna</span></p>
			<p class="c1"><span class="c0">Virtual Production &amp; Streaming, CTO, 2020 - 2021</span></p>
			<p class="c1 c2"><span class="c0"></span></p>
			<p class="c1"><span class="c0">LiaH GmbH, Zürich</span></p>
			<p class="c1">
				<span class="c0">Requirements Engineer, UX Consulting, Project Management, 2020</span>
			</p>
			<p class="c1 c2"><span class="c0"></span></p>
			<p class="c1"><span class="c0">Siegelwerk Manufaktur GmbH, Stuttgart</span></p>
			<p class="c1"><span class="c0">Shopify + Frontend Engineer, 2020</span></p>
			<p class="c1 c2"><span class="c0"></span></p>
			<p class="c1"><span class="c0">Envaris GmbH, Berlin</span></p>
			<p class="c1"><span class="c0">Web Development, 2014</span></p>
			<p class="c1 c2"><span class="c0"></span></p>
			<p class="c1"><span class="c0">WEAREPICTURES GmbH, Berlin</span></p>
			<p class="c1"><span class="c0">Trade Show Visualisations, CTO, 2013 - 2015</span></p>
			<p class="c1 c2"><span class="c0"></span></p>
			<p class="c1"><span class="c0">Lingoda GmbH, Berlin</span></p>
			<p class="c1"><span class="c0">Head of Interfaces, 2013</span></p>
			<p class="c1 c2"><span class="c0"></span></p>
			<p class="c1"><span class="c0">Shalom Salon, Weimar/Berlin</span></p>
			<p class="c1"><span class="c0">CTO &amp; Art Direction, 2007-2013</span></p>
			<p class="c1 c2"><span class="c0"></span></p>
			<p class="c1"><span class="c3">Skills:</span></p>
			<p class="c1 c2"><span class="c0"></span></p>
			<p class="c1"><span class="c0">React/Next/Jest: 7+ years</span></p>
			<p class="c1"><span class="c0">Svelte/SvelteKit: 2+ years</span></p>
			<p class="c1"><span class="c0">Angular: 9+ years</span></p>
			<p class="c1"><span class="c0">Vue/Nuxt: 3+ years</span></p>
			<p class="c1"><span class="c0">BackboneJs: 7+ years</span></p>
			<p class="c1"><span class="c0">PixiJS: 4+</span></p>
			<p class="c1"><span class="c0">ThreeJs: 6+</span></p>
			<p class="c1"><span class="c0">SAP Hybris: 7+ years</span></p>
			<p class="c1"><span class="c0">Bloomreach Experience: 7+ years</span></p>
			<p class="c1"><span class="c0">Shopify: 6+ years</span></p>
			<p class="c1"><span class="c0">Unreal Engine: 3+ </span></p>
			<p class="c1"><span class="c0">Unity3D: 4+</span></p>
			<p class="c1"><span class="c0">Woocommerce: 11+ years</span></p>
			<p class="c1"><span class="c0">HTML/CSS/JS: 17+ years</span></p>
			<p class="c1"><span class="c0">Java/Python/Dart/C#/PHP/TypeScript: 7+ years</span></p>
			<p class="c1"><span class="c0">Google Maps</span></p>
			<p class="c1"><span class="c0">JAM Stack Prismic/Sanity/Netlify/Ably</span></p>
			<p class="c1"><span class="c0">UI/UX Design (Figma, Sketch, XD, PenPot, Canvas)</span></p>
			<p class="c1 c2"><span class="c0"></span></p>
			<p class="c1">
				<span class="c0">Team Lead of 15+ designers, frontend developers, 3d artists</span>
			</p>
			<p class="c1 c2"><span class="c0"></span></p>
			<p class="c1">
				<span class="c3">Please feel free to contact me with your project idea!</span>
			</p>
			<p class="c1">
				<span class="c6 c8"
					><a class="c5" href="mailto:mandymozart@viennastruggle.com"
						>mandymozart@viennastruggle.com</a
					></span
				>
			</p>
		</div>
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		p {
			margin-bottom: 1rem;
		}
	}
</style>
