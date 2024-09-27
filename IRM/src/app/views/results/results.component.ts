import { TestService } from './../../services/test.service';
import { Test } from './../../models/test';
import { Department } from './../../models/department';
import { Employee } from './../../models/employee';
import { ResultService } from './../../services/result.service';
import { Component, inject } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { Result } from '../../models/result';
@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})

export class ResultsComponent {
  departmentService:DepartmentService = inject(DepartmentService)
  public departemnts:Department[] = []
  tests!:Test[]
  TestServiceDontThem:TestService = inject(TestService)
  testService:ThemeService = inject(ThemeService)
  resultService:ResultService = inject(ResultService)
  results:Result[] = []
  selectedTest:string = ''
  selectedDepartament:string = ''
  usersAndTest:any[] = []
  getAllTest(){
    this.testService.getThemes().pipe().subscribe((res:any)=>{
      console.log(res)
      this.tests = res
    })
  }
  getDepartament(){
    this.departmentService.getDepartments({with_employes:true}).pipe().subscribe((res:Department[])=>{
      this.departemnts = res
    })
  }
  getUserInfo(userId:any,result:any):any{
    let user:any = {}
    this.departemnts.forEach((departament:any)=>{
      departament.employes.forEach((employee:any) => {
        if(userId == employee.id){
          user = employee
        }
      });
      if(user && user.department_id && user.department_id == departament.id){
        user.departament_title = departament.title
      }


    })
    this.TestServiceDontThem.getTestById(result.test).pipe().subscribe((res:any)=>{
      user.test_title = res.title
    })

        user.score = `${result.score} из ${result.total}`
    console.log(user)
    return user
  }
  getAllResult(){
    this.resultService.getResults(({ test_id:this.selectedTest ? Number(this.selectedTest) : '', department_id:this.selectedDepartament ? Number(this.selectedDepartament) : ''})).pipe().subscribe((res:any)=>{
      this.results = res
      this.results.forEach((result:any)=>{
        this.usersAndTest.push(  this.getUserInfo(result.user,result))

      })

    })
  }
  ngOnInit(){
    this.getDepartament()
    this.getAllTest()
    this.getAllResult()
  }
}
