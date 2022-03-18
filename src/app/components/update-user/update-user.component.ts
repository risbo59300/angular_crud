import { UserService } from '../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserEntity } from '../../models/userEntity';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: number;
  user: UserEntity;

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = new UserEntity();

    this.id = this.route.snapshot.params['id'];

    this.userService.getUserById(this.id)
      .subscribe(data => {
        console.log(data);
        this.user = data;
      },
      error => console.log(error));
  }

  updateUser() {
    this.userService.updateUser( this.id,this.user)
      .subscribe(data => {
        console.log(data);
        this.user = new UserEntity();
        this.gotoList();
      },
      error => console.log(error));
  }

  onSubmit() {
    this.updateUser();
  }

  gotoList() {
    this.router.navigate(['/user-list']);
  }

}
