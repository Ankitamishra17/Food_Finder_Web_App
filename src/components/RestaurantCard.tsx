import { Link } from "react-router-dom";

interface Props {
  restaurant: {
    id: number;
    name: string;
    cuisine: string;
    rating: number;
    cost: string;
    deliveryTime: string;
    image: string;
  };
}

const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <div className="bg-white rounded-xl shadow hover:shadow-xl hover:scale-[1.03] transition p-3">
        
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 rounded-lg object-cover"
        />

        <h2 className="mt-3 text-lg font-semibold">{restaurant.name}</h2>
        <p className="text-gray-500">{restaurant.cuisine}</p>

        <div className="flex justify-between mt-2 text-sm text-gray-700">
          <span>⭐ {restaurant.rating}</span>
          <span>{restaurant.cost}</span>
          <span>{restaurant.deliveryTime}</span>
        </div>

      </div>
    </Link>
  );
};

export default RestaurantCard;



