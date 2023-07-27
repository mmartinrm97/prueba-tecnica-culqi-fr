<template>
  <div class="">
    <table class="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
      <thead>
        <tr>
          <th
            v-for="header in props.tableHeaders"
            :key="header.id"
            :class="header.name === 'Acciones' ? 'text-right' : 'text-left'"
            class="px-6 py-6 text-base font-bold capitalize tracking-wider text-gray-600 bg-gray-50"
          >
            {{ header.name }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 bg-white border-primary">
        <tr
          v-for="empleado in empleados"
          :key="empleado.id"
          class="text-left hover:bg-gray-200 font-medium"
        >
          <td class="whitespace-nowrap px-6 py-4">
            <div class="flex flex-col">
              <span class="text-gray-900 font-medium">{{ empleado.nombre }}</span>
              <span class="text-gray-400">{{ empleado.correo }}</span>
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
  </div>
</template>
<script lang="ts" setup>
import EyeIcon from '@/assets/icons/eye.svg'
import EditIcon from '@/assets/icons/edit.svg'
import TrashIcon from '@/assets/icons/trash.svg'
import type { Empleado } from '@/admin/empleados/interfaces/empleado'

interface Props {
  tableHeaders: Array<any>
  empleados: Empleado[]
}

const props = defineProps<Props>()
</script>
