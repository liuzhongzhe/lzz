<template>
	<div class="paiqiStepTwo">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/paiqiStep/One' }">整车排气系统</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/paiqiStep/Two' }">体网格生成</el-breadcrumb-item>
			<el-breadcrumb-item>模型材料设置</el-breadcrumb-item>
			<el-breadcrumb-item>边界条件设置</el-breadcrumb-item>
			<el-breadcrumb-item>求解计算</el-breadcrumb-item>
			<el-breadcrumb-item>计算结果</el-breadcrumb-item>
		</el-breadcrumb>
		<el-card class="box-card">
			<div class="title">
				<span>输入文件  
					<el-tooltip class="item" effect="dark" content="Right Top 请上传面网格文件（.hmascii）、体名称文件（.inp）和模型图片文件" placement="right-start">
			        <i class="el-icon-question"></i>
			    	</el-tooltip>
				</span>
			</div>
			<div class="upFile">
				<el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
					<i class="el-icon-upload"></i>
					<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
				</el-upload>
			</div>
			<div class="info">
				<span>体网格控制</span>
				<div>
					<span>网格增长率：</span>
					<el-input style="width: 300px;"></el-input>
				</div>
				<div>
					<el-checkbox v-model="checked" @change="labelChange">网格优化控制</el-checkbox>
					<span style="margin-left: 100px;">目标质量：</span>
					<el-input :disabled="labelState"></el-input>
					<span style="margin-left: 100px;">迭代次数：</span>
					<el-input :disabled="labelState"></el-input>
				</div>
			</div>
		</el-card>
		<div style="text-align: center;">
			<el-button type="primary" style="margin: 10px 0;" @click="toNext">下一步</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				labelState:false,
				checked: true,
				radio: '1',
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
		methods:{
			toNext(){
				this.$router.push('/paiqiStep/Three')
			},
			labelChange(val){
				if(val){
					this.labelState=false
				}else{
					this.labelState=true
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.paiqiStepTwo {
		font-size: 14px;
		/deep/ .el-input__inner {
			height: 34px;
		}
		/deep/ .el-upload {
			width: 100%;
		}
		/deep/ .el-upload-dragger {
			width: 98%;
			height: 200px;
			margin: 20px auto;
		}
		
		.el-breadcrumb {
			margin-bottom: 15px;
			margin-left: 5px;
			border: 1px solid #EEEEEE;
			background: rgb(245,247,250);
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
		.el-input{
			width: 200px;
		}
		.info {
			>div{
				margin:20px 0;
			}
			>span {
				display: block;
				height: 40px;
				line-height: 40px;
				border-bottom: 1px solid #EEEEEE;
				color: rgb(167, 35, 46);
			}
		}
		.title {
			span {
				display: block;
				height: 40px;
				line-height: 40px;
				border-bottom: 1px solid #EEEEEE;
				color: rgb(167, 35, 46);
			}
			.el-input {
				width: 500px;
				margin: 15px 0;
			}
		}
	}
</style>