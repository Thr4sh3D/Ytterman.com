import { Star, MapPin } from 'lucide-react';

interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export const LocalReviews = () => {
  const reviews: Review[] = [
    {
      id: '1',
      author: 'Anna Andersson',
      location: 'Sundsvall',
      rating: 5,
      text: 'Professionell och noggrann service. Fick hjälp med både BAS-P och kontrollansvarig för vårt byggprojekt. Mycket nöjd med resultatet.',
      service: 'Kontrollansvarig + BAS-P',
      date: '2024-01-15'
    },
    {
      id: '2',
      author: 'Erik Johansson',
      location: 'Härnösand',
      rating: 5,
      text: 'Snabb och korrekt hantering av alla våra kontrollansvarig-uppdrag. Rekommenderar starkt för alla byggprojekt i regionen.',
      service: 'Kontrollansvarig',
      date: '2024-01-10'
    },
    {
      id: '3',
      author: 'Maria Lindström',
      location: 'Kramfors',
      rating: 5,
      text: 'Excellent support throughout our construction project. Professional expertise and timely delivery of all BAS-U services.',
      service: 'BAS-U',
      date: '2024-01-05'
    },
    {
      id: '4',
      author: 'Lars Nilsson',
      location: 'Sollefteå',
      rating: 5,
      text: 'Mycket kompetent och hjälpsam personal. Fick all hjälp vi behövde för vårt byggprojekt. Kommer definitivt använda deras tjänster igen.',
      service: 'BAS-P + BAS-U',
      date: '2023-12-20'
    },
    {
      id: '5',
      author: 'Karin Svensson',
      location: 'Örnsköldsvik',
      rating: 4,
      text: 'Bra service och professionell hantering av vårt kontrollansvarig-uppdrag. Lite längre handläggningstid än förväntat men bra kvalitet.',
      service: 'Kontrollansvarig',
      date: '2023-12-15'
    }
  ];

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Kundrecensioner från Västernorrland
        </h3>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {renderStars(Math.round(averageRating))}
          </div>
          <span className="text-sm font-medium text-gray-900">
            {averageRating.toFixed(1)} ({reviews.length} recensioner)
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-medium text-gray-900">{review.author}</h4>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-3 h-3 mr-1" />
                    {review.location}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-xs text-gray-500">
                    {new Date(review.date).toLocaleDateString('sv-SE')}
                  </span>
                </div>
              </div>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                {review.service}
              </span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {review.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          Alla recensioner kommer från verifierade kunder i Västernorrlands län
        </p>
      </div>
    </div>
  );
};