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
						<el-form-item label="VPPS L1">
							<el-select v-model="form.region" style="margin-bottom: 5px;">
								<el-option label="10" value="10"></el-option>
								<el-option label="20" value="20"></el-option>
								<el-option label="30" value="30"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="VPPS L2">
							<el-select v-model="form.valueOne" style="margin-bottom: 5px;">
								<el-option label="1" value="1"></el-option>
								<el-option label="2" value="2"></el-option>
								<el-option label="3" value="3"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="零件名称">
							<el-select v-model="form.valueTwo" style="margin-bottom: 5px;">
								<el-option label="Engine Beauty Cover" value="Engine Beauty Cover"></el-option>
								<el-option label="Engine Beauty Cover Foam" value="Engine Beauty Cover Foam"></el-option>
								<el-option label="Secondary Air Injection Pump" value="Secondary Air Injection Pump"></el-option>
								<el-option label="Secondary Air Injection Pump Filter" value="Secondary Air Injection Pump Filter"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="零件材料">
							<el-select v-model="form.valueThree">
								<el-option label="Plastic" value="Plastic"></el-option>
								<el-option label="Rubber" value="Rubber"></el-option>
								<el-option label="Hose with coolant" value="Hose with coolant"></el-option>
								<el-option label="Hose with refrigerant" value="Hose with refrigerant"></el-option>
								<el-option label="Floor pan" value="Floor pan"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="温度限值">
							<el-input value="50">
								<span slot="append">℃</span>
							</el-input>
						</el-form-item>
						<el-form-item label="热源温度">
							<el-input value="100">
								<span slot="append">℃</span>
							</el-input>
						</el-form-item>
						<el-form-item label="环境温度">
							<el-input value="32">
								<span slot="append">℃</span>
							</el-input>
						</el-form-item>
						<el-form-item label="热源距离">
							<el-input value="100">
								<span slot="append">mm</span>
							</el-input>
						</el-form-item>
						<el-form-item label="对流系数">
							<el-input value="3.5">
								<span slot="append">w/m2*k</span>
							</el-input>
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
					valueOne:'',
					valueTwo:'',
					valueThree:'',
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
		/deep/ .el-input-group__append, .el-input-group__prepend{
			padding: 0 10px;
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