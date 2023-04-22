import { Component } from '@angular/core';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  public numList:any;

  id:any;
  name:any;
  avatar:any;
  createdAt:any;

  constructor(private api: ApiService ) { }

  getuserData(){
    this.api.fetchData().subscribe(res =>{
      console.log(res);
      this.numList=res
      console.log(this.numList);   

    });
  }

}
