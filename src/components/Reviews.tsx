import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

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
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4 font-aboreto">
            Reviews
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((review, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <blockquote className="text-primary mb-6 italic">
                  "{review.text}"
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary flex items-center justify-center">
                    <img 
                      src={review.avatar} 
                      alt={`${review.company} logo`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.innerHTML = `<div class="w-full h-full bg-secondary text-secondary-foreground flex items-center justify-center font-medium text-xs">${review.company.substring(0, 2).toUpperCase()}</div>`;
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">
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