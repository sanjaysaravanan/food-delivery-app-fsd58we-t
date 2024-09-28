import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DishCard from "../../components/DishCard/DishCard";
import { getAllDishes } from "../../apis";

const RestaurantDishes = () => {
  const { id } = useParams(); // Get restaurant ID from the URL
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const data = await getAllDishes(id);
        setDishes(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDishes();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1>Dishes for Restaurant ID: {id}</h1>
      <div className="row">
        {dishes.length > 0 ? (
          dishes.map((dish, index) => (
            <div className="col-md-4" key={index}>
              <DishCard
                name={dish.name}
                image={dish.image}
                description={dish.description}
                price={dish.price}
              />
            </div>
          ))
        ) : (
          <p>No dishes available for this restaurant.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantDishes;
