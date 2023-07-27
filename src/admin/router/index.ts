import type { RouteRecordRaw } from 'vue-router'

// @ts-ignore
import AdminLayout from '@/admin/layout/AdminLayout.vue'
import EmpleadosView from '@/admin/views/EmpleadosView.vue'
import ReclutamientoView from '@/admin/views/ReclutamientoView.vue'
import UserIcon from '@/assets/icons/users.svg'
import BriefCaseIcon from '@/assets/icons/briefcase.svg'

export const adminRoute: RouteRecordRaw = {
  path: '/admin',
  redirect: { name: 'empleados' },
  component: AdminLayout,
  children: [
    {
      path: 'empleados',
      name: 'empleados',
      props: { title: 'Empleados', icon: UserIcon },
      component: EmpleadosView
    },
    {
      path: 'reclutamiento',
      name: 'reclutamiento',
      props: { title: 'Reclutamiento', icon: BriefCaseIcon },
      component: ReclutamientoView
    }
  ]
}
