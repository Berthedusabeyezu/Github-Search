// import { Injectable } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {User} from "../user";
// import{environment} from "../../environments/environment";
// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.css']
// })
// @Injectable()
// export class SearchComponent implements OnInit {
//   user:User;

//   constructor(private http:HttpClient) {
//     this.user=new User("","","","",0,0,0)
//    }

//   ngOnInit() {
//     interface ApiResponse{
//       login:string,
//       location:string,
//       name:string,
//       avatar_url:string,
//       followers:number,
//       following:number,
//       public_repos:number 
//     }
    
    
//     this.http.get<ApiResponse>('https://api.github.com/users/daneden').subscribe(data=>{
//     this.user= new User(data.login, data.location, data.name, data.avatar_url, data.followers, data.following, data.public_repos)
//   })
//   }

// }
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from "../user";
import{environment} from "../../environments/environment";
import {UserService} from '../users/user.service';
import{UserRequestService} from '../user-http/user-request.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[UserService,UserRequestService]
})
@Injectable()
export class SearchComponent implements OnInit {
  user:User;

  constructor(private userService:UserRequestService) {
    this.user=new User("","","",0,0,0)
   }

  ngOnInit() {
    this.userService.userRequest()
    this.user=this.userService.user
  
    }
     
    
   
  }

