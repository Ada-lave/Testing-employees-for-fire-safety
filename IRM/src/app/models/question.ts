import { IAnswer } from "./answer"

export interface Question {
  id: number
  title: string
  answers:IAnswer[]
}
