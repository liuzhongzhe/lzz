<template>
	<div class="paiqiStep">
		<div class="tab" id="tab">
			<tab :navIndex="navInd"></tab>
		</div>
		<div class="step">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import tab from '@/base/tab'
	export default {
		components: {
			tab
		},
		data() {
			return {
				navInd: '1',
				aa: '/'
			}
		},
		methods: {
			xx() {
				alert()
			}
		},
		mounted() {
			document.getElementById("tab").style.minHeight = window.innerHeight + 'px'
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.paiqiStep {
		display: flex;
		>.tab {
			flex: 0 230px;
			background:rgb(44, 47, 62);
		}
		>.step {
			background: rgb(249,249,249);
			flex: 1;
			padding: 20px;
		}
	}
</style>