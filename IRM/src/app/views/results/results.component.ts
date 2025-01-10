import { TestService } from './../../services/test.service';
import { Test } from './../../models/test';
import { Department } from './../../models/department';
import { Employee } from './../../models/employee';
import { ResultService } from './../../services/result.service';
import { Component, inject } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { LOCALE_ID } from '@angular/core';
import { Result } from '../../models/result';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { DateAdapter, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import '@angular/common/locales/global/fr'
import { catchError, debounceTime, EMPTY, finalize, tap } from 'rxjs';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import moment from 'moment';

import { ReactiveFormsModule } from '@angular/forms';
registerLocaleData(localeRu);
@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule
  
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru-RU' },
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
  ],
   
  templateUrl: './results.component.html',


  styleUrl: './results.component.scss'
})

export class ResultsComponent {
  constructor(
    private dateAdapter: DateAdapter<Date>
  ){}
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
  start_date: string = ''
  end_date: string = ''

  getAllTest(){
    this.TestServiceDontThem.getAllTest().pipe().subscribe((res:any)=>{
      this.tests = res
      this.getAllResult()
    })
  }
  getDepartament(){
    this.departmentService.getDepartments({with_employes:true}).pipe().subscribe((res:Department[])=>{
      this.departemnts = res
    })
  }
  startDateChange(event:any){
    this.start_date = moment(event.value).format('YYYY-MM-DD: HH:mm')
    this.end_date = ''
    console.log('получил даут старта')
    this.getAllResult()
  }
  endDateChange(event:any){
    this.end_date = moment(event.value).format('YYYY-MM-DD: HH:mm')
    if(this.end_date !== 'Invalid date'){
      console.log(this.end_date)
      this.getAllResult()
    }
   

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
    if(this.tests){
      this.tests.forEach((test:any)=>{
        if(test.id == result.test){
           user.test_title = test.title
        }
      })
    }
        user.score = `${result.score} из ${result.total}`
    console.log(user)
    return user
  }
  getAllResult(){
    
    this.resultService.getResults(({ test_id:this.selectedTest ? Number(this.selectedTest) : '', department_id:this.selectedDepartament ? Number(this.selectedDepartament) : '', start_date: this.start_date, end_date:this.end_date})).pipe (  
      tap(()=>{

    }),
    debounceTime(600),
    catchError((err: any)=>{
        return EMPTY
    })
   
  ).subscribe((res:any)=>{
      this.results = res

      this.results.forEach((result:any)=>{
        this.usersAndTest.push(this.getUserInfo(result.user,result))

      })

    })
  }
  getResultsFile(){
    let fileLink = this.resultService.getResultsFile(({ test_id:this.selectedTest ? Number(this.selectedTest) : '', department_id:this.selectedDepartament ? Number(this.selectedDepartament) : ''}))
      console.log(fileLink)
      window.open(fileLink, '_blank')
  }

  selectTest(event:any){
    if(this.tests[event.target.value] && this.tests[event.target.value].id){
      this.selectedTest = String( this.tests[event.target.value].id)
    }else{
      this.selectedTest = ''
    }

    this.results = []
    this.usersAndTest = []
    this.getAllResult()
  }
  selectDepartament(event:any){
    this.results = []
    this.usersAndTest = []
    console.log(event)
    this.selectedDepartament = event.target.value
    this.getAllResult()
  }
  ngOnInit(){
    this.dateAdapter.setLocale('ru-RU');
    this.getDepartament()
    this.getAllTest()
  }
}
