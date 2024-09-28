import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { addToCart } from "../../apis";
import { useContext, useState } from "react";
import AppContext from "../../AppContext";

const DishCard = ({ name, image, description, price }) => {
  const { state } = useContext(AppContext);
  const [qty, setQty] = useState(1);

  const { id } = useParams();

  const handleAddToCart = async () => {
    try {
      const data = await addToCart(state.userDetails.phoneNumber, {
        price,
        qty,
        image,
        restrauntId: id,
        name,
      });
      alert(data.message);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="card mb-3" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <strong>Price:</strong> ${price}
        </p>

        <label>Qty:</label>
        <select
          value={qty}
          onChange={(e) => {
            const { value } = e.target;
            setQty(value);
          }}
        >
          {[1, 2, 3].map((v) => (
            <option value={v} key={v}>
              {v}
            </option>
          ))}
        </select>
        <button onClick={handleAddToCart}>Add To Cart</button>
      </div>
    </div>
  );
};

DishCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default DishCard;
