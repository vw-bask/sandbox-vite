import {createRouter} from 'vue-router'
import Admin from './admin/Admin.vue';
import Reports from './campaign-reports/Reports.vue';
import Projects from './projects/Projects.vue';

const routes = [
  {
    path: '/',
    component: Admin
  },

  {
    path: '/campaign-reports/',
    component: Reports
  },

  {
    path: '/projects/',
    component: Projects
  },
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}