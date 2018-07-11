<template>
    <div class="paiqiStepThree">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/paiqiStep/One' }">整车排气系统</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/paiqiStep/Two' }">体网格生成</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/paiqiStep/Three' }">模型材料设置</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/paiqiStep/Four' }">边界条件设置</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/paiqiStep/Five' }">求解计算</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/paiqiStep/Result' }">计算结果</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="tag">
            <el-button type="warning">Title&Author</el-button>
            <el-button type="warning">Boundary & Summary</el-button>
            <el-button type="warning">Total-BackPressure</el-button>
            <el-button type="warning">Mach Number</el-button>
            <el-button type="warning">Temperature</el-button>
            <el-button type="warning">Path line</el-button>
        </div>
        <div class="result">
            <div class="title">
                <span>计算结果：</span>
            </div>
            <div class="secWrapper">
                <div class="sec">
                    <div class="title">
                        <span>Title & Author</span>
                    </div>
                    <div class="listWrapper">
                        <div class="list">
                            <div class="listItem">
                                <span class="listTitle">Title</span>
                                <span class="listInfo">E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Intake</span>
                            </div>
                            <div class="listItem">
                                <span class="listTitle">Title</span>
                                <span class="listInfo">E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Intake</span>
                            </div>
                            <div class="listItem">
                                <span class="listTitle">Title</span>
                                <span class="listInfo">E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Intake</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sec">
                    <div class="title">
                        <span>Title & Author</span>
                    </div>
                    <div class="listWrapper">
                        <div class="list">
                            <div class="listItem">
                                <span class="listTitle">Title</span>
                                <span class="listInfo">E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Intake</span>
                            </div>
                            <div class="listItem">
                                <span class="listTitle">Title</span>
                                <span class="listInfo">E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Intake</span>
                            </div>
                            <div class="listItem">
                                <span class="listTitle">Title</span>
                                <span class="listInfo">E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Intake</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sec">
                    <div class="title">
                        <span>Title & Author</span>
                    </div>
                    <div class="listWrapper">
                        <div class="list">
                            <div class="listItem">
                                <span class="listTitle">Title</span>
                                <span class="listInfo">E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Intake</span>
                            </div>
                            <div class="listItem">
                                <span class="listTitle">Title</span>
                                <span class="listInfo">E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Intake</span>
                            </div>
                            <div class="listItem">
                                <span class="listTitle">Title</span>
                                <span class="listInfo">E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Intake</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sec">
                    <div class="title">
                        <span>Title & Author</span>
                    </div>
                    <div class="listWrapper">
                        <div class="list">
                            <div class="listItem">
                                <span class="listTitle">Title</span>
                                <span class="listInfo">E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Intake</span>
                            </div>
                            <div class="listItem">
                                <span class="listTitle">Title</span>
                                <span class="listInfo">E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Intake</span>
                            </div>
                            <div class="listItem">
                                <span class="listTitle">Title</span>
                                <span class="listInfo">E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Intake</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sec">
                    <div class="title">
                        <span>Title & Author</span>
                    </div>
                    <div class="listWrapper">
                        <div class="list">
                            <div class="listItem">
                                <span class="listTitle">Title</span>
                                <span class="listInfo">E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Intake</span>
                            </div>
                            <div class="listItem">
                                <span class="listTitle">Title</span>
                                <span class="listInfo">E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Intake</span>
                            </div>
                            <div class="listItem">
                                <span class="listTitle">Title</span>
                                <span class="listInfo">E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Intake</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="text-align: center;">
            <el-button type="" style="margin: 10px 0;" @click="toPre">上一步</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            toPre() {
                this.$router.push('/paiqiStep/Five')
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
            background: rgb(245, 247, 250);
        }
        .el-breadcrumb {
            margin-bottom: 15px;
            margin-left: 5px;
        }
        /deep/ .el-breadcrumb__inner.is-link {
            color: rgb(167, 35, 46) !important;
			font-weight: 700;
        }
        /deep/ .el-breadcrumb__item {
            display: inline-block;
            background: rgb(245, 247, 250);
            padding: 10px 20px;
			
        }
		/deep/ .el-breadcrumb__item:last-child{
			
		}
        /deep/ .el-breadcrumb__separator {
            margin: 0 0;
            margin-left: 30px;
        }
        .tag {
            margin-top: 30px;
            padding: 15px;
            border-radius: 4px;
            background: #FFFFFF;
            border: 1px solid rgb(221, 221, 221);
        }
        .result {
            margin-top: 20px;
            border: 1px solid rgb(221, 221, 221);
            >.title {
                background-color: #f5f5f5;
                span {
                    display: block;
                    padding: 10px 15px;
                }
            }
            >.secWrapper {
                padding: 15px;
                background: #FFFFFF;

                .sec {
                    border: 1px solid rgb(221, 221, 221);
                    margin-bottom: 20px;
                    .title {
                        display: block;
                        padding: 10px 15px;
                        border-bottom: 1px solid rgb(221, 221, 221);
                    }
                    .listWrapper {
                        padding: 15px;
                        >.list {
                            >.listItem {
                                border-top: 1px solid #ddd;
                                border-left: 1px solid #ddd;
                                border-right: 1px solid #ddd;
                                display: flex;
                                &:last-child {
                                    border-bottom: 1px solid #ddd;
                                }
                                >.listTitle {
                                    background: #f5f5f5;
                                    display: inline-block;
                                    flex: 0 150px;
                                    text-align: center;
                                    line-height: 38px;
                                    font-weight: 700;
                                    border-right: 1px solid #ddd;
                                }
                                >.listInfo {
                                    flex: 1;
                                    text-align: center;
                                    line-height: 38px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
