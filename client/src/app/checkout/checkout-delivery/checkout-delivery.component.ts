import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BasketService } from 'src/app/basket/basket.service';
import { DelMethod } from 'src/app/shared/models/DelMethod';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrls: ['./checkout-delivery.component.scss']
})
export class CheckoutDeliveryComponent implements OnInit {
  @Input() checkoutForm!: FormGroup;
  deliveryMethods!: DelMethod[];

  constructor(private checkoutService: CheckoutService, private basketService: BasketService) { }

  ngOnInit(): void {
    this.checkoutService.getDeliveryMethods().subscribe((dm: DelMethod[]) => {
      this.deliveryMethods = dm;
    }, error => {
      console.log(error);
    });
  }

  setShippingPrice(deliveryMethod: DelMethod) {
    this.basketService.setShippingPrice(deliveryMethod);
  }

}
