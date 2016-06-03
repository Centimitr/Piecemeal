/**
 * Created by shixiao on 6/2/16.
 */
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})

export class ListComponent {
  title = 'piecemeal works!';
  list = [];
  constructor(){}
  public click(){
  	console.log(123);
  	// let c = new Cyako("ws://localhost:3000")
  	// c.fetch("Matter.GetMatterList",{},{}).then(data=>{
  	// 	console.log(data);
  	// 	list = data.list;
  	// },err=>{});
  	// c.disconnect()
  }
}
