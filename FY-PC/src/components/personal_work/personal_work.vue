<template>
    <div class="personal_work">
        <div class="tab" id="tab">
            <tab :navIndex="navInd"></tab>
        </div>
        <div class="card">
            <Card class="box-card">
                <div slot="title">
                    <span style="font-size: 14px;">个人任务信息</span>
                    <i-button style="float: right; padding: 3px 0" type="text" @click="viewMore" v-if="viewMoreState">查看更多</i-button>
                    <i-button style="float: right; padding: 3px 0" type="text" @click="viewLess" v-if="!viewMoreState">收起</i-button>
                </div>
                <div v-for="(item,index) in listData" :key="index" class="text item">
                    <Icon type="checkmark-circled" style="color: #5DAF34;margin-right: 10px;"></Icon>{{index+1}}.{{item}}
                    <a href="" style="color: #409EFF;" class="ah">点击查看结果</a>
                </div>
            </Card>
            <Card class="box-card">
                <div slot="title">
                    <span style="font-size: 14px;">任务统计信息</span>
                </div>
                <div class="chooseType">
                    <div class="block">
                        <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" v-model="chooseDate"></DatePicker>
                        <Select v-model="chooseState" style="width:100px">
                            <Option v-for="item in options" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </div>
                </div>
                <div id="myChart" style="width: 600px;height:400px;"></div>
            </Card>
            <Card class="box-card">
                <div slot="title">
                    <span style="font-size: 14px;">系统公告信息</span>
                    <i-button style="float: right; padding: 3px 0" type="text" @click="viewMore" v-if="viewMoreState">查看更多</i-button>
                    <i-button style="float: right; padding: 3px 0" type="text" @click="viewLess" v-if="!viewMoreState">收起</i-button>
                </div>
                <div v-for="(item,index) in listData" :key="index" class="text item">
                    <img src="../../../static/notice.png" width="20px" style="vertical-align: top;"> {{index+1}}.{{item}}
                    <a href="" style="color: #409EFF;" class="ah">查看结果</a>
                </div>
            </Card>
        </div>

    </div>
</template>

<script>
    import tab from '@/base/tab'
    export default {
        components: {
            tab
        },
        created() {
            this.navInd = "1"
        },
        data() {
            return {
                chooseDate: '',
                viewMoreState: true,
                listData: [
                    'E2XX_MY17_ByMrLi任务已计算完成',
                    'E2XX_MY17_ByMrLi任务已计算完成',
                    'E2XX_MY17_ByMrLi任务已计算完成',
                    'E2XX_MY17_ByMrLi任务已计算完成',
                ],
                listDataLess: [
                    'E2XX_MY17_ByMrLi任务已计算完成',
                    'E2XX_MY17_ByMrLi任务已计算完成',
                    'E2XX_MY17_ByMrLi任务已计算完成',
                    'E2XX_MY17_ByMrLi任务已计算完成',
                ],
                listDataMore: [
                    'E2XX_MY17_ByMrLi任务已计算完成',
                    'E2XX_MY17_ByMrLi任务已计算完成',
                    'E2XX_MY17_ByMrLi任务已计算完成',
                    'E2XX_MY17_ByMrLi任务已计算完成',
                    'E2XX_MY17_ByMrLi任务已计算完成',
                    'E2XX_MY17_ByMrLi任务已计算完成',
                    'E2XX_MY17_ByMrLi任务已计算完成',
                    'E2XX_MY17_ByMrLi任务已计算完成',
                ],
                options: [{
                    value: '按计算方式',
                    label: '按计算方式'
                }, {
                    value: '按状态',
                    label: '按状态'
                }, {
                    value: '按模块',
                    label: '按模块'
                }],
                chooseState: '按状态'
            }
        },
        mounted() {
            this.drawLine();
        },
        methods: {
            viewLess() {
                this.listData = this.listDataLess
                this.viewMoreState = true
            },
            viewMore() {
                this.listData = this.listDataMore
                this.viewMoreState = false
            },
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        data: ['已创建', '计算中', '已终止', '已完成'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }],
                    yAxis: [{
                        type: 'value',
                        show: false
                    }],
                    series: [{
                        name: '数量',
                        type: 'bar',
                        itemStyle: {
                            normal: {　　　　　　　　　　　　　
                                color: function (params) {
                                    var colorList = [
                                        'rgb(149,206,255)', 'rgb(144,237,125)',
                                        'rgb(247,163,92)', 'rgb(128,133,233)'
                                    ];
                                    return colorList[params.dataIndex]
                                },
                            }
                        },
                        barWidth: '60%',
                        data: [100, 50, 30, 60]
                    }]
                })
            }
        }
    }
</script>

<style lang="scss" scoped="scoped">
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .ah {
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        min-width: 1000px;
        margin-top: 20px;
        &:first-child {
            margin-top: 0;
        }
        .chooseType {
            text-align: right;
        }
        .ivu-card-head {}
    }

    .personal_work {
        display: flex;
        >.tab {
            flex: 0 230px;
            background: rgb(44, 47, 62);
        }
        >.card {
            flex: 1;
            padding: 20px;
        }
        /deep/ .ivu-card-head {
            background: #eff0dc;
            padding: 14px 20px !important;
        }
    }
</style>
