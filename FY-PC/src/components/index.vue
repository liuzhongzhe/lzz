<template>
	<div class="index">
		<div class="tab" id="tab">
			<div class="logo">
				<span>泛亚热性能智能计算平台</span>
			</div>
			<el-row class="tac">
				<el-col style="width: 201px;">
					<el-menu :default-active=nowCurrentInex class="el-menu-vertical-demo" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
						<el-menu-item index="1">
							<i class="el-icon-printer"></i>
							<span slot="title" @click="">个人工作台</span>
						</el-menu-item>
						<el-menu-item index="2">
							<i class="el-icon-info"></i>
							<span slot="title">仿真应用系统</span>
						</el-menu-item>
						<el-menu-item index="3">
							<i class="el-icon-document"></i>
							<span slot="title">仿真应用管理</span>
						</el-menu-item>

						<el-submenu index="4">
							<template slot="title">
								<i class="el-icon-menu"></i>
								<span>仿真资源库</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="4-1">车型平台管理</el-menu-item>
								<el-menu-item index="4-2">方针材料库</el-menu-item>
								<el-menu-item index="4-3">计算工况管理</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-menu-item index="5">
							<i class="el-icon-setting"></i>
							<span slot="title">仿真数据管理</span>
						</el-menu-item>
						<el-menu-item index="6">
							<i class="el-icon-edit"></i>
							<span slot="title">高性能计算</span>
						</el-menu-item>
						<el-menu-item index="7">
							<i class="el-icon-setting"></i>
							<span slot="title">系统管理</span>
						</el-menu-item>
					</el-menu>
				</el-col>
			</el-row>
		</div>
		<div class="routerBox">
			<router-view @returnNowIndex="getNowIndex"></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				nowCurrentInex:'0'	
			}
		},
		mounted() {
			this.nowCurrentInex='1'
			document.getElementById("tab").style.minHeight = window.innerHeight + 'px'
		},
		created(){
			this.nowCurrentInex='1'
		},
		methods: {
			getNowIndex(index){
				this.nowCurrentInex = index.toString()
				
			},
			
		}
	}
</script>

<style lang="scss">
	.el-submenu .el-menu-item {
		height: 46px;
		line-height: 46px;
		text-align: left;
		padding-left: 70px !important;
	}
	.el-menu-item-group__title {
		padding: 0 0 0 20px;
	}
	.el-menu {
		border-right: 0;
	}
	.el-submenu__title span {
		text-align: left;
		width: 90px;
		display: inline-block
	}
	.el-submenu__title i {
		&:last-child {
			right: 42px;
		}
	}
	.el-submenu__icon-arrow {
		display: none;
	}
	.el-menu-item span {
		text-align: left;
		width: 90px;
		display: inline-block;
	}
	.index {
		display: flex;
		>.routerBox {
			flex: 1;
		}
		>.tab {
			flex: 0 230px;
			background: rgb(39,43,46);
			>.logo {
				padding: 50px 0;
				margin: 0 auto;
				span {
					display: block;
					text-align: center;
					border-top: 1px solid #FFFFFF;
					color: #ffffff;
					font-size: 14px;
					height: 34px;
					line-height: 34px;
				}
			}
		}
	}
</style>