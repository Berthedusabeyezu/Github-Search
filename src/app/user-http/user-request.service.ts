import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import {User} from '../user'

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  user:User;
  constructor(private http:HttpClient) {
    this.user=new User("","","",0,0,0);
   }
   userRequest(){ 

    interface ApiResponse{
        
        
        name:string;
        avatar_url:string;
        location:string;
        followers:number;
        following:number;
        public_repos:number

    }
    let promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/daneden').toPromise().then(response=>{
        
          this.user.name=response.name
          this.user.avatar_url=response.avatar_url
          
          this.user.location=response.location
          
          
          this.user.followers=response.followers
          this.user.following=response.following
          this.user.public_repos=response.public_repos

          resolve()
      }, 
      error=>{
        this.user.name="Never, never, never give up"
        this.user.location="winston churchill"
        // this.user.name=""
        // this.user.avatar_url=""
        // this.user.followers=0
        // this.user.following=0
        // this.user.public_repos=0
        reject(error)
    }
)
})  

return promise
}
}

