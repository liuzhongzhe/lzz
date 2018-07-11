import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import sim_app_system from '@/components/sim_app_system/sim_app_system'
import personal_work from '@/components/personal_work/personal_work'
import user_set from '@/components/user_manage/user_set'
import role_set from '@/components/user_manage/role_set'
import sim_task_man from '@/components/sim_task_man/sim_task_man'
import plat_manage from '@/components/plat_manage/plat_manage'
import calculat_manage from '@/components/calculat_manage/calculat_manage'
import user_manage from '@/components/user_manage/user_manage'
import sim_material_lib from '@/components/sim_material_lib/sim_material_lib'
import part_temperature from '@/components/part_temperature/part_temperature'
import carpet_temperature from '@/components/carpet_temperature/carpet_temperature'
import natural_risk from '@/components/natural_risk/natural_risk'
import vecp_system from '@/components/vecp_system/vecp_system'
import paiqiStep from '@/components/paiqiStep/paiqiStep'
import paiqiStepOne from '@/components/paiqiStep/paiqiStepOne'
import paiqiStepTwo from '@/components/paiqiStep/paiqiStepTwo'
import paiqiStepThree from '@/components/paiqiStep/paiqiStepThree'
import paiqiStepFour from '@/components/paiqiStep/paiqiStepFour'
import paiqiStepFive from '@/components/paiqiStep/paiqiStepFive'
import paiqiStepResult from '@/components/paiqiStep/paiqiStepResult'
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'login',
			component: login
		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/paiqiStep',
			name: 'paiqiStep',
			component: paiqiStep,
			children: [
				{
					path: '/',
					component: paiqiStepOne
				},
				{
					path: 'One',
					component: paiqiStepOne
				},
				{
					path: 'Two',
					component: paiqiStepTwo
				},
				{
					path: 'Three',
					component: paiqiStepThree
				},
				{
					path: 'Four',
					component: paiqiStepFour
				},
				{
					path: 'Five',
					component: paiqiStepFive
				},
				{
					path: 'Result',
					component: paiqiStepResult
				}
			]
		},
		{
			path: '/sim_app_system',
			name: 'sim_app_system',
			component: sim_app_system,
		},
		{
			path: '/sim_material_lib',
			name: 'sim_material_lib',
			component: sim_material_lib,
		},
		{
			path: '/personal_work',
			name: 'personal_work',
			component: personal_work,
		},
		{
			path: '/sim_task_man',
			name: 'sim_task_man',
			component: sim_task_man,
		},
		{
			path: '/plat_manage',
			name: 'plat_manage',
			component: plat_manage,
		},
		{
			path: '/calculat_manage',
			name: 'calculat_manage',
			component: calculat_manage,
		},
		{
			path: '/user_set',
			name: 'user_set',
			component: user_set,
		},
		{
			path: '/user_manage',
			name: 'user_manage',
			component: user_manage,
		},
		{
			path: '/role_set',
			name: 'role_set',
			component: role_set,
		},
		{
			path: '/carpet_temperature',
			name: 'carpet_temperature',
			component: carpet_temperature,
		},
		{
			path: '/part_temperature',
			name: 'part_temperature',
			component: part_temperature,
		},
		{
			path: '/natural_risk',
			name: 'natural_risk',
			component: natural_risk,
		},
		{
			path: '/vecp_system',
			name: 'vecp_system',
			component: vecp_system,
		},
	]
})