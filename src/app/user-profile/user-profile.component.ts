import { Component, OnInit } from '@angular/core';
import { interval, takeUntil, takeWhile, timer } from 'rxjs';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {



  public numList: any;

  public name = ""

  public profile_id: any;

  public buttonclicked = 0;
  public id = "";
  public createdAt = "";

  constructor(private api: ApiService) { }

  getuserData() {

    this.api.fetchData().subscribe(res => {

      this.numList = res
      console.log(this.numList);

      let windowUrl = new URL(window.location.href);

      this.profile_id = windowUrl.searchParams.get("profile_id") ? windowUrl.searchParams.get("profile_id") : 0
      console.log(this.profile_id);


      if (this.profile_id > 0) {
        this.buttonclicked = 1
      }
      for (let i = 0; i < this.numList.length; i++) {

        if (this.profile_id == this.numList[i].id) {
          this.name = this.numList[i].name;
          this.id = this.numList[i].id;
          this.createdAt = this.numList[i].createdAt;


        }
      }

    });
  }

  public now = new Date();

  // ngOnInit() {
  //   console.log(this.now);
  //   console.log(this.now.toLocaleDateString());
  //   console.log(this.now.toLocaleString());
  //   console.log(this.now.toUTCString());
  //   console.log(this.now.toISOString());
  //   this.now.setDate( this.now.getDate() + 3 );
  //   console.log(this.now);

  //    setTimeout(() => {

  //     console.log("delay");

  //    }, 3000);

  //    let count=0;
  //    const timer$ = timer(30000);

  //    let Delay:any;

  //    interval(5000).pipe(takeWhile( () => (count<=6 )), takeUntil(timer$) )
  //   .subscribe(() => {
  //     count = count + 1
  //     console.log(count);
  //     if (count == 5)
  //     {
  //       clearInterval(Delay);

  //     }

  //   });

  // }



}
