<template>
    <div class="tab_wrapper">
        <div class="tab" id="tab">
            <div class="logo" style="width: 141px;height: 50px;margin: 0 auto;margin-bottom: 20px;">
                <img src="../../static/logo.png" />
            </div>
            <Col>
            <Menu :active-name="navIndex" @on-select="selectTab" :open-names="navIndex">
                <MenuItem name="1">
                <Icon type="ios-briefcase"></Icon>
                个人工作台
                </MenuItem>
                <MenuItem name="2">
                <Icon type="ios-people"></Icon>
                仿真应用系统
                </MenuItem>
                <MenuItem name="3">
                <Icon type="navicon-round"></Icon>
                仿真任务管理
                </MenuItem>
                <Submenu name="4">
                    <template slot="title">
                        <Icon type="android-apps"></Icon>
                        仿真资源管理
                    </template>
                    <MenuItem name="4-1">车型平台管理</MenuItem>
                    <MenuItem name="4-2">仿真材料库</MenuItem>
                    <MenuItem name="4-3">计算工况管理</MenuItem>
                </Submenu>
                <MenuItem name="5">
                <Icon type="stats-bars"></Icon>
                仿真数据管理
                </MenuItem>
                <MenuItem name="6">
                <Icon type="ios-pulse-strong"></Icon>
                高性能计算
                </MenuItem>
                <Submenu name="7">
                    <template slot="title">
                        <Icon type="gear-a"></Icon>
                        系统管理
                    </template>
                    <MenuItem name="7-1">用户管理</MenuItem>
                    <MenuItem name="7-2">角色设置</MenuItem>
                </Submenu>
            </Menu>
            </Col>
            <div class="user">
                <img src="../assets/logo.png" @click="viewUserInfo" />
                <p>UserName</p>
                <div v-show="userSetShow" style="transition: .5s;">
                    <p @click="userSet">用户设置</p>
                    <p @click="exitLogon">退出登录</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userInfoShow: true,
                userSetShow: false
            }
        },
        props: {
            navIndex: {
                type: String
            }
        },
        methods: {
            viewUserInfo() {
                this.userSetShow = true
                setTimeout(() => {
                    this.userSetShow = false
                }, 2000)
            },
            exitLogon() {
                this.$router.push('/login');
            },
            userSet() {
                this.$router.push('/user_set');
            },
            selectTab(key) {
                switch (key) {
                    case '1':
                        this.$router.push('/personal_work');
                        break;
                    case '2':
                        this.$router.push('/sim_app_system');
                        break;
                    case '3':
                        this.$router.push('/sim_task_man');
                        break;
                    case '4-1':
                        this.$router.push('/plat_manage');
                        break;
                    case '4-2':
                        this.$router.push('/sim_material_lib');
                        break;
                    case '4-3':
                        this.$router.push('/calculat_manage');
                        break;
                    case '7-1':
                        this.$router.push('/user_manage');
                        break;
                    case '7-2':
                        this.$router.push('/role_set');
                        break;

                }
            },
        }
    }
</script>

<style lang="scss" scoped="scoped">
    .tab_wrapper {
        width: 230px;
        background: rgb(44, 47, 62);
        font-size: 14px;
        .ivu-menu-light {
            background: rgb(44, 47, 62);
            width: 230px !important;
        }
        .ivu-menu-vertical.ivu-menu-light:after {
            display: none !important;
        }
        /deep/ .ivu-menu-vertical .ivu-menu-submenu-title:hover {
            background: rgb(167, 35, 46) !important;
            color: #FFFFFF !important;
        }
        /deep/ .ivu-menu-vertical .ivu-menu-item:hover,
        .ivu-menu-vertical .ivu-menu-submenu-title:hover,.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
            background: rgb(167, 35, 46)!important;
            color: #FFFFFF !important;
			border-right: none;
        }
        .ivu-menu,.ivu-menu-light.ivu-menu-vertical .ivu-menu-item{
            color: #7A7E8A;
        }
        >.tab {
            >.logo {
                padding: 40px 0;
                margin: 0 auto;
                span {
                    display: block;
                    text-align: center;
                    border-top: 1px solid #FFFFFF;
                    color: #ffffff;
                    font-size: 14px;
                    height: 34px;
                    line-height: 34px;
                }
            }
            >.user {
                position: fixed;
                left: 89px;
                bottom: 20px;
                text-align: center;
                margin-top: 50px;
                color: #FFFFFF;
                img {
                    width: 39px;
                    height: 39px;
                    border-radius: 50%;
                    padding: 5px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    cursor: pointer;
                }
                >p {
                    font-size: 12px;
                    color: rgb(122, 126, 138);
                    margin-top: 2px;
                }
                div {
                    margin-top: 10px;
                    p {
                        cursor: pointer;
                        line-height: 25px;
                    }
                }
            }
        }
    }
</style>
