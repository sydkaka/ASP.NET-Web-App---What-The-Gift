import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) {
    
  }

  ngOnInit(): void {
  }

  checkoutForm = this.formBuilder.group({
    age: '0-10',
    gender: 'male'
  });

  onSubmit(): void {
 
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.router.navigate(['/result']);
  }
}

