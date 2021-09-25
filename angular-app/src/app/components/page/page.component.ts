import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModelManager, Constants } from '@adobe/cq-spa-page-model-manager';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  path;
  items;
  itemsOrder;
 
  constructor(private route: ActivatedRoute) {
    const path = route.snapshot.data.path;
    ModelManager.getData(path).then((data) => {
      this.path = data[Constants.PATH_PROP];
      this.items = data[Constants.ITEMS_PROP];
      this.itemsOrder = data[Constants.ITEMS_ORDER_PROP];
 
      window.scrollTo(0, 0);

    });
   }

  ngOnInit() {
  }

}
