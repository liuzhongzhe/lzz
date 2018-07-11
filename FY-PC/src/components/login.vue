<template>
	<div class="login">
		<div class="box">
			<div class="content">
				<span>泛亚热性能智能计算平台</span>
			</div>
			<div class="inp">
				<div class="sec">
					<span>用户名</span>
					<i-input></i-input>
				</div>
				<div class="sec" style="margin-top: 20px;">
					<span>密码</span>
					<i-input></i-input>
				</div>
			</div>
			<div class="button">
				<i-button type="primary" @click="toLogin">登陆</i-button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			};
		},
		filters: {

		},
		mounted() {},
		methods: {
			toLogin(){
				this.$router.push('/personal_work')
			}
		}
	};
</script>
<style lang="scss" scoped="scoped">
	.login {
		width: 100%;
		height: 100%;
		background: url(../../static/bgCar.jpg) no-repeat;
		>.box {
			background: rgba(255, 255, 255, 0.7);
			width: 500px;
			height: 320px;
			border-radius: 20px;
			margin: -180px 0 0 -250px;
			position: absolute;
			left: 50%;
			top: 50%;
			z-index: 100;
			>.content {
				height: 40px;
				text-align: center;
				position: relative;
				z-index: 100;
				margin: 44px 0px 53px;
				>span{
					font-size: 18px;
				}
			}
			>.inp{
				padding: 0 110px 0 85px;
				>.sec{
					span{
						display: inline-block;
						width: 40px;
						text-align: right;
						margin-right: 10px;
					}
					>.ivu-input-wrapper{
						display: inline-block;
						width: 240px;
					}
				}
			}
			>.button{
				width: 120px;
				margin: 20px auto;
				>.ivu-btn-primary{
					width: 120px;
				}
			}
		}
	}
</style>