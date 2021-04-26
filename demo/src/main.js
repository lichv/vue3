import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import '/@modules/element-plus/lib/theme-chalk/index.css'


import * as echarts from 'echarts'


const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000, })


import ElAsiderMenu from './components/AsiderMenu.vue'


import ElTopMenu from './components/TopMenu.vue'
import ElDoctorCard from './components/DoctorCard.vue'
import ElHospitalCard from './components/HospitalCard.vue'
import ElOrgnizationCard from './components/OrgnizationCard.vue'
import ElAreaSelect from './components/AreaSelect.vue'
import ElUserNotice from './components/UserNotice.vue'
import ElChart from './components/Chart.vue'
import ElTreeData from './components/TreeData.vue'
import ElOrderDistribution from './components/OrderDistribution.vue'
import ElOrderFamily from './components/OrderFamily.vue'
import ElOrderApplication from './components/OrderApplication.vue'
import ElUserStatistics from './components/UserStatistics.vue'
import ElUserForm from './components/UserForm.vue'
import ElRelativeForm from './components/RelativeForm.vue'
import ElSampleForm from './components/SampleForm.vue'

import ElChecklistApplication from './components/ChecklistApplication.vue'
import ElChecklistDistribution from './components/ChecklistDistribution.vue'
import ElChecklistNormal from './components/ChecklistNormal.vue'

import ElPaymentApplication from './components/PaymentApplication.vue'
import ElPaymentDistribution from './components/PaymentDistribution.vue'
import ElPaymentNormal from './components/PaymentNormal.vue'

const components = [
	ElAsiderMenu,
	ElTopMenu,
	ElAsiderMenu,
    ElDoctorCard,
    ElAreaSelect,
    ElHospitalCard,
    ElOrgnizationCard,
    ElUserNotice,
    ElChart,
    ElTreeData,
    ElOrderDistribution,
    ElOrderFamily,
    ElOrderApplication,
    ElUserStatistics,
    ElUserForm,
    ElRelativeForm,
    ElSampleForm,
    ElChecklistApplication,
    ElChecklistDistribution,
    ElChecklistNormal,
    ElPaymentDistribution,
    ElPaymentApplication,
    ElPaymentNormal,
];

components.forEach(component => {
  app.component(component.name, component)
})

app.use(router)
app.use(store)

app.config.globalProperties.$echarts = echarts

app.mount('#app')