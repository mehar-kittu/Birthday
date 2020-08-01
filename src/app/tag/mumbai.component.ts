import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mumbai',
  template: '<div class="background"><div class="padder"><div class="embed-responsive embed-responsive-21by9"> <video width="320" height="240" controls> <source src="../../assets/images/mumbai1.mp4" type="video/mp4">  </video></div></div> </div> ',
  styleUrls: ['./tag.component.scss']
})
export class MumbaiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}