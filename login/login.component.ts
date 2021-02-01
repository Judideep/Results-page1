import { Component, OnInit } from '@angular/core';
import { FieldService } from '../field.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private FieldList: FieldService, private router: Router) { }

 error: any = null;

  adminLogin(form: NgForm) {


    this.error = null;

    let adminId = $("#adminId").val();
    let pswd = $("#pswd").val();
    //alert(b_date);
    //alert(reg_name);
    if ((adminId !== "") && (pswd !== "")) {
      console.log(form.value);

      //console.log(Assignform.value);
      this.FieldList.EmployeeAuth(form.value).subscribe((result) => {

        console.log(result);

        if (result.loginAccess === "1" || result.loginAccess === 1) {
          localStorage.setItem('token', result.token);
          this.router.navigateByUrl('/home-page');
        } else {
          this.error = "Login access has been disabled.";
        }

        

        // //console.log(JSON.stringify(result));
        // if (result.length === 0) {
        //   this.error = "Invalid Employee Id or Password.";
        // }
        // else {
        //   if (result[0].loginAccess === "1" || result[0].loginAccess === 1) {
        //     localStorage.setItem('admiinDetails', JSON.stringify(result));
        //     this.router.navigateByUrl('/home-page');
        //   }else{
        //     this.error = "Access has denied. Please contact your manager.";
        //   }

        // }

      }, err => {
        //console.log(JSON.stringify(err));
        this.error = "Invalid Employee Id or Password.";
      });
    }
    else {
      this.error = "Invalid request.";
    }
  }


  ngOnInit(): void {
    alert("ok");
    this.isLoggedIn();

  }

  isLoggedIn():any{
    const userDetails=localStorage.getItem('token');
  }

}
