<template>
    <div class="paiqiStepThree">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/paiqiStep/One' }">整车排气系统</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/paiqiStep/Two' }">体网格生成</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/paiqiStep/Three' }">模型材料设置</el-breadcrumb-item>
            <el-breadcrumb-item>边界条件设置</el-breadcrumb-item>
            <el-breadcrumb-item>求解计算</el-breadcrumb-item>
            <el-breadcrumb-item>计算结果</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card">
            <div class="info">
                <span>模型设置</span>
                <div class="sec">
                    <span style="display: inline-block;width: 120px;text-align: right;">模型缩放系数：</span>
                    <el-input></el-input>
                </div>
                <div class="sec">
                    <span style="display: inline-block;width: 120px;text-align: right;">温度单位制：</span>
                    <el-input></el-input>
                </div>
            </div>
            <div class="info">
                <span>材料定义</span>
                <div class="sec">
                    <div style="display: inline-block;">
                        <span>流体域：</span>
                        <el-input style="width: 300px;"></el-input>
                        <div class="list">
                            <ul>
                                <li v-for="(item,index) in listAr" v-on:keyup.native.13="shiftEnter(item,index)">
                                    <span>{{item}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <span style="margin-left: 50px;">材料：</span>
                         <el-select v-model="value" placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                        <el-button style="margin-left: 50px;">应用</el-button>
                    </div>
                </div>
                <div class="sec">
                    <div style="display: inline-block;">
                        <span>固体域：</span>
                        <el-input style="width: 300px;"></el-input>
                        <div class="list">
                            <ul>
                                <li v-for="item in 10">
                                    <span>fluid_exh_pipe1</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div style="display: inline-block;vertical-align: top;">
                        <span style="margin-left: 50px;">材料：</span>
                        <el-select v-model="value" placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                        <el-button style="margin-left: 50px;">应用</el-button>
                    </div>
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
                labelState: false,
                checked: true,
                radio: '1',
                value: '',
                value2: [],
				listAr:[
				'fluid_exh_pipe1',
				'fluid_exh_pipe1',
				'fluid_exh_pipe1',
				'fluid_exh_pipe1',
				'fluid_exh_pipe1',
				'fluid_exh_pipe1',
				'fluid_exh_pipe1',
				'fluid_exh_pipe1',
				'fluid_exh_pipe1',
				'fluid_exh_pipe1',
				],
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }],
            }
        },
		computed:{
			shiftEnter(item,index){
				console.log(item,index)
			},
		},
		mounted(){
			console.log(this.$refs.lzz.$el.childNodes[2].style.display='block')
		},
        methods: {
            toPre() {
                this.$router.push('/paiqiStep/Two')
            },
            toNext() {
                this.$router.push('/paiqiStep/Four')
            },
        }
    }
</script>

<style lang="scss" scoped="scoped">
    .paiqiStepThree {
        font-size: 14px;
        /deep/ .el-input__inner {
            height: 34px;
        }
        .el-breadcrumb {
        	margin-bottom: 15px;
        	margin-left: 5px;
        	border: 1px solid #EEEEEE;
        	background: rgb(245,247,250);
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
            }
            .el-input {
                width: 500px;
            }
            >.sec {
                margin: 20px 0;
                .list {
                    margin-top: 5px;
                    margin-left: 60px;
                    width: 300px;
                    height: 200px;
                    border-radius: 4px;
                    overflow-y: scroll;
                    border: 1px solid rgb(220, 223, 230);
                    li {
                        cursor: pointer;
                        height: 30px;
                        line-height: 30px;
                        text-indent: 10px;
                        &:hover {
                            color: #FFFFFF;
                            background: #C48E39
                        }
                    }
                }
            }
        }
    }
</style>
