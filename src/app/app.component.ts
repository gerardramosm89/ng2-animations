import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courseGoals = [
    { title: "working on angular styling", isActiveGoal: true},
    { title: "getting better on angular styling", isActiveGoal: true},
    { title: "okay im the best now at styling", isActiveGoal: true}
        
  ]
  
  title = 'app works!';
}
