<template>
	<div class="default">
		<div class="tab" id="tab">
			<tab :navIndex="navInd"></tab>
		</div>
		<div class="right">
			<div class="form">
				<el-card class="box-card">
					<div slot="header" class="clearfix" style="text-align: left;">
						<el-cascader :options="options" v-model="selectedOptions" @change="typeChange">
						</el-cascader>
						<el-button style="float: right;position: relative;top: 5px;height: 32px;line-height: 1px; " type="primary" @click="addListItem">添加</el-button>
					</div>
					<div class="formList">
						<div class="listTitle">
							<span v-for="(item,index) in formListTitle">{{index | materialToCH}}</span>
							<span>操作</span>
						</div>
						<div class="list" v-for="item in formList">
							<span v-for="(list,index) in item">
								{{list}}
							</span>
							<span>
								<el-button  @click="modifyListItem(item)">编辑</el-button>
								<el-button type="danger" @click="deleteListItem(item)">删除</el-button>
							</span>
						</div>
					</div>
				</el-card>
				<div class="block" style="margin-top: 20px;">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pageSize" layout="prev, pager, next, jumper" :total="pageCount">
					</el-pagination>
				</div>
			</div>
		</div>
		<el-dialog title="添加" :visible.sync="dialogFormVisible" class="modifyDialog">
			<div>
				<div class="sec" v-for="(item,index) in addListItemSlot">
					<span>{{index}}</span>
					<el-input style="display: inline-block; width: 300px;" v-model="addListItemSlot[index]"></el-input>
				</div>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="success" @click="addListItemSubmit">确定</el-button>
			</div>
		</el-dialog>
		<el-dialog title="修改" :visible.sync="dialogModify" class="modifyDialog">
			<div>
				<div class="sec" v-for="(item,index) in currentModify" v-show="index !='id'">
					<span>{{index}}</span>
					<el-input style="display: inline-block; width: 300px;" :value="item" v-model="currentModify[index]"></el-input>
				</div>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogModify = false">取 消</el-button>
				<el-button type="success" @click="modifySubmit()">确定</el-button>
			</div>
		</el-dialog>
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
				navInd: '4-3',
				options: [{
					value: '底盘排气系统',
					label: '底盘排气系统',
					children: [{
						value: 'CellZone',
						label: 'CellZone',
					}, {
						value: 'Prous',
						label: 'Prous',
					}, {
						value: 'MassFlowInlet',
						label: 'MassFlowInlet',
					}, {
						value: 'PressureOutlet',
						label: 'PressureOutlet',
					}, {
						value: 'CoupledWall',
						label: 'CoupledWall',
					}, {
						value: 'ConvectionWall',
						label: 'ConvectionWall',
					}, {
						value: 'Interior',
						label: 'Interior',
					}]
				}, {
					value: '底盘进气系统',
					label: '底盘进气系统',
					children: [{
						value: 'CellZone_jq',
						label: 'CellZone',
					}, {
						value: 'Prous_jq',
						label: 'Prous',
					}, {
						value: 'PressureInlet',
						label: 'PressureInlet',
					}, {
						value: 'VelocityInlet',
						label: 'VelocityInlet',
					}, {
						value: 'Interior_jq',
						label: 'Interior',
					}]
				}],
				selectedOptions: ["底盘排气系统", "CellZone"],
				defaultProps: {
					children: 'children',
					label: 'label'
				},
				paiqiType: '',
				formList: [],
				currentModify: [],
				formListTitle: {},
				addListItemSlot: {},
				currentPage: 1,
				pageCount: 0,
				pageSize: 15,
				dialogFormVisible: false,
				dialogModify: false
			}
		},
		filters: {
			materialToCH: function(value) {
				switch(value) {
					case 'id':
						return 'ID'
						break;
					case 'material':
						return '材料'
						break;
					case 'zoneName':
						return '名称'
						break;
					case 'zoneType':
						return '类型'
						break;
					case 'viscRes':
						return 'Viscous Resistance'
						break;
					case 'inertialRes':
						return 'Inertial Resistance'
						break;
					case 'normalRefSurface':
						return '方向参考面'
						break;
					case 'backFlowHydraulicDiameter':
						return 'Hydraulic Diameter'
						break;
					case 'gaugePressure':
						return 'Gauge Pressure'
						break;
					case 'backFlowTurbulentIntensity':
						return 'Turbulent Intensity'
						break;
					case 'backFlowTemperature':
						return 'Backflow Temperature'
						break;
					case 'shellConduction':
						return '激活Shell Conduction'
						break;
					case 'thickness':
						return 'Wall Thickness'
						break;
					case 'heatTransCoef':
						return 'Heart Transfer Coefficient'
						break;
					case 'freeSteamTemp':
						return 'Free Steam Temperature'
						break;
					case 'massFlowRate':
						return 'Mass Flow Rate'
						break;
					case 'hydraulicDiameter':
						return 'Hydraulic Diameter'
						break;
					case 'turbulentIntensity':
						return 'Turbulent Intensity'
						break;
					default:
						{
							return value
						}

				}
			}
		},
		mounted() {
			this.paiqiType = 'CellZone'
			this.typeChange(this.paiqiType)
			document.getElementById("tab").style.minHeight = window.innerHeight + 'px'
		},
		methods: {
			deleteListItem(item) {
				this.$confirm('是否删除此信息?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'info'
				}).then(() => {
					this.axios({
						method: 'delete',
						url: `./api/${localStorage.paiqiType}/${item.id}`,
						headers: {
							'Content-type': 'application/json;charset=UTF-8'
						}
					}).then((res) => {
						this.getPaiqiData()
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			addListItemSubmit() {
				this.axios({
					method: 'post',
					url: `./api/${localStorage.paiqiType}`,
					headers: {
						'Content-type': 'application/json;charset=UTF-8'
					},
					data: this.addListItemSlot
				}).then((res) => {
					this.getPaiqiData()
					this.dialogFormVisible = false
				}).catch((error) => {
					this.getPaiqiData()
					this.$notify.error({
						title: '错误',
						message: error.response.data.message
					});
				});

			},
			addListItem() {
				this.dialogFormVisible = true
			},
			modifySubmit() {
				let anaModify = this.currentModify
				this.dialogModify = false
				this.axios({
					method: 'put',
					url: `./api/${localStorage.paiqiType}/${anaModify.id}`,
					headers: {
						'Content-type': 'application/json;charset=UTF-8'
					},
					data: anaModify
				}).then((res) => {
					this.getPaiqiData()
					this.dialogModify = false
				}).catch((error) => {
					this.getPaiqiData()
					this.$notify.error({
						title: '错误',
						message: error.response.data.message
					});
				});
			},
			modifyListItem(item) {
				this.dialogModify = true
				this.currentModify = Object.assign({}, item);
			},
			handleSizeChange(val) {},
			handleCurrentChange(val) {
				this.currentPage = val
				this.getPaiqiData()
			},
			typeChange(values) {
				console.log(values)
				let value = ''
				if(typeof(values) == 'string') {
					value = values
					console.log(value, 1)
				} else {
					value = values[1]
				}
				this.currentPage = 1
				switch(value) {
					case 'CellZone':
						this.paiqiType = value
						localStorage.paiqiType = "cell_zone"
						this.getPaiqiData()
						break;
					case 'cell_zone':
						this.paiqiType = value
						localStorage.paiqiType = "cell_zone"
						this.getPaiqiData()
						break;
					case 'Prous':
						this.paiqiType = value
						localStorage.paiqiType = "porous"
						this.getPaiqiData()
						break;
					case 'porous':
						this.paiqiType = value
						localStorage.paiqiType = "porous"
						this.getPaiqiData()
						break;
					case 'MassFlowInlet':
						this.paiqiType = value
						localStorage.paiqiType = "mass_flow_inlet"
						this.getPaiqiData()
						break;
					case 'mass_flow_inlet':
						this.paiqiType = value
						localStorage.paiqiType = "mass_flow_inlet"
						this.getPaiqiData()
						break;
					case 'PressureOutlet':
						this.paiqiType = value
						localStorage.paiqiType = "pressure_outlet"
						this.getPaiqiData()
						break;
					case 'pressure_outlet':
						this.paiqiType = value
						localStorage.paiqiType = "pressure_outlet"
						this.getPaiqiData()
						break;
					case 'CoupledWall':
						this.paiqiType = value
						localStorage.paiqiType = "coupled_wall"
						this.getPaiqiData()
						break;
					case 'coupled_wall':
						this.paiqiType = value
						localStorage.paiqiType = "coupled_wall"
						this.getPaiqiData()
						break;
					case 'ConvectionWall':
						this.paiqiType = value
						localStorage.paiqiType = "convection_wall"
						this.getPaiqiData()
						break;
					case 'convection_wall':
						this.paiqiType = value
						localStorage.paiqiType = "convection_wall"
						this.getPaiqiData()
						break;
					case 'Interior':
						this.paiqiType = value
						localStorage.paiqiType = "interior"
						this.getPaiqiData()
						break;
					case 'interior':
						this.paiqiType = value
						localStorage.paiqiType = "interior"
						this.getPaiqiData()
						break;
					case 'intake/pressure_inlet':
						this.paiqiType = value
						localStorage.paiqiType = "intake/pressure_inlet"
						this.getPaiqiData()
						break;
					case 'PressureInlet':
						this.paiqiType = value
						localStorage.paiqiType = "intake/pressure_inlet"
						this.getPaiqiData()
						break;
					case 'VelocityInlet':
						this.paiqiType = value
						localStorage.paiqiType = "intake/velocity_inlet"
						this.getPaiqiData()
						break;
					case 'intake/velocity_inlet':
						this.paiqiType = value
						localStorage.paiqiType = "intake/velocity_inlet"
						this.getPaiqiData()
						break;
					case 'CellZone_jq':
						this.paiqiType = value
						localStorage.paiqiType = "intake/cell_zone"
						this.getPaiqiData()
						break;
					case 'intake/cell_zone':
						this.paiqiType = value
						localStorage.paiqiType = "intake/cell_zone"
						this.getPaiqiData()
						break;
					case 'Prous_jq':
						this.paiqiType = value
						localStorage.paiqiType = "intake/porous"
						this.getPaiqiData()
						break;
					case 'intake/porous':
						this.paiqiType = value
						localStorage.paiqiType = "intake/porous"
						this.getPaiqiData()
						break;
					case 'Interior_jq':
						this.paiqiType = value
						localStorage.paiqiType = "intake/interior"
						this.getPaiqiData()
						break;
					case 'intake/interior':
						this.paiqiType = value
						localStorage.paiqiType = "intake/interior"
						this.getPaiqiData()
						break;
				}
			},
			getPaiqiData() {
				this.formList = []
				this.formListTitle = {}
				this.axios({
					method: 'get',
					url: `./api/${localStorage.paiqiType}`,
					headers: {
						'Content-type': 'application/json;charset=UTF-8'
					},
					params: {
						page: this.currentPage,
						size: this.pageSize
					}
				}).then((res) => {
					this.pageCount = res.data.count
					res.data.items.forEach((xx) => {
						let nobj = {}
						if(xx.id) {
							this.$set(nobj, 'id', xx.id)
						}
						if(xx.material) {
							this.$set(nobj, 'material', xx.material)
						}
						if(xx.zoneName) {
							this.$set(nobj, 'zoneName', xx.zoneName)
						}
						if(xx.zoneType) {
							this.$set(nobj, 'zoneType', xx.zoneType)
						}
						if(xx.normalRefSurface) {
							this.$set(nobj, 'normalRefSurface', xx.normalRefSurface)
						}
						if(xx.viscRes) {
							this.$set(nobj, 'viscRes', xx.viscRes)
						}
						if(xx.inertialRes) {
							this.$set(nobj, 'inertialRes', xx.inertialRes)
						}
						if(xx.temperature) {
							this.$set(nobj, 'temperature', xx.temperature)
						}
						if(xx.massFlowRate) {
							this.$set(nobj, 'massFlowRate', xx.massFlowRate)
						}
						if(xx.hydraulicDiameter) {
							this.$set(nobj, 'hydraulicDiameter', xx.hydraulicDiameter)
						}
						if(xx.turbulentIntensity) {
							this.$set(nobj, 'turbulentIntensity', xx.turbulentIntensity)
						}
						if(xx.backFlowTemperature) {
							this.$set(nobj, 'backFlowTemperature', xx.backFlowTemperature)
						}
						if(xx.backFlowTurbulentIntensity) {
							this.$set(nobj, 'backFlowTurbulentIntensity', xx.backFlowTurbulentIntensity)
						}
						if(xx.backFlowTemperature) {
							this.$set(nobj, 'backFlowHydraulicDiameter', xx.backFlowHydraulicDiameter)
						}
						if(xx.backFlowTemperature) {
							this.$set(nobj, 'backFlowHydraulicDiameter', xx.backFlowHydraulicDiameter)
						}
						if(xx.thickness) {
							this.$set(nobj, 'thickness', xx.thickness)
						}
						if(xx.shellConduction) {
							this.$set(nobj, 'shellConduction', xx.shellConduction)
						}
						if(xx.heatTransCoef) {
							this.$set(nobj, 'heatTransCoef', xx.heatTransCoef)
						}
						if(xx.freeSteamTemp) {
							this.$set(nobj, 'freeSteamTemp', xx.freeSteamTemp)
						}
						if(xx.shellConduction) {
							this.$set(nobj, 'shellConduction', xx.shellConduction)
						}
						if(xx.backFlowTurbulentIntensity) {
							this.$set(nobj, 'backFlowTurbulentIntensity', xx.backFlowTurbulentIntensity)
						}
						if(xx.backFlowHydraulicDiameter) {
							this.$set(nobj, 'backFlowHydraulicDiameter', xx.backFlowHydraulicDiameter)
						}
						if(xx.backFlowVelocityMagnitude) {
							this.$set(nobj, 'backFlowVelocityMagnitude', xx.backFlowVelocityMagnitude)
						}
						if(localStorage.paiqiType == 'intake/velocity_inlet') {

						} else {
							if(xx.gaugePressure || xx.gaugePressure == 0) {
								this.$set(nobj, 'gaugePressure', xx.gaugePressure)
							}
						}
						this.formList.push(nobj)
						this.formListTitle = this.formList[0]
					})
					console.log(this.formList)
					this.addListItemSlot = {}
					for(let i in this.formList[0]) {
						if(i !== 'id') {
							this.$set(this.addListItemSlot, i, null)
						}
					}
				})
			},
			handleEdit(index, row) {
				//				console.log(index, row);
			},
			handleDelete(index, row) {
				//				console.log(index, row);
			}
		}

	}
</script>

<style lang="scss" scoped="scoped">
	/deep/ .el-cascader-menu__item {
		display: block !important;
	}
	
	/deep/ .el-upload {
		width: 100%;
	}
	
	/deep/ .el-upload-dragger {
		width: 90%;
		margin: 0 auto;
	}
	
	/deep/ .el-card__header {
		background: #eff0dc;
		padding: 6px 20px !important;
	}
	
	.default {
		min-width: 1000px;
		display: flex;
		.tab {
			flex: 0 230px;
			background: rgb(44, 47, 62);
		}
		li {
			display: block;
		}
		.right {
			flex: 1;
			padding: 20px;
			.formList {
				.listTitle {
					display: flex;
					span {
						flex: 1;
						text-align: left;
						color: rgb(147, 147, 147);
						font-weight: 700;
						border-bottom: 1px solid rgb(235, 238, 245);
						padding-bottom: 10px;
						line-height: 20px;
						&:first-child {
							flex: 0 50px;
							position: relative;
						}
					}
				}
				.list {
					display: flex;
					border-bottom: 1px solid rgb(235, 238, 245);
					.el-button {
						padding: 4px;
					}
					span {
						font-size: 14px;
						flex: 1;
						padding: 10px 0;
						text-align: left;
						overflow: hidden;
						text-overflow: ellipsis;
						&:first-child {
							flex: 0 50px;
						}
					}
				}
			}
		}
		.modifyDialog {
			/deep/ .el-dialog__title {
				float: left;
				font-weight: 700;
				font-size: 16px;
			}
			div {
				.sec {
					margin-bottom: 15px;
					text-align: left;
					span {
						min-width: 180px;
						display: inline-block;
						text-align: right;
						margin-right: 10px;
					}
					/deep/ .el-input {
						height: 34px;
					}
					/deep/ .el-input__inner {
						height: 34px;
					}
				}
			}
		}
	}
</style>