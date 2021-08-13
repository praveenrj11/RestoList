import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  constructor(private rests: RestoService) { }

  listData: any;

  ngOnInit(): void {
    this.rests.getList().subscribe((result) => {
      this.listData = result;
    })
  }

  deletedata(id: any) {
    this.listData.splice(id-1,1)

    this.rests.delete(id).subscribe((result) => {
      console.log('result is', result)
    })
  }

}
