import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DatepickerOptions } from 'ng2-datepicker';
import * as $ from 'jquery' 
declare var $: any;


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  indexValue;
  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'DD-MM-YYYY',
    maxDate: new Date(Date.now()),  // Maximal selectable date
    barTitleIfEmpty: 'Click to select a date',
    placeholder: 'Click to select a date', // HTML input placeholder attribute (default: '')
    addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
    addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
    fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
    useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown 
  };
  

  orders = [
    { orderNumber:1, orderDueDate:'02-01-2021', buyerName: 'bhargava', address:'yousufguda checkpost', mobileNumber:'8500599016',total:'1234' },
    { orderNumber:2, orderDueDate:'01-31-2021', buyerName: 'chary', address:'karimnagar laxminagar', mobileNumber:'9876543210',total:'4462' },
    { orderNumber:3, orderDueDate:'05-02-2021', buyerName: 'abhilash', address:'karimnagar ashoknagar', mobileNumber:'7894561230',total:'9874' },
    { orderNumber:4, orderDueDate:'10-02-2021', buyerName: 'karthik', address:'karimnagar', mobileNumber:'7418529630',total:'5453' },
    { orderNumber:5, orderDueDate:'02-15-2021', buyerName: 'ravikanth', address:'siddipet', mobileNumber:'8527419630',total:'7898' },
  ];

  color;

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {

  }

  model: any = {};
  model2: any = {}; 

  addOrder() {
    this.orders.push(this.model);
    this.model = {};
    $('#addOrderModal').modal('toggle');
  }
  getDeleteIndex(i){
    this.indexValue =i;
  }
  deleteOrder() {
    console.log(this.indexValue);
    this.orders.forEach((item,index)=>{
      console.log(index)
      if(index == this.indexValue){
        console.log(this.indexValue,index,item)
        this.orders.splice(index,1)
      }
      $('#deleteModal').modal('toggle');
    })
  }

  myValue;

  editOrder(editOrderInfo) {  
    this.model2.orderNumber = this.orders[editOrderInfo].orderNumber;
    this.model2.orderDueDate = this.datePipe.transform(this.orders[editOrderInfo].orderDueDate,"dd-MM-yyyy");
    this.model2.buyerName = this.orders[editOrderInfo].buyerName;
    this.model2.address = this.orders[editOrderInfo].address;
    this.model2.mobileNumber = this.orders[editOrderInfo].mobileNumber;
    this.model2.total = this.orders[editOrderInfo].total;
    this.myValue = editOrderInfo;
    $('#editOrder').modal('toggle');
    console.log(this.myValue);
  }

  updateOrder() {

    let editOrderInfo = this.myValue;
    for(let i = 0; i < this.orders.length; i++) {
      if(i == editOrderInfo) {
        this.orders[i] = this.model2;
        this.model2 = {};
      }
    }
    $('#editOrder').modal('toggle');
  }

}
