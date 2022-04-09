import TMMainPage from '@/components/template/taskmanagement/TMMainPage.vue'
import KbnTaskDetailModal from '@/components/template/taskmanagement/KbnTaskDetailModal.vue'
import KbnLoginView from '@/components/template/taskmanagement/KbnLoginView.vue'

export default [{
  path: '/taskmanagement',
  component: TMMainPage,
  meta: { requiresAuth: true },
  children: [{
    path: 'tasks/:taskId',
    component: KbnTaskDetailModal,
    name: 'taskDetailModal',
    meta: { requiresAuth: true }
  }]
},{
  path: '/taskmanagement/login',
  component: KbnLoginView
}]
