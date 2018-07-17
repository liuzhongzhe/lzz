<template>
	<div class="paiqiStepOne">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '' }">整车排气系统</el-breadcrumb-item>
			<el-breadcrumb-item>体网格生成</el-breadcrumb-item>
			<el-breadcrumb-item>模型材料设置</el-breadcrumb-item>
			<el-breadcrumb-item>边界条件设置</el-breadcrumb-item>
			<el-breadcrumb-item>求解计算</el-breadcrumb-item>
			<el-breadcrumb-item>计算结果</el-breadcrumb-item>
		</el-breadcrumb>
		<el-card class="box-card">
			<div class="title">
				<span>任务名称</span>
				<el-input type="text" :disabled="true" />
			</div>
			<div class="info">
				<span>任务摘要</span>
				<div class="secOne">
					<div class="sec">
						<span>Department：</span>
						<el-input type="text" :disabled="true" />
					</div>
					<div class="sec">
						<span>Engineer：</span>
						<el-input type="text" :disabled="true" />
					</div>
					<div class="sec">
						<span>Product：</span>
						<el-input type="text" :disabled="true" />
					</div>
					<div class="sec">
						<span>Supplier：</span>
						<el-input type="text" :disabled="true" />
					</div>
					<div class="sec">
						<span>MathData No：</span>
						<el-input type="text" :disabled="true" />
					</div>
					<div class="sec">
						<span>Drawing No：</span>
						<el-input type="text" :disabled="true" />
					</div>
					<div class="sec">
						<span>Customer Proj：</span>
						<el-input type="text" :disabled="true" />
					</div>
					<div class="sec">
						<span>Orderer：</span>
						<el-input type="text" :disabled="true" />
					</div>
					<div class="sec">
						<span>Engine：</span>
						<el-input type="text" :disabled="true" />
					</div>
					<div class="sec">
						<span>Vehicle：</span>
						<el-input type="text" :disabled="true" />
					</div>
					<div class="sec">
						<span>Software：</span>
						<el-input type="text" :disabled="true" />
					</div>
					<div class="sec">
						<span>Date：</span>
						<el-input type="text" :disabled="true" />
					</div>
				</div>
				<div class="secTwo">
					<Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="140">
						<p>Target：</p>
						<FormItem label="Max Mach Number < " prop="maxmach">
							<Input type="text" v-model="formCustom.maxmach" number style="width: 200px;"></Input>
						</FormItem>
						<FormItem label="total_backpressure < " prop="totalback">
							<Input type="text" v-model="formCustom.totalback" number style="width: 200px;"></Input>
						</FormItem>
					</Form>
				</div>
			</div>
			<div class="chooseCarType">
				<span>选择车型</span>
				<div class="sec">
					<span>平台名称：</span>
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="sec">
					<span>车型名称：</span>
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="sec">
					<span>车型年份：</span>
					<el-select v-model="value" spanlaceholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="sec">
					<span>发动机名称：</span>
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="sec">
					<span>变速箱名称：</span>
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="sec">
					<span>驱动形式：</span>
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="sec">
					<span>左/右驾：</span>
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="sec">
					<span>项目状态：</span>
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
			</div>
			<div class="qstj">
				<span>起始条件</span>
				<div>
					<el-radio v-model="radio" label="1">输入面网格</el-radio>
					<el-radio v-model="radio" label="2">输入体网格</el-radio>
					<el-radio v-model="radio" label="2">输入Cas模型</el-radio>
					<el-radio v-model="radio" label="2">输入Cas/Data</el-radio>
				</div>
			</div>
			<div class="qstj">
				<span>交互控制</span>
				<div>
					<el-radio v-model="radio" label="1">自动执行</el-radio>
					<el-radio v-model="radio" label="2">检查部件和网络</el-radio>
				</div>
			</div>
		</el-card>
		<div style="text-align: center;">
			<el-button type="primary" style="margin: 10px 0;" @click="createTask">创建任务</el-button>
		</div>

	</div>
</template>
<script>
	export default {
		data() {
			const validateAge = (rule, value, callback) => {
				if(!value) {
					return callback(new Error(' '));
				}
				if(!Number.isInteger(value)) {
					callback(new Error(''));
				} else {
					callback();
				}
			};
			return {
				radio: '1',
				value: '',
				num8: 0,
				formCustom: {
					totalback: '',
					maxmach: ''
				},
				ruleCustom: {
					maxmach: [{
						validator: validateAge,
						trigger: 'change'
					}],
					totalback: [{
						validator: validateAge,
						trigger: 'change'
					}],
				},
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
			handleSubmit(name) {
				this.$refs[name].validate((valid) => {
					if(valid) {
						this.$Message.success('Success!');
					} else {
						this.$Message.error('Fail!');
					}
				})
			},
			handleReset(name) {
				this.$refs[name].resetFields();
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			createTask() {
				this.$router.push('/paiqiStep/Two')
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.paiqiStepOne {
		font-size: 14px;
		/deep/ .el-input__inner {
			height: 34px;
		}
		/deep/ .ivu-form-item-error-tip{
			display: none;
		}
		/deep/ .el-form-item__label {
			padding: 4px 12px 0 0;
		}
		.el-breadcrumb {
			margin-bottom: 15px;
			margin-left: 5px;
			border: 1px solid #EEEEEE;
			background: rgb(245, 247, 250);
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
		/deep/ .el-input__inner {
			padding: 0 0 0 10px;
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
				margin: 10px 0;
			}
		}
		.qstj {
			>span {
				display: block;
				height: 40px;
				line-height: 40px;
				border-bottom: 1px solid #EEEEEE;
				color: rgb(167, 35, 46);
			}
			>div {
				label {
					width: 20%;
					margin: 20px 0;
				}
			}
		}
		.chooseCarType {
			>span {
				display: block;
				height: 40px;
				line-height: 40px;
				border-bottom: 1px solid #EEEEEE;
				color: rgb(167, 35, 46);
			}
			.sec {
				width: 24.5%;
				display: inline-block;
				margin: 10px auto;
				span {
					display: inline-block;
					text-align: left;
					width: 100px;
					text-align: right;
				}
			}
		}
		@media screen and (max-width:1660px) {
			.chooseCarType {
				.sec {
					width: 24.5%;
					display: inline-block;
					margin: 5px auto;
					span {
						display: block;
						width: 100px;
						text-align: left;
						line-height: 40px;
					}
				}
			}
			.secOne {
				display: none;
				.sec {
					span {
						display: block !important;
						width: 120px;
						text-align: left !important;
					}
				}
			}
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
				margin: 5px 0 10px 0;
			}
			>.secOne {
				width: 50%;
				display: inline-block;
				.sec {
					width: 49%;
					display: inline-block;
					span {
						display: inline-block;
						width: 120px;
						text-align: right;
					}
				}
			}
			>.secTwo {
				width: 49%;
				display: inline-block;
				vertical-align: top;
				padding-top: 10px;
				.sec {
					margin-bottom: 20px;
					.title {
						display: inline-block;
						width: 150px;
						text-align: right;
					}
				}
			}
		}
	}
</style>