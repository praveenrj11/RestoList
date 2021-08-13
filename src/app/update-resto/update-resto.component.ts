import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../resto.service'

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  editResto = new FormGroup({
    name: new FormControl(''),
    emailId: new FormControl(''),
    address: new FormControl(''),

  })

  constructor(private acroute: ActivatedRoute, private restos: RestoService) { }

  ngOnInit(): void {
    this.restos.getid(this.acroute.snapshot.params.id).
      subscribe((result: any) => {
        console.log('result', result)
        this.editResto = new FormGroup({
          name: new FormControl(result["name"]),
          emailId: new FormControl(result["emailId"]),
          address: new FormControl(result["address"]),
        })
      })

  }
  alert: boolean = false;

  updateData() {
    this.restos.update(this.acroute.snapshot.params.id, this.editResto.value).subscribe((result) => {
      console.log("data saving", result)
      this.alert = true;
    })
  }
  closealert() {
    this.alert = false;

  }

}
