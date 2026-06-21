import "./PriceTag.css";

function PriceTag({ price }) {
  return (
    <div className="price-tag">
      ₹ {price} / Night
    </div>
  );
}

export default PriceTag;