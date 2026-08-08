import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import "../styles/reviews.css";

const reviews = [
  // Most recent reviews first
  {
    name: "Gaelle",
    company: "Jiloo Petite Maison",
    role: "Business owner",
    rating: 5,
    text: "Amazing work! They are really profesional and the quality of their work is flawless. Highly recommend!",
    avatar: "n/a",
  },
  {
    name: "Victoria Hernandez",
    company: "Casa Areka",
    role: "CASA AREKA Feedback",
    rating: 5,
    text: "It was a very professional experience. From the beginning, they were clear about their vision and also took the time to understand what we wanted to highlight about our space. They stayed attentive even after delivering the content, making the whole process smooth and collaborative",
    avatar: "n/a",
  },
  {
    name: "Gabriella Hoop",
    company: "Avila Beach Hotel",
    role: "PR & Online Marketeer",
    rating: 5,
    text: "We absolutely love the footage. The quality and overall feel capture the Avila experience beautifully. So happy to see you enjoyed your stay that much 🤍",
    avatar: "n/a",
  },
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

// Show 3 reviews per carousel "page"
const REVIEWS_PER_PAGE = 3;

export function Reviews() {
  const [page, setPage] = useState(0);

  const maxPage = Math.ceil(reviews.length / REVIEWS_PER_PAGE) - 1;

  const visibleReviews = reviews.slice(
    page * REVIEWS_PER_PAGE,
    page * REVIEWS_PER_PAGE + REVIEWS_PER_PAGE
  );

  const handlePrev = () => setPage(p => Math.max(0, p - 1));
  const handleNext = () => setPage(p => Math.min(maxPage, p + 1));

  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-header">
          <h2 className="reviews-title">
            Reviews
          </h2>
        </div>

        <div className="reviews-carousel-controls" style={{ textAlign: "center", marginBottom: "1rem" }}>
          <button
            aria-label="View previous reviews"
            className="reviews-carousel-arrow"
            onClick={handlePrev}
            disabled={page === 0}
            style={{
              cursor: page === 0 ? "not-allowed" : "pointer",
              background: "none",
              border: "none",
              padding: "0 1rem",
              opacity: page === 0 ? 0.5 : 1
            }}
          >
            <ArrowLeft />
          </button>
          <span style={{ fontWeight: 500, letterSpacing: "0.05em" }}>
            {page + 1} / {maxPage + 1}
          </span>
          <button
            aria-label="View next reviews"
            className="reviews-carousel-arrow"
            onClick={handleNext}
            disabled={page === maxPage}
            style={{
              cursor: page === maxPage ? "not-allowed" : "pointer",
              background: "none",
              border: "none",
              padding: "0 1rem",
              opacity: page === maxPage ? 0.5 : 1
            }}
          >
            <ArrowRight />
          </button>
        </div>

        <div className="reviews-grid">
          {visibleReviews.map((review, index) => (
            <Card key={index} className="review-card">
              <CardContent className="review-card-content">
                <div className="stars-container">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="star-icon" />
                  ))}
                </div>
                <blockquote className="review-text">
                  "{review.text}"
                </blockquote>
                <div className="review-author">
                  <div className="avatar-container">
                    {review.avatar !== "n/a" && (
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
                    )}
                    {review.avatar === "n/a" && (
                      <div className="avatar-fallback">
                        {review.company.substring(0, 2).toUpperCase()}
                      </div>
                    )}
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