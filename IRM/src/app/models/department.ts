import { Employee } from "./employee"

export interface Department {
  id: number
  title: string
  employes?: Employee[]
}
