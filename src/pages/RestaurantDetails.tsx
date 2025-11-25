import { useParams } from "react-router-dom";
import { restaurants } from "../data/restaurants";

const RestaurantDetails = () => {
  const { id } = useParams();

  const data = restaurants.find((r) => r.id === Number(id));

  if (!data) {
    return <h2 className="p-6 text-xl">Restaurant Not Found</h2>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">

      <img
        src={data.image}
        alt={data.name}
        className="w-full h-72 object-cover rounded-xl mb-6"
      />

      <h1 className="text-3xl font-bold">{data.name}</h1>
      <p className="text-gray-600 text-lg">{data.cuisine}</p>

      <div className="mt-4 flex gap-4">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">
          ⭐ {data.rating}
        </span>

        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">
          💰 {data.cost}
        </span>

        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded text-sm">
          ⏱ {data.deliveryTime}
        </span>
      </div>

      <div className="mt-6 text-gray-700 leading-7">
        <p>
          Welcome to <b>{data.name}</b>!  
          This is a premium restaurant serving delicious {data.cuisine} dishes.
          Enjoy fast delivery and top quality food.
        </p>
      </div>
    </div>
  );
};

export default RestaurantDetails;
