import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  flip = false;

  constructor() { }

  ngOnInit() {
  }

  clickEvent(e) {
    console.log(e);
    alert('The Dark Side is powerful! Join us!');
  }
  switch(v) {
    this.flip = !this.flip;
    if (this.flip) {
      v.innerText = 'Off';
    } else {
      v.innerText = 'On';
    }
  }
}
