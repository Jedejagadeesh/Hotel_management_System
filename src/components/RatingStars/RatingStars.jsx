import "./RatingStars.css";

function RatingStars({ rating }) {
  return (
    <div className="rating-stars">
      {[...Array(rating)].map((_, index) => (
        <span key={index}>⭐</span>
      ))}
    </div>
  );
}

export default RatingStars;