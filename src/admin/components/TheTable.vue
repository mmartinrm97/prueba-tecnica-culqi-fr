<template>
  <div v-if="isLoading">Loading</div>
  <div v-else-if="hasError">
    {{ errorMessage }}
  </div>
  <table v-else class="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
    <thead>
      <tr>
        <th
          v-for="header in tableHeaders"
          :key="header.id"
          :class="header.name === 'Acciones' ? 'text-right' : 'text-left'"
          class="px-6 py-6 text-base font-bold capitalize tracking-wider text-gray-600 bg-gray-50"
        >
          {{ header.name }}
        </th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 bg-white border-primary ">
      <tr v-for="empleado in empleados" :key="empleado.id" class="text-left hover:bg-gray-200 font-medium">
        <td class="whitespace-nowrap px-6 py-4">
          <div class="flex flex-col">
            <span class="text-gray-900 font-medium">{{empleado.nombre}}</span>
            <span class="text-gray-400 ">{{empleado.correo}}</span>
          </div>
        </td>
        <td class="whitespace-nowrap px-6 py-4">{{ empleado.cargo }}</td>
        <td class="whitespace-nowrap px-6 py-4">{{ empleado.departamento }}</td>
        <td class="whitespace-nowrap px-6 py-4">{{ empleado.oficina }}</td>
        <td class="whitespace-nowrap px-6 py-4">{{ empleado.estadoCuenta }}</td>
        <td class="whitespace-nowrap px-6 py-4">
          <div class="flex gap-x-2 justify-end">
            <button
              class="bg-success p-2 rounded-lg hover:bg-success/80 hover:shadow-md transition-colors"
            >
              <EyeIcon class="h-4 w-4 fill-white" />
            </button>
            <button
              class="bg-others p-2 rounded-lg hover:bg-others/80 hover:shadow-md transition-colors"
            >
              <EditIcon class="h-4 w-4 fill-white" />
            </button>
            <button
              class="bg-error p-2 rounded-lg hover:bg-error/80 hover:shadow-md transition-colors"
            >
              <TrashIcon class="h-4 w-4 fill-white" />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts" setup>
// import type { Empleado } from '@/admin/interfaces/empleado'
import EyeIcon from '@/assets/icons/eye.svg'
import EditIcon from '@/assets/icons/edit.svg'
import TrashIcon from '@/assets/icons/trash.svg'
import { useEmpleadosStore } from '@/admin/store/useEmpleadosStore'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

onMounted(async () => {
  await empleadoStore.fetchEmpleados()
})

const empleadoStore = useEmpleadosStore()

const {
  empleados,
  isLoading,
  hasError,
  errorMessage
} = storeToRefs(empleadoStore)

const tableHeaders = [
  {
    id: 1,
    name: 'Nombre'
  },
  {
    id: 2,
    name: 'Cargo'
  },
  {
    id: 3,
    name: 'Departamento'
  },
  {
    id: 4,
    name: 'Oficina'
  },
  {
    id: 5,
    name: 'Cuenta'
  },
  {
    id: 6,
    name: 'Acciones'
  }
]

// const empleadosRAW = [
//   {
//     id: 2,
//     nombre: 'Pristia Candra',
//     correo: 'pristia@culqi.com',
//     cargo: 'UI UX Designer',
//     departamento: 'Team Product',
//     oficina: 'Culqi Office',
//     estadoCuenta: 'Activada'
//   },
//   {
//     id: 3,
//     nombre: 'Hanna Baptista',
//     correo: 'hanna@culqi.com',
//     cargo: 'Graphic Designer',
//     departamento: 'Team Product',
//     oficina: 'Culqi Office',
//     estadoCuenta: 'Activada'
//   },
//   {
//     id: 4,
//     nombre: 'Miracle Geidt',
//     correo: 'miracle@culqi.com',
//     cargo: 'Finance',
//     departamento: 'Team Finance',
//     oficina: 'Culqi Office',
//     estadoCuenta: 'Desactivada'
//   },
//   {
//     id: 5,
//     nombre: 'Rayna Torff',
//     correo: 'rayna@culqi.com',
//     cargo: 'Project Manager',
//     departamento: 'Team Management',
//     oficina: 'Culqi Office',
//     estadoCuenta: 'Activada'
//   },
//   {
//     id: 6,
//     nombre: 'Giana Lipshutz',
//     correo: 'giana@culqi.com',
//     cargo: 'Creative Director',
//     departamento: 'Team Creative',
//     oficina: 'Culqi Office',
//     estadoCuenta: 'Desactivada'
//   },
//   {
//     id: 7,
//     nombre: 'James George',
//     correo: 'james@culqi.com',
//     cargo: 'Lead Designer',
//     departamento: 'Team Design',
//     oficina: 'Culqi Office',
//     estadoCuenta: 'Activada'
//   },
//   {
//     id: 8,
//     nombre: 'Jordyn George',
//     correo: 'jordyn@culqi.com',
//     cargo: 'IT Support',
//     departamento: 'Team IT',
//     oficina: 'Culqi Office',
//     estadoCuenta: 'Activada'
//   },
//   {
//     id: 9,
//     nombre: 'Skylar Herwitz',
//     correo: 'skylar@unbixel.com',
//     cargo: '3D Designer',
//     departamento: 'Team Design',
//     oficina: 'Culqi Office',
//     estadoCuenta: 'Activada'
//   },
//   {
//     id: 10,
//     nombre: 'Andres Silva',
//     correo: 'andres@culqi.com',
//     cargo: 'Web Developer',
//     departamento: 'Team Development',
//     oficina: 'Culqi Office',
//     estadoCuenta: 'Activada'
//   },
//   {
//     id: 11,
//     nombre: 'Ana Maria',
//     correo: 'ana@culqi.com',
//     cargo: 'Data Scientist',
//     departamento: 'Team Data',
//     oficina: 'Culqi Office',
//     estadoCuenta: 'Desactivada'
//   }
// ]
</script>
