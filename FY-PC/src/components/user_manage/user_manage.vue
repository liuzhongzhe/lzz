<template>
	<div class="sim_material_lib">
		<div class="tab" id="tab">
			<tab :navIndex="navInd"></tab>
		</div>
		<div class="right">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span>用户列表</span>
				</div>
				<div class="button">
					<i-button type="primary">新增</i-button>
				</div>
				<div class="sec">
					<template>
						<el-table :data="tableData">
							<el-table-column label="账号" width="180">
								<template slot-scope="scope">
									<span>{{ scope.row.date }}</span>
								</template>
							</el-table-column>
							<el-table-column label="姓名">
								<template slot-scope="scope">
									<span>{{ scope.row.name }}</span>
								</template>
							</el-table-column>
							<el-table-column label="角色">
								<template slot-scope="scope">
									<span>{{ scope.row.name }}</span>
								</template>
							</el-table-column>
							<el-table-column label="部门">
								<template slot-scope="scope">
									<span>{{ scope.row.name }}</span>
								</template>
							</el-table-column>
							<el-table-column label="电话">
								<template slot-scope="scope">
									<span>{{ scope.row.name }}</span>
								</template>
							</el-table-column>
							<el-table-column label="电子邮箱">
								<template slot-scope="scope">
									<span>{{ scope.row.name }}</span>
								</template>
							</el-table-column>
							<el-table-column label="操作">
								<template slot-scope="scope">
									<i-button size="mini" type="ghost" @click="handleEdit(scope.$index, scope.row)">编辑</i-button>
								</template>
							</el-table-column>
						</el-table>
						<el-pagination style="margin: 10px 0;" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
						</el-pagination>
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
				navInd: '7-1',
				currentPage4: 1,
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
				}]
			}
		},
		mounted() {
			document.getElementById("tab").style.minHeight = window.innerHeight + 'px'
		},
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			}
		}

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
			flex: 0 200px;
			background: rgb(44, 47, 62);
		}
		.right {
			flex: 1;
			padding: 20px;
			.button{
				.ivu-btn{
					padding: 4px 20px;
					float: right;
				}
			}
			
			.sec {
				margin: 10px 0;
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