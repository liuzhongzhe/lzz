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
                    <div class="el-upload__text">将文件拖到此处，或
                        <em>点击上传</em>
                    </div>
                </el-upload>
            </div>
            <div class="info">
                <span>体网格控制</span>
                <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="140">
                    <FormItem label="网格优化控制">
                        <el-checkbox v-model="checked" @change="labelChange"></el-checkbox>
                    </FormItem>
                    <FormItem prop="wgzzl" label="网格增长率">
                        <Input type="text" :disabled="labelState" v-model="formCustom.wgzzl" number style="width: 200px;"></Input>
                    </FormItem>
                    <FormItem prop="mbzl" label="目标质量">
                        <Input :disabled="labelState" type="text" v-model="formCustom.mbzl" number style="width: 200px;"></Input>
                    </FormItem>
                    <FormItem label="迭代次数" prop="ddcs">
                        <Input :disabled="labelState" type="text" v-model="formCustom.ddcs" number style="width: 200px;">
                        </Input>
                    </FormItem>
                </Form>
                <div>
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
            const validateAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error(' '));
                }
                if (!Number.isInteger(value)) {
                    callback(new Error(''));
                } else {
                    callback();
                }
            };
            return {
                labelState: false,
                checked: true,
                radio: '1',
                value: '',
                formCustom: {
                    wgzzl: '',
                    mbzl: '',
					ddcs:''
                },
                ruleCustom: {
                    wgzzl: [{
                        validator: validateAge,
                        trigger: 'change'
                    }],
                    mbzl: [{
                        validator: validateAge,
                        trigger: 'change'
                    }],
                    ddcs: [{
                        validator: validateAge,
                        trigger: 'change'
                    }],
                },
            }
        },
        methods: {
            toNext() {
                this.$router.push('/paiqiStep/Three')
            },
            labelChange(val) {
                if (val) {
                    this.labelState = false
                } else {
                    this.labelState = true
                }

            }
        }
    }
</script>

<style lang="scss" scoped="scoped">
    .paiqiStepTwo {
        font-size: 14px;
        /deep/ .ivu-form-item-error-tip {
            display: none;
        }
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
        .el-input {
            width: 200px;
        }
        .info {
            >div {
                margin: 20px 0;
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
