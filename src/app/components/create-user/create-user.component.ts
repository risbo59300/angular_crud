import { UserService } from '../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserEntity } from '../../models/userEntity';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  user: UserEntity = new UserEntity();
  submitted = false;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

    newUser(): void {
      this.submitted = false;
      this.user = new UserEntity();
    }

    addUser() {
      this.userService.createUser(this.user)
      .subscribe(
        data => {
          console.log(data);
          this.user = new UserEntity();
          this.goToList();
        },
        error => console.log(error));
    }

    onSubmit() {
      this.submitted = true;
      this.addUser();
    }

    goToList() {
      this.router.navigate(['/user-list']);
    }

}
