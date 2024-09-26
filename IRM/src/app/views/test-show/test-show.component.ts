import { DepartmentService } from './../../services/department.service';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TestService } from '../../services/test.service';
import { Test } from '../../models/test';
import { Department } from '../../models/department';
import { Employee } from '../../models/employee';
@Component({
  selector: 'app-test-show',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  providers: [TestService],
  templateUrl: './test-show.component.html',
  styleUrl: './test-show.component.scss'
})
export class TestShowComponent implements OnInit{
  constructor(
    private route: ActivatedRoute
  ) {}
  public testService: TestService = inject(TestService)
  public departmentService:DepartmentService = inject(DepartmentService)
  public test!: Test
  public departemnts:Department[] = []
  public selectedDeprtament!:Department|any
  public selectedUser!:Employee
  public testCopy!:any
  getTest() {
    let id = this.route.snapshot.params["id"]
    this.testService.getTestById(id).subscribe((res: any) => {
      this.test = Object.assign({}, res)
      this.testCopy = JSON.parse(JSON.stringify(this.test));
      this.testCopy.questions.forEach((question:any)=>{
        question.answers = []
      })
      console.log(this.testCopy)

    })

    console.log(this.test)
  }
  getDepartament(){
    this.departmentService.getDepartments({with_employes:true}).pipe().subscribe((res:Department[])=>{
      this.departemnts = res
    })
  }
  selectUser(event:any){
    this.selectedDeprtament.employes[event.target.value]
    this.selectedUser = this.selectedDeprtament.employes[event.target.value]
    this.testCopy.employee_id = this.selectedDeprtament.employes[event.target.value].id
  }

  selectQuestion(event:any, question:number){
    // console.log(this.test.questions[question],event.target.id)
    this.test.questions[question].answers.forEach(answer => {
      if(answer.id == event.target.id){
        this.testCopy.questions[question].answers[0] = answer
        console.log(this.testCopy)
      }
    });

  }

  selectDepartament(event:any){
    console.log(this.departemnts[event.target.value])
    if(this.departemnts[event.target.value]){
      this.selectedDeprtament = this.departemnts[event.target.value]
    }else{
      this.selectedDeprtament = ""
    }
  }

  submit(){

    this.testService.sendTest(this.testCopy).pipe().subscribe((res:any)=>{
      console.log(res)
    })
  }

  ngOnInit(): void {
      this.getTest()
      this.getDepartament()
  }
}
