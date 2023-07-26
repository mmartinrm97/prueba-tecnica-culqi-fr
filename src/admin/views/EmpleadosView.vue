<template>
  <div class="flex flex-col rounded-lg bg-white p-8 shadow-sm gap-x-6 gap-y-8">
    <!--        Title, description -->
    <section class="flex items-center justify-between">
      <div class="space-y-2">
        <h2 class="text-2xl font-semibold">Empleados</h2>
        <p class="text-md font-medium text-gray-400">Gestiona tus empleados</p>
      </div>
      <div class="space-x-6">
        <!--  Descargar button-->
        <button
          class="inline-flex items-center rounded-xl border-2 border-secondary bg-white px-6 py-3 text-secondary transition-colors hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
        >
          <FileDownloadIcon class="h-6 w-6 fill-current focus:outline-none" />
          <span class="ml-2 text-sm">Descargar</span>
        </button>

        <!--          Nuevo button-->
        <button
          class="inline-flex items-center rounded-xl border-2 border-secondary bg-secondary px-6 py-3 text-white transition-colors hover:bg-white hover:text-secondary hover:border-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
        >
          <PlusIcon class="h-6 w-6 fill-current focus:outline-none" />
          <span class="text-sm">Nuevo</span>
        </button>
      </div>
    </section>
    <!--       search and select inputs-->
    <section class="flex space-x-6">
      <!--          Search input-->
      <div class="relative w-3/4">
        <span class="pointer-events-none absolute inset-y-0 flex items-center px-3">
          <SearchIcon class="h-6 w-6 stroke-current text-gray-600" />
        </span>
        <input
          class="w-full rounded-xl py-3 pl-10 pr-4 text-sm text-black focus:text-black focus:outline-none border border-gray-300"
          placeholder="Buscar empleado"
          type="text"
        />
      </div>
      <!--          Select button-->
      <div class="w-1/4">
        <select
          class="rounded-xl py-3 pl-6 pr-6 text-sm text-black focus:text-black focus:outline-none border border-gray-300"
        >
          <option selected>Nombre de Cargo</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
    </section>

    <div class="border-b">
      <table class="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th
              v-for="header in tableHeaders"
              :key="header.id"
              :class="header.name === 'Acciones' ? 'text-right' : 'text-left'"
              class="px-6 py-6 text-base font-bold capitalize tracking-wider text-gray-500 bg-gray-100"
            >
              {{ header.name }}
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white border-primary">
          <tr v-for="usuario in usuarios" :key="usuario.id" class="text-left hover:bg-gray-200">
            <td class="whitespace-nowrap px-6 py-4">{{ usuario.nombre }}</td>
            <td class="whitespace-nowrap px-6 py-4">{{ usuario.cargo }}</td>
            <td class="whitespace-nowrap px-6 py-4">{{ usuario.departamento }}</td>
            <td class="whitespace-nowrap px-6 py-4">{{ usuario.oficina }}</td>
            <td class="whitespace-nowrap px-6 py-4">{{ usuario.estadoCuenta }}</td>
            <td class="whitespace-nowrap px-6 py-4">
              <div class="flex gap-x-2 justify-end">
                <button class="bg-success p-2 rounded-lg">
                  <EyeIcon class="h-4 w-4 fill-white" />
                </button>
                <button class="bg-others p-2 rounded-lg">
                  <EditIcon class="h-4 w-4 fill-white" />
                </button>
                <button class="bg-error p-2 rounded-lg">
                  <TrashIcon class="h-4 w-4 fill-white" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PlusIcon from '@/assets/icons/plus.svg'
import SearchIcon from '@/assets/icons/search.svg'
import EyeIcon from '@/assets/icons/eye.svg'
import EditIcon from '@/assets/icons/edit.svg'
import TrashIcon from '@/assets/icons/trash.svg'
import FileDownloadIcon from '@/assets/icons/file-download.svg'

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

const usuarios = [
  {
    id: 2,
    nombre: 'Pristia Candra',
    correo: 'pristia@culqi.com',
    cargo: 'UI UX Designer',
    departamento: 'Team Product',
    oficina: 'Culqi Office',
    estadoCuenta: 'Activada'
  },
  {
    id: 3,
    nombre: 'Hanna Baptista',
    correo: 'hanna@culqi.com',
    cargo: 'Graphic Designer',
    departamento: 'Team Product',
    oficina: 'Culqi Office',
    estadoCuenta: 'Activada'
  },
  {
    id: 4,
    nombre: 'Miracle Geidt',
    correo: 'miracle@culqi.com',
    cargo: 'Finance',
    departamento: 'Team Finance',
    oficina: 'Culqi Office',
    estadoCuenta: 'Desactivada'
  },
  {
    id: 5,
    nombre: 'Rayna Torff',
    correo: 'rayna@culqi.com',
    cargo: 'Project Manager',
    departamento: 'Team Management',
    oficina: 'Culqi Office',
    estadoCuenta: 'Activada'
  },
  {
    id: 6,
    nombre: 'Giana Lipshutz',
    correo: 'giana@culqi.com',
    cargo: 'Creative Director',
    departamento: 'Team Creative',
    oficina: 'Culqi Office',
    estadoCuenta: 'Desactivada'
  },
  {
    id: 7,
    nombre: 'James George',
    correo: 'james@culqi.com',
    cargo: 'Lead Designer',
    departamento: 'Team Design',
    oficina: 'Culqi Office',
    estadoCuenta: 'Activada'
  },
  {
    id: 8,
    nombre: 'Jordyn George',
    correo: 'jordyn@culqi.com',
    cargo: 'IT Support',
    departamento: 'Team IT',
    oficina: 'Culqi Office',
    estadoCuenta: 'Activada'
  },
  {
    id: 9,
    nombre: 'Skylar Herwitz',
    correo: 'skylar@unbixel.com',
    cargo: '3D Designer',
    departamento: 'Team Design',
    oficina: 'Culqi Office',
    estadoCuenta: 'Activada'
  },
  {
    id: 10,
    nombre: 'Andres Silva',
    correo: 'andres@culqi.com',
    cargo: 'Web Developer',
    departamento: 'Team Development',
    oficina: 'Culqi Office',
    estadoCuenta: 'Activada'
  },
  {
    id: 11,
    nombre: 'Ana Maria',
    correo: 'ana@culqi.com',
    cargo: 'Data Scientist',
    departamento: 'Team Data',
    oficina: 'Culqi Office',
    estadoCuenta: 'Desactivada'
  }
]
</script>

<style scoped></style>
