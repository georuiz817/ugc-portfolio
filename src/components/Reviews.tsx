import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import "../styles/reviews.css";


export function Reviews() {
  const reviews = [
    {
      name: "Niklas Schott",
      company: "Endless Summer Resort",
      role: "Owner",
      rating: 5,
      text: "Kash and George did a great job! The video material is very good, the service and communication were excellent! Very direct and friendly. In addition we (as the hotel) had a minimum amount of work while getting a maximum amount of output by the two! We can highly recommend their service and would like to work together again with them in the future for more content creations.",
      avatar: "https://lh3.googleusercontent.com/d/172ZfgNcpjKmtAq9KdVt0S6X3FHhDSTEM"
    },
    {
      name: "Maxim Gankin",
      company: "Inlight Lombok",
      role: "Owner",
      rating: 5,
      text: "The video looks very professional and amazing",
      avatar: "https://lh3.googleusercontent.com/d/1KYmalYi_m-ys9fAARsCJsz20RjFtMTTi"
    },
    {
      name: "Marwan",
      company: "Folk Cafe",
      role: "Owner",
      rating: 5,
      text: "Working with Kash and George was a fantastic experience. They were highly professional and their communication was clear and efficient. I really appreciated their flexibility and how dedicated they were to delivering content that perfectly met my needs. I would highly recommend them.",
      avatar: "https://lh3.googleusercontent.com/d/1GQbPkoFPLsxfusErUFaGn7zeRf9Z0S4s"
    }
  ];

  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-header">
          <h2 className="reviews-title">
            Reviews
          </h2>
        </div>

        <div className="reviews-grid">
          {reviews.slice(0, 3).map((review, index) => (
            <Card key={index} className="review-card">
              <CardContent className="review-card-content">
                <div className="stars-container">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="star-icon" />
                  ))}
                </div>
                
                <blockquote className="review-text">
                  "{review.text}"
                </blockquote>
                
                <div className="review-author">
                  <div className="avatar-container">
                    <img 
                      src={review.avatar} 
                      alt={`${review.company} logo`}
                      className="avatar-image"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="avatar-fallback">${review.company.substring(0, 2).toUpperCase()}</div>`;
                        }
                      }}
                    />
                  </div>
                  <div className="author-info">
                    <div className="author-name">{review.name}</div>
                    <div className="author-details">
                      {review.role}, {review.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}