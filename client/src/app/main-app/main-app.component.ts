import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-main-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-app.component.html',
  styleUrl: './main-app.component.css'
})
export class MainAppComponent implements OnInit{
  data: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
