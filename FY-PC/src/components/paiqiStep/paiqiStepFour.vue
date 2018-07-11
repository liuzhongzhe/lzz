<template>
	<div class="paiqiStepFour">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/paiqiStep/One' }">整车排气系统</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/paiqiStep/Two' }">体网格生成</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/paiqiStep/Three' }">模型材料设置</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/paiqiStep/Four' }">边界条件设置</el-breadcrumb-item>
			<el-breadcrumb-item>求解计算</el-breadcrumb-item>
			<el-breadcrumb-item>计算结果</el-breadcrumb-item>
		</el-breadcrumb>
		<el-card class="box-card">
			<div class="info">
				<span>Porous-Zone设置</span>
				<div class="sec">
					<div>
						<div style="display: inline-block;">
							<el-input style="width: 222px;" v-model="value1"></el-input>
							<div class="list">
								<ul>
									<li class="listOne" v-for="(item,index) in textAr1" @click="chooseValue1(item,index,'valueIndex1')" :class="{'active':item.checked =='true'}">
										<span>{{item.name}}</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div>
						<span>Viscous Resistance：</span>
						<el-input></el-input>1/m²
						<span>Inertial Resistance：</span>
						<el-input></el-input>1/m
					</div>
					<div>
						<span>方向面参考：</span>
						<el-input></el-input>
						<span>Direction：</span>
						<el-input></el-input>
					</div>
					<div>
						<el-button @click="apply('xxx',valueIndex1)">应用</el-button>
					</div>
				</div>
			</div>
			<div class="info">
				<span>Mass-Flow-Inlet设置</span>
				<div class="sec">
					<div>
						<div style="display: inline-block;">
							<el-input style="width: 222px;" v-model="value2"></el-input>
							<div class="list">
								<ul>
									<li class="listTwo" v-for="(item,index) in textAr2" @click="chooseValue1(item,index,'valueIndex2')" :class="{'active':item.checked =='true'}">
										<span>{{item.name}}</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div>
						<span>Total Temperature：</span>
						<el-input></el-input>C
						<span>Mass Flow Rate：</span>
						<el-input></el-input>kg/s
						<span>Hydraulic Diameter：</span>
						<el-input></el-input>m
					</div>
					<div>
						<span>Gauge Pressure：</span>
						<el-input></el-input>kPa
						<span>Turbulent Intensity：</span>
						<el-input></el-input>%
					</div>
					<div>
						<el-button @click="apply('ooo',valueIndex2)">应用</el-button>
					</div>
				</div>
			</div>
			<div class="info">
				<span>Pressure-Outlet设置</span>
				<div class="sec">
					<div>
						<div style="display: inline-block;">
							<el-input style="width: 222px;"></el-input>
							<div class="list">
								<ul>
									<li v-for="item in 10">
										<span>fluid_exh_pipe1</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div>
						<span>Backflow Temperature：</span>
						<el-input></el-input>C
						<span>Hydraulic Diameter：</span>
						<el-input></el-input>m
					</div>
					<div>
						<span>Gauge Pressure：</span>
						<el-input></el-input>kPa
						<span>Turbulent Intensity：</span>
						<el-input></el-input>%
					</div>
					<div>
						<el-button>应用</el-button>
					</div>
				</div>
			</div>
			<div class="info">
				<span>Coupled-Wall设置</span>
				<div class="sec">
					<div>
						<div style="display: inline-block;">
							<el-input style="width: 222px;"></el-input>
							<div class="list">
								<ul>
									<li v-for="item in 10">
										<span>fluid_exh_pipe1</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div>
						<span>Wall Thickness：</span>
						<el-input></el-input>m
						<span>Material：</span>
						<el-input></el-input>
					</div>
					<div>
						<el-checkbox v-model="checked">激活Shell </el-checkbox>
						<a style="display: inline-block;margin-right: 10px;margin-top: 30px;color: #000000;">Conduction</a>
					</div>
					<div>
						<el-button>应用</el-button>
					</div>
				</div>
			</div>
			<div class="info">
				<span>Pressure-Outlet设置</span>
				<div class="sec">
					<div>
						<div style="display: inline-block;">
							<el-input style="width: 222px;"></el-input>
							<div class="list">
								<ul>
									<li v-for="item in 10">
										<span>fluid_exh_pipe1</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div>
						<span>Wall Thickness：</span>
						<el-input></el-input>m
						<span>Material：</span>
						<el-input></el-input>m
					</div>
					<div>
						<span>Free Steam Temperature：</span>
						<el-input></el-input>C
						<div>
							<el-checkbox v-model="checked">激活Shell </el-checkbox>
							<a style="display: inline-block;margin-right: 10px;margin-top: 30px;color: #000000;">Conduction</a>
						</div>
					</div>
					<div>
						<el-button>应用</el-button>
					</div>
				</div>
			</div>
		</el-card>
		<div style="text-align: center;">
			<el-button type="" style="margin: 10px 0;" @click="toPre">上一步</el-button>
			<el-button type="primary" style="margin: 10px 0;" @click="toNext">下一步</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				labelState: false,
				checked: true,
				value1: '',
				value2: '',
				radio: '1',
				value: '',
				valueIndex1: -1,
				valueIndex2: -1,
				textAr1: [{
						name: 'luid_exh_pipe1',
						checked: 'false',
					},
					{
						name: 'luid_exh_pipe2',
						checked: 'false',
					}, {
						name: 'luid_exh_pipe3',
						checked: 'false',
					}, {
						name: 'luid_exh_pipe4',
						checked: 'false',
					}, {
						name: 'luid_exh_pipe5',
						checked: 'false',
					}, {
						name: 'luid_exh_pipe6',
						checked: 'false',
					}, {
						name: 'luid_exh_pipe6',
						checked: 'false',
					}, {
						name: 'luid_exh_pipe6',
						checked: 'false',
					}, {
						name: 'luid_exh_pipe6',
						checked: 'false',
					}, {
						name: 'luid_exh_pipe6',
						checked: 'false',
					}

				],
				textAr2: [{
						name: 'luid_exh_pipe1',
						checked: 'false',
					},
					{
						name: 'luid_exh_pipe2',
						checked: 'false',
					}, {
						name: 'luid_exh_pipe3',
						checked: 'false',
					}, {
						name: 'luid_exh_pipe4',
						checked: 'false',
					}, {
						name: 'luid_exh_pipe5',
						checked: 'false',
					}, {
						name: 'luid_exh_pipe6',
						checked: 'false',
					}, {
						name: 'luid_exh_pipe6',
						checked: 'false',
					}, {
						name: 'luid_exh_pipe6',
						checked: 'false',
					}, {
						name: 'luid_exh_pipe6',
						checked: 'false',
					}, {
						name: 'luid_exh_pipe6',
						checked: 'false',
					}

				],
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				shiftStart: 0,
				shiftEnd: 0
			}
		},
		mounted() {
			let shiftNum = 0
			let ths = this
			$('.listOne').click(function(event) {
				ths.textAr1.forEach((item, index) => {
					if(item.checked === 'true') {
						shiftNum = index;
					}
				})
				let index = $(this).index()
				if(event.ctrlKey) {
					ths.$set(ths.textAr1[index], 'checked', 'true')
				} else {
					ths.textAr1.forEach((item) => {
						item.checked = 'false'
					})
					ths.$set(ths.textAr1[index], 'checked', 'true')
				}
				if(event.shiftKey) {
					if(index >= shiftNum) {
						ths.shiftEnd = index
						ths.shiftStart = shiftNum
					} else {
						ths.shiftEnd = shiftNum
						ths.shiftStart = index
					}
					for(let i = ths.shiftStart; i <= ths.shiftEnd; i++) {
						ths.$set(ths.textAr1[i], 'checked', 'true')
					}
				}

			});

			$('.listTwo').click(function(event) {
				ths.textAr2.forEach((item, index) => {
					if(item.checked === 'true') {
						shiftNum = index;
					}
				})
				let index = $(this).index()
				if(event.ctrlKey) {
					ths.$set(ths.textAr2[index], 'checked', 'true')
				} else {
					ths.textAr2.forEach((item) => {
						item.checked = 'false'
					})
					ths.$set(ths.textAr2[index], 'checked', 'true')
				}
				if(event.shiftKey) {
					if(index >= shiftNum) {
						ths.shiftEnd = index
						ths.shiftStart = shiftNum
					} else {
						ths.shiftEnd = shiftNum
						ths.shiftStart = index
					}
					for(let i = ths.shiftStart; i <= ths.shiftEnd; i++) {
						ths.$set(ths.textAr2[i], 'checked', 'true')
					}
				}

			});
		},
		methods: {
			hhh() {
				alert()
			},
			chooseValue1(item, index, valueIndex) {
				if(valueIndex.indexOf('1') > 0) {
					this.value1 = item.name;
					//                     if (this.textAr1[index].checked == 'false') {
					//                         this.$set(this.textAr1[index], 'checked', 'true')
					//                     } else {
					//                         this.$set(this.textAr1[index], 'checked', 'false')
					//                     }
				} else if(valueIndex.indexOf('2') > 0) {
					this.valueIndex2 = index
					this.value2 = item.name;
				}

			},
			apply(re, index) {
				if(re == 'xxx') {
					this.$refs.xxx[index].style.color = '#E79006'
				} else {
					this.$refs.ooo[index].style.color = '#E79006'
				}
			},
			toPre() {
				this.$router.push('/paiqiStep/Three')
			},
			toNext() {
				this.$router.push('/paiqiStep/Five')
			},
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.paiqiStepFour {
		font-size: 14px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		/deep/ .el-input__inner {
			height: 34px;
		}
		.el-breadcrumb {
			margin-bottom: 15px;
			margin-left: 5px;
		}
		/deep/ .el-breadcrumb__inner.is-link {
			color: rgb(167, 35, 46) !important;
		}
		/deep/ .el-breadcrumb__item {
			display: inline-block;
			background: rgb(245, 247, 250);
			padding: 10px 20px;
		}
		/deep/ .el-breadcrumb__separator {
			margin: 0 0;
			margin-left: 30px;
		}
		.info {
			>span {
				display: block;
				height: 40px;
				line-height: 40px;
				border-bottom: 1px solid #EEEEEE;
				color: rgb(167, 35, 46);
			}
			.el-input {
				width: 200px;
			}
			>.sec {
				margin: 20px 0;
				display: flex;
				.list {
					margin-top: 5px;
					width: 220px;
					height: 200px;
					border-radius: 4px;
					overflow-y: scroll;
					border: 1px solid rgb(220, 223, 230);
					li {
						cursor: pointer;
						height: 30px;
						line-height: 30px;
						text-indent: 10px;
						&:hover {
							color: #FFFFFF;
							background: #C48E39
						}
						&.active {
							color: #FFFFFF;
							background: #8C6321;
						}
					}
				}
				>div {
					flex: 1;
					span {
						display: inline-block;
						margin-bottom: 5px;
						width: 160px;
						text-align: right;
					}
					.el-input {
						margin-bottom: 5px;
						margin-right: 3px;
					}
				}
			}
		}
		@media screen and (max-width:1900px) {
			.sec {
				margin: 20px 0;
				display: flex;
				>div {
					flex: 1;
					span {
						display: block;
						margin-bottom: 5px;
						width: 180px !important;
						text-align: left !important;
					}
					.el-input {
						margin-bottom: 5px;
						margin-right: 3px;
					}
				}
			}
		}
	}
</style>