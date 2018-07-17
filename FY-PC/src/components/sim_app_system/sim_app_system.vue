<template>
    <div class="sim_app_system">
        <div class="tab" id="tab">
            <tab :navIndex="navInd"></tab>
        </div>
        <div class="card">
            <div class="select">
                <i-select v-model="value" placeholder="请选择" @change="chooseCard(value)">
                    <i-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </i-option>
                </i-select>
            </div>
            <Card class="box-card" v-if="cardName=='选项1' ||cardName=='全部'">
                <div slot="title" class="clearfix">
                    <span style="font-size: 14px;">集合建模系统</span>
                </div>
                <div class="sec" @mouseenter="mouseenterOne" @mouseleave="mouseleaveOne">
                    <img @click="toSystem(list)" src="../../../static/a1.png" style="width: 225px;height: 130px;border-radius: 4px;" />
                    <span class="name" v-show="cardShow">集合建模系统</span>
                    <span class="detail" v-show="!cardShow">
                        <div>
                            <a class="line"></a>
                            <p>集合建模系统</p>
                            <a class="line"></a>
                        </div>
                        <span>几何建模系统是基于HyerMesh二次开发，实现由几何面模型生成面网格模型的功能</span>
                    </span>
                </div>
            </Card>
            <Card class="box-card" v-if="cardName=='选项2' ||cardName=='全部'">
                <div slot="title" class="clearfix">
                    <span style="font-size: 14px;">XXX</span>
                </div>
                <div class="sec" v-for="(list,index) in typeArOne" @mouseenter="moveEnter(index)" @mouseleave="moveLevel(index)" @click="toSystem(list)">
                    <img :src="list.imgUrl" style="width: 225px;height: 130px;border-radius: 4px;" />
                    <span class="name" v-show="index!=currentIndex">{{list.name}}</span>
                    <span class="detail" v-show="index===currentIndex">
                        <div>
                            <a class="line"></a>
                            <p>{{list.name}}</p>
                            <a class="line"></a>
                        </div>

                        <span>{{list.detail}}</span>
                    </span>
                </div>
            </Card>
            <Card class="box-card" v-if="cardName=='选项3' ||cardName=='全部'">
                <div slot="title" class="clearfix">
                    <span style="font-size: 14px;">XXX</span>
                </div>
                <div class="sec" v-for="(list,index) in typeArTwo" @mouseenter="moveEnterThree(index)" @mouseleave="moveLevelThree(index)">
                    <img @click="toSystem(list)" :src="list.imgUrl" style="width: 225px;height: 130px;border-radius: 4px;" />
                    <span class="name" v-show="index!=currentIndex">{{list.name}}</span>
                    <span class="detail" v-show="index===currentIndexThree">
                        <div>
                            <a class="line"></a>
                            <p>{{list.name}}</p>
                            <a class="line"></a>
                        </div>
                        <span>{{list.detail}}</span>
                    </span>
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
            this.navInd = "2"
        },
        data() {
            return {
                cardShow: true,
                cardName: '全部',
                currentIndex: -1,
                currentIndexThree: -1,
                options: [{
                    value: '全部',
                    label: '全部'
                }, {
                    value: '选项1',
                    label: '选项1'
                }, {
                    value: '选项2',
                    label: '选项2'
                }, {
                    value: '选项3',
                    label: '选项3'
                }],
                value: '',
                typeArTwo: [{
                        name: "控制标定系统",
                        imgUrl: 'static/a12.png',
                        detail: '对控制标定系统性能进行仿真计算。'
                    },
                    {
                        name: "温度预测系统",
                        imgUrl: 'static/a13.png',
                        detail: '对汽车工作过程中的温度进行预测分析。'
                    },
                    {
                        name: "数据查询系统",
                        imgUrl: 'static/a14.png',
                        detail: '对仿真计算中产生的结果数据进行管理，用于查询展示。。'
                    }
                ],
                typeArOne: [{
                        name: "发动机冷却性能系统",
                        imgUrl: 'static/a9.png',
                        detail: '对汽车空调系统的性能进行CFD仿真计算。'
                    }, {
                        name: "自然风险评估系统",
                        imgUrl: 'static/a5.png',
                        detail: '对汽车空调系统的性能进行CFD仿真计算。'
                    },
                    {
                        name: "地毯温度计算系统",
                        imgUrl: 'static/a2.png',
                        detail: '对汽车空调系统的性能进行CFD仿真计算。'
                    },
                    {
                        name: "零件温度预测系统",
                        imgUrl: 'static/a7.png',
                        detail: '对汽车空调系统的性能进行CFD仿真计算。'
                    }, {
                        name: "空调性能系统",
                        imgUrl: 'static/a2.png',
                        detail: '对汽车空调系统的性能进行CFD仿真计算。'
                    },
                    {
                        name: "底盘进气系统",
                        imgUrl: 'static/a3.png',
                        detail: '对汽车底盘进气系统的性能进行CFD仿真计算。'
                    },
                    {
                        name: "底盘排气系统",
                        imgUrl: 'static/a4.png',
                        detail: '对空调控制系统的性能进行仿真计算。'
                    },
                    {
                        name: "空调控制系统",
                        imgUrl: 'static/a5.png',
                        detail: '对发动机进气道系统的性能进行CFD仿真计算。'
                    },
                    {
                        name: "发动机进气道系统",
                        imgUrl: 'static/a6.png',
                        detail: '对发动机排气道系统的性能进行CFD仿真计算。'
                    },
                    {
                        name: "发动机排气道系统",
                        imgUrl: 'static/a7.png',
                        detail: '对动力冷却系统的性能进行仿真计算。'
                    },
                    {
                        name: "动力冷却系统",
                        imgUrl: 'static/a8.png',
                        detail: '对整车热管理系统的性能进行仿真计算'
                    },
                    {
                        name: "整车热管理系统",
                        imgUrl: 'static/a9.png',
                        detail: '对电池电器热管理系统的性能进行仿真计算'
                    },
                    {
                        name: "电池电器热管理系统",
                        imgUrl: 'static/a10.png',
                        detail: '对人体舒适系统的性能进行仿真计算'
                    },
                    {
                        name: "人体舒适系统",
                        imgUrl: 'static/a11.png',
                        detail: '对空调噪音状况进行仿真计算'
                    },
                    {
                        name: "空调噪音系统",
                        imgUrl: 'static/a12.png',
                        detail: '对空调噪音状况进行仿真计算'
                    }
                ]
            }
        },
        mounted() {
            document.getElementById("tab").style.minHeight = window.innerHeight + 'px'
        },
        methods: {
            chooseCard(value) {
                this.cardName = value
            },
            toSystem(item) {
                switch (item.name) {
                    case "底盘排气系统":
                        this.$router.push('/paiqiStep');
                        break;
                    case "零件温度预测系统":
                        this.$router.push('/part_temperature');
                        break;
                    case "地毯温度计算系统":
                        this.$router.push('/carpet_temperature');
                        break;
                    case "自然风险评估系统":
                        this.$router.push('/natural_risk');
                        break;
					case "发动机冷却性能系统":
						this.$router.push('/vecp_system');
						break;
                        

                }
            },
            moveEnterThree(index) {
                this.currentIndexThree = index
            },
            moveLevelThree(index) {
                this.currentIndexThree = -1
            },
            mouseenterOne() {
                this.cardShow = false
            },
            mouseleaveOne() {
                this.cardShow = true
            },
            moveEnter(index) {
                this.currentIndex = index
            },
            moveLevel(index) {
                this.currentIndex = -1
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

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    /deep/ .el-card__header {
        background: #eff0dc;
        padding: 14px 20px !important;
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
        .sec {
            display: inline-block;
            margin: 10px;
            border-radius: 4px;
            position: relative;
            height: 170px;
            cursor: pointer;
            >.name {
                height: 34px;
                line-height: 34px;
                background: #409EFF;
                display: block;
                text-align: center;
                position: absolute;
                bottom: 6px;
                width: 100%;
                color: #FFFFFF;
                font-size: 14px;
            }
            >.detail {
                height: 90px;
                background: rgba(139, 26, 26, 0.7);
                display: block;
                position: absolute;
                bottom: 6px;
                width: 100%;
                div {
                    text-align: center;
                    .line {
                        display: inline-block;
                        width: 30px;
                        border-top: 1px solid #ccc;
                        vertical-align: middle;
                    }
                    p {
                        display: inline-block;
                        font-size: 14px;
                        color: #FFFFFF;
                        margin: 0 5px;
                        vertical-align: middle;
                    }
                }
                span {
                    display: block;
                    width: 96%;
                    margin: 10px auto;
                    text-indent: 40px;
                    text-align: left;
                    color: #FFFFFF;
                    font-size: 12px;
                }
            }
        }
    }

    .sim_app_system {
        display: flex;
        >.tab {
            flex: 0 200px;
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
