<template>
    <div class="vecp_system">
        <div class="tab" id="tab">
            <tab :navIndex="navInd" default-openeds="4"></tab>
        </div>
        <div class="right">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>整车发动机冷却性能数据查询系统</span>
                </div>
                <div class="button">
                    <span>车型平台</span>
                    <el-button type="primary">查询</el-button>
                    <el-button type="success">加入对比</el-button>
                </div>
                <div class="selectList" style="margin-top: 10px;">
                    <div class="sec">
                        <span>车型平台：</span>
                        <el-select>
                            <el-option>1</el-option>
                            <el-option>2</el-option>
                        </el-select>
                    </div>
                    <div class="sec">
                        <span>车型名称：</span>
                        <el-select>
                            <el-option>1</el-option>
                            <el-option>2</el-option>
                        </el-select>
                    </div>
                    <div class="sec">
                        <span>车型年份：</span>
                        <el-select>
                            <el-option>1</el-option>
                            <el-option>2</el-option>
                        </el-select>
                    </div>
                    <div class="sec">
                        <span>发动机：</span>
                        <el-select>
                            <el-option>1</el-option>
                            <el-option>2</el-option>
                        </el-select>
                    </div>
                    <div class="sec">
                        <span>变速箱：</span>
                        <el-select>
                            <el-option>1</el-option>
                            <el-option>2</el-option>
                        </el-select>
                    </div>
                    <div class="sec">
                        <span>驱动形式：</span>
                        <el-select>
                            <el-option>1</el-option>
                            <el-option>2</el-option>
                        </el-select>
                    </div>
                    <div class="sec">
                        <span>左/右驾：</span>
                        <el-select>
                            <el-option>1</el-option>
                            <el-option>2</el-option>
                        </el-select>
                    </div>
                </div>
                <el-tabs value="name1" style="margin-top: 30px;">
                    <el-tab-pane label="查询显示结果" name="name1">
                        <div class="title">
                            <span>动力冷却性能结果</span>
                        </div>
                        <div class="resultTable">
                            <div class="topTitle">
                                <div></div>
                                <div>
                                    <div class="top">
                                        <span>发动机水温</span>
                                    </div>
                                    <div>
                                        <span>Con.</span>
                                        <span>Exc.</span>
                                        <span>Ext.</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="top">
                                        <span>发动机油温</span>
                                    </div>
                                    <div>
                                        <span>Con.</span>
                                        <span>Exc.</span>
                                        <span>Ext.</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="top">
                                        <span>变速箱油温</span>
                                    </div>
                                    <div>
                                        <span>Con.</span>
                                        <span>Exc.</span>
                                        <span>Ext.</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="top">
                                        <span>风扇出风温度 </span>
                                    </div>
                                    <div>
                                        <span>Con.</span>
                                        <span>Exc.</span>
                                        <span>Ext.</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="top">
                                        <span>CAC出口温度</span>
                                    </div>
                                    <div>
                                        <span>Con.</span>
                                        <span>Exc.</span>
                                        <span>Ext.</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="top">
                                        <span>LTR水温</span>
                                    </div>
                                    <div>
                                        <span>Con.</span>
                                        <span>Exc.</span>
                                        <span>Ext.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="tableList">
                                <div>
                                    <span style="border-left: none;">试验结果</span>
                                </div>
                                <div>
                                    <span>a</span>
                                    <span>b</span>
                                    <span>c</span>
                                </div>
                                <div>
                                    <span>a</span>
                                    <span>b</span>
                                    <span>c</span>
                                </div>
                                <div>
                                    <span>a</span>
                                    <span>b</span>
                                    <span>c</span>
                                </div>
                                <div>
                                    <span>a</span>
                                    <span>b</span>
                                    <span>c</span>
                                </div>
                                <div>
                                    <span>a</span>
                                    <span>b</span>
                                    <span>c</span>
                                </div>
                                <div>
                                    <span>a</span>
                                    <span>b</span>
                                    <span>c</span>
                                </div>
                            </div>
                            <div class="tableList">
                                <div>
                                    <span style="border-left: none;">虚拟结果</span>
                                </div>
                                <div>
                                    <span>a</span>
                                    <span>b</span>
                                    <span>c</span>
                                </div>
                                <div>
                                    <span>a</span>
                                    <span>b</span>
                                    <span>c</span>
                                </div>
                                <div>
                                    <span>a</span>
                                    <span>b</span>
                                    <span>c</span>
                                </div>
                                <div>
                                    <span>a</span>
                                    <span>b</span>
                                    <span>c</span>
                                </div>
                                <div>
                                    <span>a</span>
                                    <span>b</span>
                                    <span>c</span>
                                </div>
                                <div>
                                    <span>a</span>
                                    <span>b</span>
                                    <span>c</span>
                                </div>
                            </div>
                            <div class="tableList">
                                <div>
                                    <span style="border-left: none;">VTS要求</span>
                                </div>
                                <div>
                                    <span>a</span>
                                    <span>b</span>
                                    <span>c</span>
                                </div>
                                <div>
                                    <span>a</span>
                                    <span>b</span>
                                    <span>c</span>
                                </div>
                                <div>
                                    <span>a</span>
                                    <span>b</span>
                                    <span>c</span>
                                </div>
                                <div>
                                    <span>a</span>
                                    <span>b</span>
                                    <span>c</span>
                                </div>
                                <div>
                                    <span>a</span>
                                    <span>b</span>
                                    <span>c</span>
                                </div>
                                <div>
                                    <span>a</span>
                                    <span>b</span>
                                    <span>c</span>
                                </div>
                            </div>
                        </div>
                        <div class="title" style="margin-top: 30px;">
                            <span>前端开口和进风量结果</span>
                        </div>
                        <div class="resultTableTwo">
                            <div class="twoTitle">
                                <div>Openging(cm2)</div>
                                <div>Shutter Open(CMM)</div>
                                <div>Shutter Close(CMM)</div>
                            </div>
                            <div class="twoList">
                                <div>
                                    <span>总体开口面积</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>Idle,Fan On</span>
                                    <span></span>
                                    <span>50kph,Fan On</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>90kph</span>
                                    <span></span>
                                </div>
                            </div>
                            <div class="twoList">
                                <div>
                                    <span>正投影面积</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>50kph,Fan On</span>
                                    <span></span>
                                    <span>Vmax</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>120kph</span>
                                    <span></span>
                                </div>
                            </div>
                            <div class="twoList">
                                <div>
                                    <span>风扇功率</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>Idle,Fan On</span>
                                    <span></span>
                                    <span>50kph,Fan On</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>90kph</span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div class="title" style="margin-top: 30px;">
                            <span>前端冷却模块结果</span>
                            <el-select style="width: 150px;">
                                <el-option>Condenser</el-option>
                                <el-option>CAC</el-option>
                                <el-option>Radiator</el-option>
                                <el-option>LTR</el-option>
                                <el-option>FAN</el-option>
                            </el-select>
                        </div>
                        <div class="resultTableThree">
                            <div class="threeList">
                                <div>
                                    <span>Length</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>No. of Tubes</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>Flow in Front View</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>Primary Inlet Temp</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>Air Temp</span>
                                    <span class="ELSELECT">
                                        <el-select style="height: 20px;">
                                            <el-option>20</el-option>
                                            <el-option>30</el-option>
                                            <el-option>50</el-option>
                                        </el-select>
                                    </span>
                                </div>
                            </div>
                            <div class="threeList">
                                <div>
                                    <span>Height</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>No. of Passes</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>Recirculated Flow</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>Auxiliary Inlet Temp</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>Air Density</span>
                                    <span></span>
                                </div>
                            </div>
                            <div class="threeList">
                                <div>
                                    <span>Thickness</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>No. of Raws</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>Cp</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>Du</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>Air Viscosity</span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div style="display: inline-block; vertical-align: top;margin-top: 30px;" class="resultTableFour">
                            <div class="sec">
                                <span>Fan Radius</span>
                                <span></span>
                            </div>
                            <div class="sec">
                                <span>Fan Type</span>
                                <span></span>
                            </div>
                            <div class="sec">
                                <span>Fan Coffe.A</span>
                                <span></span>
                            </div>
                            <div class="sec">
                                <span>Fan Coffe.B</span>
                                <span></span>
                            </div>
                            <div class="sec">
                                <span>Fan Coffe.C</span>
                                <span></span>
                            </div>
                            <div class="sec">
                                <span>Fan Coffe.D</span>
                                <span></span>
                            </div>
                            <div class="sec">
                                <span>Fan Coffe.E</span>
                                <span></span>
                            </div>
                            <div class="sec">
                                <span>Fan Coffe.F</span>
                                <span></span>
                            </div>
                        </div>
                        <div id="myChart" style="display: inline-block;margin-top: 20px;">

                        </div>
                        <div class="title" style="margin-top: 0px;">
                            <span>前端冷却模块CDS数据</span>
                            <el-select style="width: 150px;">
                                <el-option>Condenser</el-option>
                                <el-option>CAC</el-option>
                                <el-option>Radiator</el-option>
                                <el-option>LTR</el-option>
                                <el-option>FAN</el-option>
                            </el-select>
                        </div>
                        <div class="resultTableFive">
                            <div class="fiveTitle">
                                <span></span>
                                <span>0.027777778</span>
                                <span>0.444444444</span>
                                <span>0.061111111</span>
                                <span>0.077777778</span>
                                <span>0.024648787</span>
                            </div>
                            <div class="fiveList">
                                <span>0.05</span>
                                <span>0.444444444</span>
                                <span>0.061111111</span>
                                <span>0.077777778</span>
                                <span>0.024648787</span>
                                <span>0.024648787</span>
                            </div>
                            <div class="fiveList">
                                <span>0.05</span>
                                <span>0.444444444</span>
                                <span>0.061111111</span>
                                <span>0.077777778</span>
                                <span>0.024648787</span>
                                <span>0.024648787</span>
                            </div>
                            <div class="fiveList">
                                <span>0.05</span>
                                <span>0.444444444</span>
                                <span>0.061111111</span>
                                <span>0.077777778</span>
                                <span>0.024648787</span>
                                <span>0.024648787</span>
                            </div>
                            <div class="fiveList">
                                <span>0.05</span>
                                <span>0.444444444</span>
                                <span>0.061111111</span>
                                <span>0.077777778</span>
                                <span>0.024648787</span>
                                <span>0.024648787</span>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="对比显示结果" name="name2">
                        <div style="background: #68ab82;line-height: 38px;color: #000;display: block;">
                            <span style="width: 130px;display: inline-block;text-align: left;text-indent: 2px;border: none;text-align: center;">对比项</span>
                            <span style="width: 130px;display: inline-block;border: none;text-align: center;">conpareOne</span>
                            <span style="width: 130px;display: inline-block;border: none;text-align: center;">conpareTwo</span>
                        </div>
                        <div class="title">
                            <img v-show="dllqxnShow" @click="dllqxnShow=false" src="../../../static/reduce2.png" width="15px" style="cursor: pointer;position: relative;top: 2px;">
                            <img v-show="!dllqxnShow" @click="dllqxnShow=true" src="../../../static/plus2.png" width="15px" style="cursor: pointer;position: relative;top: 2px;">
                            <span>动力冷却性能结果</span>
                        </div>
                        <div class="compareTableOne" v-if="dllqxnShow">
                            <div>
                                <span style="line-height: 34px;display: block; width: 100%; background:#c1a075;text-indent: 2px;">发动机水温</span>
                                <div>
                                    <span style="line-height: 25px;display: block;text-indent: 1em; width: 100%; background:#d4d4aa;">Con.</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>试验结果</span>
                                    <span>虚拟结果</span>
                                    <span>VTS要求</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div>
                                    <span style="line-height: 25px;display: block;text-indent: 1em; width: 100%; background:#d4d4aa;">Exc.</span>
                                </div>
                                <div class="compareOneExc">
                                    <span>试验结果</span>
                                    <span>虚拟结果</span>
                                    <span>VTS要求</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div>
                                    <span style="line-height: 25px;display: block;text-indent: 1em; width: 100%; background:#d4d4aa;">Ext.</span>
                                </div>
                                <div class="compareOneExt">
                                    <span>试验结果</span>
                                    <span>虚拟结果</span>
                                    <span>VTS要求</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                            </div>
                            <div>
                                <span style="line-height: 34px;display: block; width: 100%; background:#c1a075;text-indent: 2px;">发动机油温</span>
                                <div>
                                    <span style="line-height: 25px;display: block;text-indent: 1em; width: 100%; background:#d4d4aa;">Con.</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>试验结果</span>
                                    <span>虚拟结果</span>
                                    <span>VTS要求</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div>
                                    <span style="line-height: 25px;display: block;text-indent: 1em; width: 100%; background:#d4d4aa;">Exc.</span>
                                </div>
                                <div class="compareOneExc">
                                    <span>试验结果</span>
                                    <span>虚拟结果</span>
                                    <span>VTS要求</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div>
                                    <span style="line-height: 25px;display: block;text-indent: 1em; width: 100%; background:#d4d4aa;">Ext.</span>
                                </div>
                                <div class="compareOneExt">
                                    <span>试验结果</span>
                                    <span>虚拟结果</span>
                                    <span>VTS要求</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                            </div>
                            <div>
                                <span style="line-height: 34px;display: block; width: 100%; background:#c1a075;text-indent: 2px;">变速箱油温</span>
                                <div>
                                    <span style="line-height: 25px;display: block;text-indent: 1em; width: 100%; background:#d4d4aa;">Con.</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>试验结果</span>
                                    <span>虚拟结果</span>
                                    <span>VTS要求</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div>
                                    <span style="line-height: 25px;display: block;text-indent: 1em; width: 100%; background:#d4d4aa;">Exc.</span>
                                </div>
                                <div class="compareOneExc">
                                    <span>试验结果</span>
                                    <span>虚拟结果</span>
                                    <span>VTS要求</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div>
                                    <span style="line-height: 25px;display: block;text-indent: 1em; width: 100%; background:#d4d4aa;">Ext.</span>
                                </div>
                                <div class="compareOneExt">
                                    <span>试验结果</span>
                                    <span>虚拟结果</span>
                                    <span>VTS要求</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                            </div>
                            <div>
                                <span style="line-height: 34px;display: block; width: 100%; background:#c1a075;text-indent: 2px;">风扇出风温度</span>
                                <div>
                                    <span style="line-height: 25px;display: block;text-indent: 1em; width: 100%; background:#d4d4aa;">Con.</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>试验结果</span>
                                    <span>虚拟结果</span>
                                    <span>VTS要求</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div>
                                    <span style="line-height: 25px;display: block;text-indent: 1em; width: 100%; background:#d4d4aa;">Exc.</span>
                                </div>
                                <div class="compareOneExc">
                                    <span>试验结果</span>
                                    <span>虚拟结果</span>
                                    <span>VTS要求</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div>
                                    <span style="line-height: 25px;display: block;text-indent: 1em; width: 100%; background:#d4d4aa;">Ext.</span>
                                </div>
                                <div class="compareOneExt">
                                    <span>试验结果</span>
                                    <span>虚拟结果</span>
                                    <span>VTS要求</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                            </div>
                            <div>
                                <span style="line-height: 34px;display: block; width: 100%; background:#c1a075;text-indent: 2px;">CAC出口温度</span>
                                <div>
                                    <span style="line-height: 25px;display: block;text-indent: 1em; width: 100%; background:#d4d4aa;">Con.</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>试验结果</span>
                                    <span>虚拟结果</span>
                                    <span>VTS要求</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div>
                                    <span style="line-height: 25px;display: block;text-indent: 1em; width: 100%; background:#d4d4aa;">Exc.</span>
                                </div>
                                <div class="compareOneExc">
                                    <span>试验结果</span>
                                    <span>虚拟结果</span>
                                    <span>VTS要求</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div>
                                    <span style="line-height: 25px;display: block;text-indent: 1em; width: 100%; background:#d4d4aa;">Ext.</span>
                                </div>
                                <div class="compareOneExt">
                                    <span>试验结果</span>
                                    <span>虚拟结果</span>
                                    <span>VTS要求</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                            </div>
                            <div>
                                <span style="line-height: 34px;display: block; width: 100%; background:#c1a075;text-indent: 2px;">LTR水温</span>
                                <div>
                                    <span style="line-height: 25px;display: block;text-indent: 1em; width: 100%; background:#d4d4aa;">Con.</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>试验结果</span>
                                    <span>虚拟结果</span>
                                    <span>VTS要求</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div>
                                    <span style="line-height: 25px;display: block;text-indent: 1em; width: 100%; background:#d4d4aa;">Exc.</span>
                                </div>
                                <div class="compareOneExc">
                                    <span>试验结果</span>
                                    <span>虚拟结果</span>
                                    <span>VTS要求</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div>
                                    <span style="line-height: 25px;display: block;text-indent: 1em; width: 100%; background:#d4d4aa;">Ext.</span>
                                </div>
                                <div class="compareOneExt">
                                    <span>试验结果</span>
                                    <span>虚拟结果</span>
                                    <span>VTS要求</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                                <div class="compareOneCon">
                                    <span>aa</span>
                                    <span>bb</span>
                                    <span>cc</span>
                                </div>
                            </div>
                        </div>
                        <div class="title">
                            <img v-show="qdkkjflShow" @click="qdkkjflShow=false" src="../../../static/reduce2.png" width="15px" style="cursor: pointer;position: relative;top: 2px;">
                            <img v-show="!qdkkjflShow" @click="qdkkjflShow=true" src="../../../static/plus2.png" width="15px" style="cursor: pointer;position: relative;top: 2px;">
                            <span>前端开口和进风量结果</span>
                        </div>
                        <div class="compareTableTwo" v-if="qdkkjflShow">
                            <div class="compareTableTwoList">
                                <span>Openging(cm2)</span>
                                <div>
                                    <span>总开口面积</span>
                                    <span>正投影面积</span>
                                    <span>风扇功率</span>
                                </div>
                                <div>
                                    <span>uips</span>
                                    <span>uips</span>
                                    <span>uips</span>
                                </div>
                                <div>
                                    <span>uips</span>
                                    <span>uips</span>
                                    <span>uips</span>
                                </div>
                            </div>
                            <div class="compareTableTwoList">
                                <span>Shutter oPEN(CMM)</span>
                                <div>
                                    <span>Idle,Fan On</span>
                                    <span>50kph,Fan On</span>
                                    <span>60kph,Fan On</span>
                                    <span>155kph,Fan On</span>
                                    <span>Vmax</span>
                                </div>
                                <div>
                                    <span>uips</span>
                                    <span>usfsfips</span>
                                    <span>ddsaf</span>
                                    <span>wer</span>
                                    <span>ddsutysaf</span>
                                </div>
                                <div>
                                    <span>uips</span>
                                    <span>usfsfips</span>
                                    <span>ddsaf</span>
                                    <span>wer</span>
                                    <span>ddsutysaf</span>
                                </div>
                            </div>
                            <div class="compareTableTwoList">
                                <span>Shutter Close(CMM)</span>
                                <div>
                                    <span>90kph</span>
                                    <span>120kph</span>
                                    <span>Vmax</span>
                                </div>
                                <div>
                                    <span>ddsaf</span>
                                    <span>wer</span>
                                    <span>ddsutysaf</span>
                                </div>
                                <div>
                                    <span>ddsaf</span>
                                    <span>wer</span>
                                    <span>ddsutysaf</span>
                                </div>
                            </div>
                        </div>
                        <div class="title">
                            <img v-show="qdlqmkjgShow" @click="qdlqmkjgShow=false" src="../../../static/reduce2.png" width="15px" style="cursor: pointer;position: relative;top: 2px;">
                            <img v-show="!qdlqmkjgShow" @click="qdlqmkjgShow=true" src="../../../static/plus2.png" width="15px" style="cursor: pointer;position: relative;top: 2px;">
                            <span>前端冷却模块结果</span>
                        </div>
                        <div class="compareTableThree" v-if="qdlqmkjgShow" v-for="item in textar">
                            <div style="display: block;">
                                <span style="line-height: 34px;display: block; width: 100%; background:#c1a075;text-indent: 2px;">{{item}}</span>
                            </div>
                            <div>
                                <span>Length</span>
                                <span>Height</span>
                                <span>Thickness</span>
                                <span>No.of Tubes</span>
                                <span>No.of Passes</span>
                                <span>No.of Raws</span>
                                <span>Flow in Front View</span>
                                <span>Recirculated Flow</span>
                                <span>Primary Inlet Temp</span>
                                <span>Auxiliary</span>
                                <span>Cp</span>
                                <span>Du</span>
                                <span>Air Temp
                                    <el-select style="width: 70px;" placeholder="">
                                        <el-option>20</el-option>
                                        <el-option>30</el-option>
                                        <el-option>50</el-option>
                                    </el-select>
                                </span>
                                <span>Air Density</span>
                                <span>Air Viscosity</span>
                            </div>
                            <div>
                                <span>sf</span>
                                <span>sfs</span>
                                <span>rtr</span>
                                <span>Nubes</span>
                                <span>Nsses</span>
                                <span>Noaws</span>
                                <span>Floiew</span>
                                <span>Recirculatow</span>
                                <span>Cp</span>
                                <span>imaremp</span>
                                <span>xiliary</span>
                                <span>uiyu</span>
                                <span>tyuwmp</span>
                                <span>sfnsity</span>
                                <span>rtebcosity</span>
                            </div>
                            <div>
                                <span>sf</span>
                                <span>sfs</span>
                                <span>rtr</span>
                                <span>Nubes</span>
                                <span>Nsses</span>
                                <span>Noaws</span>
                                <span>Floiew</span>
                                <span>Recirculatow</span>
                                <span>Cp</span>
                                <span>imaremp</span>
                                <span>xiliary</span>
                                <span>uiyu</span>
                                <span>tyuwmp</span>
                                <span>sfnsity</span>
                                <span>rtebcosity</span>
                            </div>
                        </div>
                        <div class="compareTableThree" v-if="qdlqmkjgShow">
                            <div style="display: block;">
                                <span style="line-height: 34px;display: block; width: 100%; background:#c1a075;text-indent: 2px;">FAN</span>
                            </div>
                            <div>
                                <span>Fan Radius</span>
                                <span>Fan Type</span>
                                <span>Fan Coffe.A</span>
                                <span>Fan Coffe.B</span>
                                <span>Fan Coffe.C</span>
                                <span>Fan Coffe.D</span>
                                <span>Fan Coffe.E</span>
                                <span>Fan Coffe.F</span>
                            </div>
                            <div>
                                <span>adius</span>
                                <span>ype</span>
                                <span>Faffe.A</span>
                                <span>SRFWEoffe.B</span>
                                <span>CBoffe.C</span>
                                <span>FWERffe.D</span>
                                <span>DFGe.E</span>
                                <span>ERTffe.F</span>
                            </div>
                            <div>
                                <span>sdfdius</span>
                                <span>qweType</span>
                                <span>sdfdfe.A</span>
                                <span>Fsfoffe.B</span>
                                <span>weroffe.C</span>
                                <span>Fan Coffe.D</span>
                                <span>hrtoffe.E</span>
                                <span>yuiyfe.F</span>
                            </div>
                            <i-button @click="drawLineTwo" style="display: block;margin-top: 10px;" type="primary">查看曲线图</i-button>
                            <div style="display: block;width: 600px;height:400px;" id="myChartTwo">
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-card>
        </div>
    </div>
