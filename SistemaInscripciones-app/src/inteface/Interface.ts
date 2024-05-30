interface admin{
    id: string
    nombre: string
    apellido: string
    uuid: string

}
interface clase{
    id: string
    nombre: string
    costo: number
}
interface suscripcion {
    alumnoId: string
    claseId: string
    monto: number
    diaPago: number
    estado: boolean
  }
interface alumno{
    id: string
    nombre: string
    apellido: string
    uuid: string
}