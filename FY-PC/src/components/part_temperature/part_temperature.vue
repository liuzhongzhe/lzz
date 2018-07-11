<template>
	<div class="part_temperature">
		<div class="tab" id="tab">
			<tab :navIndex="navInd"></tab>
		</div>
		<div class="right">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span style="font-size: 14px;">零件温度预测系统</span>
				</div>
				<div style="display: flex;">
					<el-form ref="form" :model="form" label-width="80px">
						<el-form-item label="VPPS1">
							<el-select v-model="form.region" style="margin-bottom: 5px;">
								<el-option label="level1" value="shanghai"></el-option>
								<el-option label="level2" value="beijing"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="VPPS2">
							<el-select v-model="form.region" style="margin-bottom: 5px;">
								<el-option label="level1" value="shanghai"></el-option>
								<el-option label="level2" value="beijing"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="零件名称">
							<el-select v-model="form.region" style="margin-bottom: 5px;">
								<el-option label="part1" value="shanghai"></el-option>
								<el-option label="part2" value="beijing"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="零件材料">
							<el-select v-model="form.region">
								<el-option label="lj1" value="shanghai"></el-option>
								<el-option label="lj2" value="beijing"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="温度限值">
							<el-input></el-input>
							℃
						</el-form-item>
						<el-form-item label="热源温度">
							<el-input></el-input>
							℃
						</el-form-item>
						<el-form-item label="热源距离">
							<el-input></el-input>
							mm
						</el-form-item>
						<el-form-item label="环境温度">
							<el-input></el-input>
							℃
						</el-form-item>
						<el-form-item label="对流系数">
							<el-input></el-input>
							w/m2*k
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="onSubmit">计算</el-button>
							<el-button @click="clearData">清除</el-button>
						</el-form-item>
					</el-form>
					<div id="myChartWrapper">
						<div style="width: 600px; margin: 0 auto;">
							<div style="text-align: center;">
								<span style="vertical-align:top">布置状态 ：<i ref="colorOne" style="width: 50px; height: 20px;background: #82848A;display: inline-block;"></i> </span>
								<span style="vertical-align: top;margin-left: 20px;">零件温度 ：<i ref="colorTwo" style="vertical-align: top; width: 50px; height: 20px;background: #82848A;display: inline-block;color: #FFFFFF;">{{numOne}}</i> ℃</span>
							</div>
						</div>
						<div id="myChart"></div>
					</div>
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
				numOne:null,
				drawList: [],
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		mounted() {
			document.getElementById("tab").style.minHeight = window.innerHeight + 'px'
			this.drawLine()
		},
		methods: {
			clearData() {
				this.drawList = []
				this.$refs.colorOne.style.background ='#82848A'
				this.$refs.colorTwo.style.background ='#82848A'
				this.numOne =null
				this.drawLine();
			},
			onSubmit() {
				this.drawList = [120, 111, 108, 93, 68, 61, 57, 32, 32, 31, 30]
				this.$refs.colorOne.style.background ='orange'
				this.$refs.colorTwo.style.background ='red'
				this.numOne = '25'
				this.drawLine();
			},
			drawLine() {
				let myChart = this.$echarts.init(document.getElementById('myChart'))
				myChart.setOption({
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['最高气温', '最低气温']
					},
					toolbox: {
						show: false,
						feature: {
							dataZoom: {
								yAxisIndex: 'none'
							},
							dataView: {
								readOnly: false
							},
							restore: {},
							saveAsImage: {}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						name:'mm',
						data: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '110']
					},
					yAxis: {
						type: 'value',
						name:'°C',
						axisLabel: {
							formatter: '{value} '
						}
					},
					
					series: [{
						type: 'line',
						data: this.drawList,
						itemStyle: {
							normal: {
								color: "rgb(64, 158, 255)",
								lineStyle: {
									color: "rgb(194,53,49)"
								}
							}
						},
						markLine: {
							data: [{
								type: 'average',
								name: '平均值'
							}]
						}
					}]
				})
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.part_temperature {
		min-width: 1000px;
		display: flex;
		font-size: 14px;
		.tab {
			flex: 0 200px;
			background: rgb(44, 47, 62);
		}
		/deep/ .el-button {
			padding: 10px 30px;
		}
		/deep/ .el-card__body {
			width: 100%;
		}
		/deep/ .el-card__header {
			background: #eff0dc;
			padding: 14px 20px;
			display: block;
		}
		/deep/ .el-form-item {
			margin-bottom: 10px;
		}
		.right {
			flex: 1;
			padding: 20px;
			width: 100%;
			.box-card {
				.el-input {
					width: 220px;
					display: inline-block;
				}
				.el-select {
					display: block;
					width: 220px;
				}
				form {
					flex: 0 440px;
					vertical-align: top;
					border-right: 1px solid #eeeeee;
				}
				#myChartWrapper {
					flex: 1;
					transition: .5;
					#myChart {
						width: 600px;
						height: 400px;
						margin: 0 auto;
					}
				}
			}
		}
	}
</style>