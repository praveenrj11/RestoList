import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private restosr:RestoService) { }

  ngOnInit(): void {
  }
  alert:boolean=false;
  register = new FormGroup({
    name: new FormControl(''),
    emailId: new FormControl(''),
    password: new FormControl('')
  })

  registerdata(){
    this.restosr.insertUser(this.register.value).subscribe((result)=>{
      console.log( "data saving", result)
      this.alert=true;
      this.register.reset({})
    })
  }
  closealert(){
    this.alert=false;

  }
}
