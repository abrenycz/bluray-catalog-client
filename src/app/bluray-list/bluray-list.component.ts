import { Component, OnInit } from '@angular/core';
import { BlurayService } from '../shared/bluray/bluray.service';

@Component({
  selector: 'app-bluray-list',
  templateUrl: './bluray-list.component.html',
  styleUrls: ['./bluray-list.component.css']
})
export class BlurayListComponent implements OnInit {

  constructor(private blurayService: BlurayService) { }

  ngOnInit() {
  	this.blurayService.getAllBlurays().subscribe(data => {
  		this.blurayService.blurays = data;
  	});
  }

}
