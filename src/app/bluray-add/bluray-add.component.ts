import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlurayService } from '../shared/bluray/bluray.service';

@Component({
  selector: 'app-bluray-add',
  templateUrl: './bluray-add.component.html',
  styleUrls: ['./bluray-add.component.css']
})
export class BlurayAddComponent implements OnInit {
	bluray: any = {};

  constructor(private blurayService: BlurayService) { }

  ngOnInit() {
  }

 save(form: NgForm) {
    this.blurayService.save(form).subscribe(result => {
	    this.blurayService.getAllBlurays().subscribe(data => {
	      this.blurayService.blurays = data;
	    });
    }, error => console.error(error))

  }

}
