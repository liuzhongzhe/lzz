<template>
	<div class="paiqiStepFive">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/paiqiStep/One' }">整车排气系统</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/paiqiStep/Two' }">体网格生成</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/paiqiStep/Three' }">模型材料设置</el-breadcrumb-item>
			<el-breadcrumb-item	:to="{ path: '/paiqiStep/Four' }">边界条件设置</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/paiqiStep/five' }" >求解计算</el-breadcrumb-item>
			<el-breadcrumb-item>计算结果</el-breadcrumb-item>
		</el-breadcrumb>
		<el-card class="box-card">
			<div class="info" style="margin-top: 40px;">
				<span>计算设置</span>
				<div class="sec">
					<span>迭代次数：</span>
					<el-input style="margin-left: 30px;"></el-input>
					<span style="margin-left: 80px;">CPU数：</span>
					<el-input style="margin-left: 30px;"></el-input>
				</div>
				<div class="sec">
					<span style="display: inline-block;">设置方式：</span>
					<el-radio-group v-model="radio2" @change="handleCheckAllChange">
						<el-radio :label="3" style="display: block;margin-left: 30px;margin-top: 35px">默认设置</el-radio>
						<el-radio :label="6" style="display: block;margin-top: 20px;">导入脚本</el-radio>
					</el-radio-group>
					<div style="margin-top: 20px;width: 100%;" v-show="upShow">
						<el-upload style="width: 100%;" class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
							<i class="el-icon-upload"></i>
							<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
						</el-upload>
					</div>
				</div>
			</div>
			<div class="info">
				<span>计算方式</span>
				<div class="sec" style="margin: 50px 0;">
					<el-radio-group v-model="radio2">
						<el-radio :label="3">本地计算</el-radio>
						<el-radio :label="2" style="margin-left: 120px;">服务器计算</el-radio>
						<el-radio :label="9" style="margin-left: 120px;">PBS计算</el-radio>
					</el-radio-group>
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
				upShow: false,
				labelState: false,
				checked: true,
				radio: '1',
				radio2: '1',
				value: '',
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
			}
		},
		methods: {
			toPre() {
				this.$router.push('/paiqiStep/Four')
			},
			toNext() {
				this.$router.push('/paiqiStep/Result')
			},
			handleCheckAllChange(val) {
				if(val===6){
					this.upShow=true
				}else{
					this.upShow=false
				}
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.paiqiStepFive {
		font-size: 14px;
		/deep/ .el-input__inner {
			height: 34px;
		}
		/deep/ .el-upload {
			width: 100%;
		}
		/deep/ .el-upload-dragger {
			width: 98%;
		}
		.el-breadcrumb {
			margin-bottom: 15px;
			margin-left: 5px;
		}
		/deep/ .el-breadcrumb__inner.is-link {
			color: rgb(167, 35, 46) !important;
		}
		/deep/ .el-breadcrumb__item{
			display: inline-block;
			background: rgb(245,247,250);
			padding: 10px 20px;
		}
		/deep/ .el-breadcrumb__separator{
			margin:0 0;
			margin-left: 30px;
		}
		.info {
			>span {
				display: block;
				height: 40px;
				line-height: 40px;
				border-bottom: 1px solid #EEEEEE;
				color: rgb(167, 35, 46);
				font-weight: 700;
			}
			.el-input {
				width: 200px;
			}
			>.sec {
				margin: 30px 0;
			}
		}
	}
</style>