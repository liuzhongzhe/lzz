<template>
	<div class="sim_material_lib">
		<div class="tab" id="tab">
			<tab :navIndex="navInd" default-openeds="4"></tab>
		</div>
		<div class="right">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span>仿真材料库</span>
				</div>
				<div class="button">
					<i-button type="success">导出材料文件</i-button>
					<i-button type="info">导入材料文件 </i-button>
				</div>
				<div class="sec">
					<span>流体材料</span>
					<div class="form">
						<div class="title">
							<span v-for="item in tableTitle">
								{{item.name}}
							</span>
						</div>
						<div class="list">
							<ul v-for="(a,index) in 5">
								<li v-for="item in tableData">
									<span v-show="editShowIndex != index">{{item.name}}</span>
									<el-input style="width: 80%;" v-show="editShowIndex == index" v-model="item.name" :value="item.name"></el-input>
								</li>
								<li style="vertical-align: top;">
									<i-button @click="edit(index)" type="ghost">编辑</i-button>
									<i-button @click="save"  type="primary">保存</i-button>
								</li>
							</ul>

						</div>
					</div>
				</div>
				<div class="sec">
					<span>固体材料</span>
					<template>
						<el-table :data="tableData" style="width: 100%">
							<el-table-column type="index" width="50">
							</el-table-column>
							<el-table-column prop="date" label="材料名称">
							</el-table-column>
							<el-table-column prop="name" label="密度计算方法">
							</el-table-column>
							<el-table-column prop="name" label="密度">
							</el-table-column>
							<el-table-column prop="name" label="比热">
							</el-table-column>
							<el-table-column prop="name" label="导热系数">
							</el-table-column>
							<el-table-column prop="name" label="粘性系数">
							</el-table-column>
						</el-table>
					</template>
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
				navInd: '4-2',
				editShowIndex:-1,
				tableTitle: [{
						name: '材料名称'
					},
					{
						name: '密度计算方法'
					},
					{
						name: '密度'
					},
					{
						name: '比热'
					},
					{
						name: '导热系数'
					},
					{
						name: '粘性系数'
					},
					{
						name: '操作'
					},
				],
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}]
			}
		},
		methods:{
			edit(index){
				this.editShowIndex = index
			},
			save(){
				this.editShowIndex = -1
			}
		},
		mounted() {
			document.getElementById("tab").style.minHeight = window.innerHeight + 'px'
		},

	}
</script>

<style lang="scss" scoped="scoped">
	.sim_material_lib {
		display: flex;
		font-size: 14px;
		/deep/ .el-card__header {
			background: #eff0dc;
			padding: 14px 20px !important;
		}
		.tab {
			flex: 0 230px;
			background: rgb(44, 47, 62);
		}
		.right {
			flex: 1;
			padding: 20px;
			.ivu-btn{
				padding: 4px 20px;
			}
			.sec {
				margin: 10px 0;
				.form {
					.title {
						display: flex;
						padding: 12px 0;
						border-bottom: 1px solid #ebeef5;
						span {
							flex: 1;
							color: #909399;
							font-weight: 700;
							line-height: 23px;
						}
					}
					.list {
						ul {
							display: flex;
							padding: 12px 0;
							border-bottom: 1px solid #ebeef5;
							li {
								flex: 1;
								color: #909399;
								font-weight: 700;
								line-height: 32px;
							}
						}
					}
				}
				>span {
					color: rgb(167, 35, 46);
					display: block;
					line-height: 40px;
					border-bottom: 1px solid rgb(238, 238, 238);
				}
			}
		}
	}
</style>