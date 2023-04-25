import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {



  public numList: any;



  id: any;
  name: any;
  avatar: any;
  createdAt: any;

  constructor(private api: ApiService) { }

  getuserData() {
    this.api.fetchData().subscribe(res => {
      console.log(res);
      this.numList = res
      console.log(this.numList);

    });
  }

  public now = new Date();

  ngOnInit() {
    console.log(this.now);
    console.log(this.now.toLocaleDateString());
    console.log(this.now.toLocaleString());
    console.log(this.now.toUTCString());
    console.log(this.now.toISOString());
    this.now.setDate( this.now.getDate() + 3 );
    console.log(this.now);

    let windowUrl = new URL(window.location.href);

    let profile_id = windowUrl.searchParams.get("profile_id") ? windowUrl.searchParams.get("profile_id") :0
     console.log(profile_id);

    
  }

}
