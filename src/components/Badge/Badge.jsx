import "./Badge.css";

function Badge({ available }) {

  return (
    <span className={available ? "available" : "booked"}>
      {available ? "Available" : "Booked"}
    </span>
  );

}

export default Badge;