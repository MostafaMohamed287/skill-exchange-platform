import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Review {
  _id?: string;
  reviewer: { _id: string; name: string; email: string };
  reviewee: { _id: string; name: string; email: string };
  skill: { _id: string; title: string };
  rating: number;
  comment?: string;
}

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css'
})
export class ReviewComponent implements OnInit {

  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5000/api/reviews';

  reviews = signal<Review[]>([]);

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews() {
    this.http.get<Review[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.reviews.set(data);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