</template>

<script>
    import tab from '@/base/tab'
    export default {
        components: {
            tab
        },
        data() {
            return {
                textar: ['Condenser', 'CAC', 'Radiator', 'LTR'],
                navInd: '1',
                dllqxnShow: true,
                qdkkjflShow: true,
                qdlqmkjgShow: true
            }
        },
        mounted() {
            document.getElementById("tab").style.minHeight = window.innerHeight + 'px'
            this.drawLine()
        },
        methods: {
            drawLine() {
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                myChart.setOption({
                    xAxis: {
                        type: 'category',
                        data: [],
                        name: 'm/s'
                    },
                    yAxis: {
                        type: 'value',
                        name: "压力(Pa)"
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        itemStyle: {
                            normal: {
                                color: "rgb(64, 158, 255)",
                            }
                        },
                    }],
                    toolbox: {
                        feature: {
                            dataView: {
                                show: true,
                                readOnly: false
                            },
                            magicType: {
                                show: true,
                                type: ['line', 'bar']
                            },
                            restore: {
                                show: true
                            },
                            saveAsImage: {
                                show: true
                            }
                        }
                    },
                })
            },
            drawLineTwo() {
                let myChart = this.$echarts.init(document.getElementById('myChartTwo'))
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['one', 'two']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            dataView: {
                                show: true,
                                readOnly: false
                            },
                            magicType: {
                                show: true,
                                type: ['line', 'bar']
                            },
                            restore: {
                                show: true
                            },
                            saveAsImage: {
                                show: true
                            }
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: [' ', ' ', ' ', ' ', ' ', ' ', ' ']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                            name: 'one',
                            type: 'line',
                            smooth: true,
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: 'two',
                            type: 'line',
                            smooth: true,
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        }
                    ]
                })

            }
        }

    }
