import UsersIcon from "@/assets/icons/users.svg";
import BriefCaseIcon from "@/assets/icons/briefcase.svg";

export interface RouterLink {
  name: string
  title: string
  path: string,
  icon: Object,
}

export const routeLinks: RouterLink[] = [
  {
    path: '/admin/empleados',
    name: 'empleados',
    title: 'Empleados',
    icon: UsersIcon,
  },
  {
    path: '/admin/reclutamiento',
    name: 'reclutamiento',
    title: 'Reclutamiento',
    icon: BriefCaseIcon
  }
]
