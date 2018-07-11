<template>
	<div class="user_set">
		<div class="tab" id="tab">
			<tab ></tab>
		</div>
		<div class="card">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span>个人信息修改</span>
				</div>
				<div class="info">
					<div class="image" style="width: 600px;display: inline-block;">
						<img src="../../../static/bgCar.jpg" style="width: 500px;" />
						<el-button style="display: block;" type="success">上传图片</el-button>
					</div>
					<div class="content" style="width: 350px;display: inline-block;">
						<div class="sec"><span>用户账户：</span>
							<el-input type="text" :disabled="true" />
						</div>
						<div class="sec"><span>用户密码：</span>
							<el-input type="text" />
						</div>
						<div class="sec"><span>确认密码：</span>
							<el-input type="text" />
						</div>
						<div class="sec"><span>真实姓名：</span>
							<el-input type="text" />
						</div>
						<div class="sec"><span>电话号码：</span>
							<el-input type="text" />
						</div>
						<div class="sec">
							<span>电子邮箱：</span>
							<el-input placeholder="请输入内容">
								<template slot="append">@patac.com.cn </template>
							</el-input>
						</div>
						<div class="sec"><span>所属部门：</span>
							<el-input type="text" :disabled="true" />
						</div>
						<div class="sec"><span>角色用户：</span>
							<el-input type="text" :disabled="true" />
						</div>
					</div>
				</div>
				<div class="footer">
					<el-button type="primary">确定</el-button>
					<el-button>取消</el-button>
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
		data(){
			return{
			}
		},
		mounted() {
			document.getElementById("tab").style.minHeight = window.innerHeight + 'px'
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.user_set {
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
			.image {
				.el-button {
					height: 34px;
					line-height: 1px;
					margin-top: 8px;
				}
			}
			.info {
				padding: 20px;
			}
			.footer {
				border-top: 1px solid #EEEEEE;
				height: 50px;
				>.el-button {
					float: right;
					height: 34px;
					line-height: 1px;
					margin-right: 10px;
					margin-top: 8px;
				}
			}
			.content {
				.sec {
					margin-bottom: 10px;
					.el-input {
						width: 260px;
					}
					/deep/ .el-input__inner {
						height: 34px;
					}
				}
			}
		}
	}
</style>