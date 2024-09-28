import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link to={`/restaurants/${restaurant.id}`}>
      <div className="card mb-3 m-2" style={{ width: "18rem" }}>
        <img
          src={restaurant.image}
          className="card-img-top"
          alt={`${restaurant.name}`}
        />
        <div className="card-body">
          <h5 className="card-title">{restaurant.name}</h5>
          <p className="card-text">
            <strong>Phone:</strong> {restaurant.phone} <br />
            <strong>Email:</strong> {restaurant.email} <br />
            <strong>Address:</strong> {restaurant.address} <br />
            <strong>Area:</strong> {restaurant.area}
          </p>
        </div>
      </div>
    </Link>
  );
};

// PropTypes validation
RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
  }).isRequired,
};

export default RestaurantCard;
