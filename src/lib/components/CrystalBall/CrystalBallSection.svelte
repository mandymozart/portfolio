<script lang="ts">
	let nextScreen: () => void;
	const handleClick = () => {
		nextScreen();
	};
</script>

<section>
	<div class="top">
		<div></div>
		<div class="crystal-ball">
			<img src={'static/textures/crystal-ball.png'} alt="Know your future" />
		</div>
		<div></div>
	</div>
	<div class="bottom">
		<div><img src={'static/tarot-1.png'} alt="Know your future" /></div>
		<div><img src={'static/tarot-2.png'} alt="Know your future" /></div>
		<div><img src={'static/tarot-3.png'} alt="Know your future" /></div>
		<div><img src={'static/tarot-4.png'} alt="Know your future" /></div>
		<div><img src={'static/tarot-5.png'} alt="Know your future" /></div>
		<div><img src={'static/tarot-6.png'} alt="Know your future" /></div>
	</div>
</section>

<style lang="scss">
	section {
		width: 100%;
		height: 100vh;
		.top {
			display: grid;
			width: 100%;
			grid-template-columns: 1fr 4fr 1fr;
			.crystal-ball {
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		.bottom {
			width: 100%;
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			div {
				padding: 2rem;
			}
		}
	}
</style>
