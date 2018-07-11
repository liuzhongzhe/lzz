<template>
	<div class="role_set">
		<div class="tab" id="tab">
			<tab :navIndex="navInd"></tab>
		</div>
		<div class="card">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span>权限列表</span>
				</div>
				<div class="add_new">
					<el-button type="primary">新增</el-button>
				</div>
				<div class="list">
					<div class="list_title">
						<span>角色名称</span>
						<span>角色标识</span>
						<span>角色状态</span>
						<span>角色描述</span>
						<span>创建时间</span>
						<span>更新时间</span>
						<span>操作</span>
					</div>
					<div class="list_item" v-for="(item,index) in listAr" :class="{'active':index==listIndex}" @click="chooseList(item,index)">
						<span>{{item.one}}</span>
						<span>{{item.two}}</span>
						<span>{{item.three}}</span>
						<span>{{item.four}}</span>
						<span>{{item.five}}</span>
						<span>{{item.six}}</span>
						<span>
							<el-button type="info">停用</el-button>
							<el-button type="warning">编辑</el-button>
							<el-button type="danger">删除</el-button>
						</span>
					</div>
				</div>
				<div class="block" style="padding: 20px;">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
					</el-pagination>
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
				navInd: '7-2',
				listIndex: -1,
				currentPage4: 1,
				listAr: [{
					one: "管理员",
					two: "admin",
					three: "正常",
					four: "系统维护，用户管理",
					five: "2018-04-13 13:01:59",
					six: "2018-05-10 15:24:19",
				}, {
					one: "管理员",
					two: "admin",
					three: "正常",
					four: "系统维护，用户管理",
					five: "2018-04-13 13:01:59",
					six: "2018-05-10 15:24:19",
				}, {
					one: "管理员",
					two: "admin",
					three: "正常",
					four: "系统维护，用户管理",
					five: "2018-04-13 13:01:59",
					six: "2018-05-10 15:24:19",
				}, {
					one: "管理员",
					two: "admin",
					three: "正常",
					four: "系统维护，用户管理",
					five: "2018-04-13 13:01:59",
					six: "2018-05-10 15:24:19",
				}, {
					one: "管理员",
					two: "admin",
					three: "正常",
					four: "系统维护，用户管理",
					five: "2018-04-13 13:01:59",
					six: "2018-05-10 15:24:19",
				}, ]
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
			chooseList(item, index) {
				this.listIndex = index
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.role_set {
		display: flex;
		font-size: 14px;
		>.tab {
			flex: 0 200px;
			background: rgb(44, 47, 62);
		}
		>.card {
			/deep/ .el-card__header {
				background: #eff0dc;
				padding: 14px 20px !important;
			}
			/deep/ .el-card__body {
				padding: 0;
			}
			flex: 1;
			padding: 20px;
			margin: 0 auto;
			.add_new{
				padding: 20px;
				margin-bottom: 10px;
				.el-button{
					float: right;
					padding: 8px 20px;
				}
			}
			.list {
				padding: 20px;
				>.list_title,
				{
					border: 1px solid rgb(221, 221, 221);
					display: flex;
					span {
						flex: 1;
						text-align: center;
						font-weight: 700;
						line-height: 30px;
						border-right: 1px solid rgb(221, 221, 221);
						&:last-child {
							border-right: none;
						}
					}
				}
				>.list_item {
					border: 1px solid rgb(221, 221, 221);
					border-top: none;
					display: flex;
					&:hover {
						background: rgb(245, 245, 245);
					}
					&.active {
						background: rgb(249, 239, 240);
					}
					span {
						flex: 1;
						text-align: center;
						line-height: 40px;
						border-right: 1px solid rgb(221, 221, 221);
						&:last-child {
							border-right: none;
							.el-button {
								padding: 4px;
							}
						}
					}
				}
			}
		}
	}
</style>