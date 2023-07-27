export interface ApiResponse {
  status: string
  data: Empleado[]
  total: number
}

export interface Empleado {
  id: number
  nombre: string
  correo: string
  cargo: string
  departamento: string
  oficina: Oficina
  estadoCuenta: EstadoCuenta
}

export enum EstadoCuenta {
  Activada = 'Activada',
  Desactivada = 'Desactivada'
}

export enum Oficina {
  CulqiOffice = 'Culqi Office'
}