</script>

<style scoped="scoped" lang="scss">
    #myChart {
        width: 610px;
        height: 400px;
        margin: 0 auto;
    }

    .vecp_system {
        display: flex;
        .el-button {
            padding: 5px;
        }
        .ivu-tabs {
            margin-top: 30px;
        }
        .tab {
            flex: 0 230px;
            background: rgb(44, 47, 62);
        }
        .right {
            flex: 1;
            padding: 20px;
            /deep/ .el-input__inner {
                height: 26px;
                line-height: 26px;
            }
            /deep/ .el-card__header {
                background: #eff0dc;
                padding: 14px 20px !important;
            }
            /deep/ .el-input__icon {
                line-height: 26px;
            }
            .compareTableThree {
                >div {
                    display: inline-block;
                    span {
                        width: 130px;
                        display: block;
                        text-align: left;
                        line-height: 22px;
                        border-right: 1px solid #E4E4E4;
                        border-bottom: 1px solid #E4E4E4;
                        text-indent: 2px;
                    }
                }
            }
            .compareTableTwo {
                .compareTableTwoList {
                    >span {
                        display: block;
                        line-height: 25px;
                        background: #d4d4aa;
                        text-indent: 1em;
                    }
                    >div {
                        display: inline-block;
                        span {
                            width: 130px;
                            display: block;
                            text-align: left;
                            line-height: 22px;
                            border-right: 1px solid #E4E4E4;
                            border-bottom: 1px solid #E4E4E4;
                            text-indent: 2px;
                        }
                    }
                }
            }
            .button {
                padding-bottom: 5px;
                border-bottom: 1px solid #eff0dc;
                span {
                    margin-right: 5px;
                    position: relative;
                    top: 5px;
                }
            }
            .compareTableOne {
                .compareOneCon,
                .compareOneExc,
                .compareOneExt {
                    display: inline-block;
                    span {
                        display: block;
                        border-right: 1px solid #E4E4E4;
                        border-bottom: 1px solid #E4E4E4;
                        width: 130px;
                        line-height: 22px;
                        text-align: center;
                    }
                }
            }
            .selectList {
                display: inline-block;
                .sec {
                    display: inline-block;
                    margin-top: 10px;
                    span {
                        display: inline-block;
                        width: 70px;
                        text-align: right;
                    }
                }
            }
            .compare {
                display: inline-block;
                vertical-align: top;
                margin-top: 10px;
                margin-left: 50px;
                .ivu-card {
                    width: 300px;
                    margin: 0 auto;
                    /deep/ .ivu-card-bordered {
                        border-color: #999a86;
                    }
                }
            }
            .title {
                margin: 5px 0;
                span {
                    color: rgb(112, 48, 160);
                    font-size: 16px;
                }
            }
            .resultTableFive {
                border: 1px solid #000000;
                >div {
                    line-height: 30px;
                    display: flex;
                    span {
                        text-align: center;
                        flex: 1;
                        border-right: 1px solid #E4E4E4;
                        border-bottom: 1px solid #E4E4E4;
                        &:last-child {
                            border-right: none;
                        }
                    }
                }
            }
            .resultTableFour {
                border: 1px solid #000000;
                margin-top: 20px;
                .sec {
                    width: 200px;
                    display: flex;
                    span {
                        flex: 1;
                        width: 100px;
                        line-height: 30px;
                        height: 30px;
                        border-bottom: 1px solid #E4E4E4;
                        border-right: 1px solid #E4E4E4;
                        text-align: center;
                        &:last-child {
                            border-right: none;
                        }
                    }
                }
            }
            .resultTableThree {
                border: 1px solid #000000;
                .threeList {
                    display: flex;
                    div {
                        flex: 1;
                        display: flex;
                        line-height: 30px;
                        border-bottom: 1px solid #E4E4E4;
                        /*&:last-child {
							border-bottom: none;
						}*/
                        span {
                            flex: 1;
                            border-right: 1px solid #E4E4E4;
                            text-align: center;
                        }
                    }
                }
            }
            .resultTableTwo {
                border: 1px solid #000000;
                .twoTitle,
                .twoList {
                    line-height: 30px;
                    display: flex;
                    div {
                        flex: 1;
                        text-align: center;
                        border-right: 1px solid #E4E4E4;
                        &:nth-child(2) {
                            flex: 2;
                        }
                        &:last-child {
                            border-right: none;
                        }
                    }
                }
                .twoList {
                    div {
                        display: flex;
                        span {
                            flex: 1;
                            border-right: 1px solid #E4E4E4;
                            border-top: 1px solid #E4E4E4;
                            &:last-child {
                                border-right: none;
                            }
                        }
                    }
                }
            }
            .resultTable {
                border: 1px solid #000000;
                .topTitle {
                    display: flex;
                    div {
                        flex: 1;
                        &:first-child {
                            flex: 0 60px;
                        }
                        >div {
                            display: flex;
                            border-left: 1px solid #E4E4E4;
                            line-height: 30px;
                            span {
                                flex: 1;
                                text-align: center;
                                border-right: 1px solid #E4E4E4;
                                &:last-child {
                                    border-right: none;
                                }
                            }
                        }
                        .top {
                            border-bottom: 1px solid #E4E4E4;
                            line-height: 30px;
                        }
                    }
                }
                .tableList {
                    display: flex;
                    border-top: 1px solid #E4E4E4;
                    >div {
                        flex: 1;
                        display: flex;
                        line-height: 30px;
                        &:first-child {
                            flex: 0 60px;
                        }
                        >span {
                            flex: 1;
                            text-align: center;
                            border-left: 1px solid #E4E4E4;
                        }
                    }
                }
            }
        }
    }
</style>
