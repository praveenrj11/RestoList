import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  constructor(private restos:RestoService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  alert:boolean=false;

  addResto = this.fb.group({
    name: [''],
    emailId: [''],
    address: [''],
  })

  savedata(){
    this.restos.insert(this.addResto.value).subscribe((result)=>{
      console.log( "data saving", result)
      this.alert=true;
      this.addResto.reset({})
    })
  }
  
  closealert(){
    this.alert=false;

  }

}
