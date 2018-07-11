<template>
    <div class="sim_task_man">
        <div class="tab" id="tab">
            <tab :navIndex="navInd"></tab>
        </div>
        <div class="card">
            <Card class="box-card">
                <div slot="header" class="clearfix">
                    <span style="font-size: 14px;">任务列表</span>
                </div>
                <div class="button" style="display: flex;">
                    <div style=" flex: 1;">
                        <i-button type="primary">复制</i-button>
                        <i-button type="info">对比</i-button>
                        <i-button type="warning">删除</i-button>
                        <i-button type="success">停止</i-button>
                        <i-button type="error">刷新</i-button>
                    </div>
                    <div style="flex: 0 220px;">
                        <Input placeholder="请输入内容">
                        <Button slot="append" icon="ios-search"></Button>
                        </Input>
                    </div>
                </div>
                <Table border :columns="columns7" :data="tableData3" style="margin-top: 30px;"></Table>
                <div class="block" style="text-align: left;margin-top: 20px">
                    <Page :total="100" show-sizer></Page>
                </div>
            </Card>

        </div>

    </div>
</template>

<script>
    import tab from '@/base/tab'
    export default {
        data() {
            return {
                currentPage4: 1,
                columns7: [{
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'id',
                        key: 'id',
                        width: 40,
                    },
                    {
                        title: 'name',
                        key: 'name',
                        width: 260,
                    },

                    {
                        title: '所属模块',
                        key: 'ssmk'
                    }, {
                        title: '任务状态',
                        key: 'rwzt'
                    },
                    {
                        title: '计算方式',
                        key: 'jsfs',
                    },
                    {
                        title: '创建人',
                        key: 'cjr'
                    },
                    {
                        title: '创建时间',
                        key: 'okDate'
                    }, {
                        title: '完成时间',
                        key: 'okDate'
                    },
                    {
                        title: '计算结果',
                        key: 'jsjg',
                        width: 60,
						render: (h, params) => {
							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'small'
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											// this.show(params.index)
										}
									}
								}, `查看`)
							]);
						}
                    }, {
                        title: 'Case包',
                        key: 'case',
                        width: 60,
						render: (h, params) => {
							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'small'
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											// this.show(params.index)
										}
									}
								}, `下载`)
							]);
						}
                    },
                    {
                        title: 'log文件',
                        key: 'log',
                        width: 60,
						
                    },
                ],
                tableData3: [{
                        createDate: '2016-05-03',
                        okDate: '2016-05-03',
                        name: 'E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Exhaust',
                        id: ' 234',
                        ssmk: '底盘排气系统',
                        rwzt: '已提交',
                        jsfs: '服务器',
                        cjr: '排气系',
                        jsjg: '排气系',
                        xzbg: '排气系',
                        caseb: '排气系',
                        gcwj: '排气系',
                        log: '排气系',
                    },
                    {
                        createDate: '2016-05-03',
                        okDate: '2016-05-03',
                        name: 'E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Exhaust',
                        id: ' 234',
                        ssmk: '底盘排气系统',
                        rwzt: '已提交',
                        jsfs: '服务器',
                        cjr: '排气系',
                        jsjg: '排气系',
                        xzbg: '排气系',
                        caseb: '排气系',
                        gcwj: '排气系',
                    },
                    {
                        createDate: '2016-05-03',
                        okDate: '2016-05-03',
                        name: 'E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Exhaust',
                        id: ' 234',
                        ssmk: '底盘排气系统',
                        rwzt: '已提交',
                        jsfs: '服务器',
                        cjr: '排气系',
                        jsjg: '排气系',
                        xzbg: '排气系',
                        caseb: '排气系',
                        gcwj: '排气系',
                    },
                    {
                        createDate: '2016-05-03',
                        okDate: '2016-05-03',
                        name: 'E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Exhaust',
                        id: ' 234',
                        ssmk: '底盘排气系统',
                        rwzt: '已提交',
                        jsfs: '服务器',
                        cjr: '排气系',
                        jsjg: '排气系',
                        xzbg: '排气系',
                        caseb: '排气系',
                        gcwj: '排气系',
                    },
                    {
                        createDate: '2016-05-03',
                        okDate: '2016-05-03',
                        name: 'E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Exhaust',
                        id: ' 234',
                        ssmk: '底盘排气系统',
                        rwzt: '已提交',
                        jsfs: '服务器',
                        cjr: '排气系',
                        jsjg: '排气系',
                        xzbg: '排气系',
                        caseb: '排气系',
                        gcwj: '排气系',
                    },
                    {
                        createDate: '2016-05-03',
                        okDate: '2016-05-03',
                        name: 'E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Exhaust',
                        id: ' 234',
                        ssmk: '底盘排气系统',
                        rwzt: '已提交',
                        jsfs: '服务器',
                        cjr: '排气系',
                        jsjg: '排气系',
                        xzbg: '排气系',
                        caseb: '排气系',
                        gcwj: '排气系',
                    },
                    {
                        createDate: '2016-05-03',
                        okDate: '2016-05-03',
                        name: 'E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Exhaust',
                        id: ' 234',
                        ssmk: '底盘排气系统',
                        rwzt: '已提交',
                        jsfs: '服务器',
                        cjr: '排气系',
                        jsjg: '排气系',
                        xzbg: '排气系',
                        caseb: '排气系',
                        gcwj: '排气系',
                    },
                    {
                        createDate: '2016-05-03',
                        okDate: '2016-05-03',
                        name: 'E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Exhaust',
                        id: ' 234',
                        ssmk: '底盘排气系统',
                        rwzt: '已提交',
                        jsfs: '服务器',
                        cjr: '排气系',
                        jsjg: '排气系',
                        xzbg: '排气系',
                        caseb: '排气系',
                        gcwj: '排气系',
                    },
                    {
                        createDate: '2016-05-03',
                        okDate: '2016-05-03',
                        name: 'E2-2_E2LB-2_MY16_L2B_CVT_AWD_LHD_DSI_Exhaust',
                        id: ' 234',
                        ssmk: '底盘排气系统',
                        rwzt: '已提交',
                        jsfs: '服务器',
                        cjr: '排气系',
                        jsjg: '排气系',
                        xzbg: '排气系',
                        caseb: '排气系',
                        gcwj: '排气系',
                    }
                ],
                multipleSelection: []
            }
        },
        components: {
            tab
        },
        created() {
            this.navInd = "3"
        },
        mounted() {
            document.getElementById("tab").style.minHeight = window.innerHeight + 'px'
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    }
</script>

<style lang="scss" scoped="scoped">
    /deep/ .ivu-card-head {
        background: #eff0dc !important;
        padding: 14px 20px !important;
    }

    .sim_task_man {
        display: flex;
        /deep/ .ivu-table-cell {
            padding-left: 5px;
            padding-right: 5px;
        }
        >.tab {
            flex: 0 200px;
            background: rgb(44, 47, 62);
        }
        >.card {
            flex: 1;
            padding: 20px;
        }
    }
</style>
