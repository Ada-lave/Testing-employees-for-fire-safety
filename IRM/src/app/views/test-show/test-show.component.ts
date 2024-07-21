import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TestService } from '../../services/test.service';
import { Test } from '../../models/test';
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
  public test!: Test

  getTest() {
    let id = this.route.snapshot.params["id"]
    this.testService.getTestById(id).subscribe((res: any) => {
      console.log(res)
      this.test = res
    })

    console.log(this.test)
  }

  ngOnInit(): void {
      this.getTest()
  }
}
