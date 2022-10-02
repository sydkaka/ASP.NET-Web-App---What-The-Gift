import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

  public age: string = "f";

  onSubmit(): void {
    this.age = "444"
  }
}
