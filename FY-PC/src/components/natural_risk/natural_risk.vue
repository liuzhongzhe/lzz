<template>
	<div class="carpet_temperature">
		<div class="tab" id="tab">
			<tab :navIndex="navInd"></tab>
		</div>
		<div class="right">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span style="font-size: 14px;">自然风险评估系统</span>
				</div>
			</el-card>
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
				navInd: '2',
			}
		},
		mounted() {
			document.getElementById("tab").style.minHeight = window.innerHeight + 'px'
		},
		methods: {}
	}
</script>

<style lang="scss" scoped="scoped">
	.carpet_temperature {
		min-width: 1000px;
		display: flex;
		font-size: 14px;
		.tab {
			flex: 0 200px;
			background: rgb(44, 47, 62);
		}
		/deep/ .el-card__body {
			width: 100%;
		}
		/deep/ .el-card__header {
			background: #eff0dc;
			padding: 14px 20px;
			display: block;
		}
		.right {
			flex: 1;
			padding: 20px;
			width: 100%;
			.box-card {
				.el-input {
					width: 220px;
				}
				.el-select {
					display: block;
					width: 220px;
				}
			}
		}
	}
</style>