import { Component, EventEmitter, Input, Output, input, output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './User.model';
import { CardComponent } from '../shared/card/card.component';
const randomIndex=Math.floor(Math.random() * DUMMY_USERS.length)




@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required:true}) id!:string;
  // @Input({required: true})  avator!:string;
  // @Input({required: true})  name!:string;
  @Input({required:true}) user !: User;
  // avator =input.required<string>()
  // name=input.required<string>()
 @Input ({required:true}) selected!:boolean;
  @Output() select =new EventEmitter<string>();
  //select= output<string>();

  onSelectUser(){
   this.select.emit(this.user.id);
   
  } 
  

}
