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

// import { Link } from "react-router-dom";

// interface RestaurantCardProps {
//   restaurant: {
//     id: number;
//     image: string;
//     name: string;
//     cuisine: string;
//     rating: number;
//     cost: string;
//     deliveryTime: string;
//     offers: boolean;
//     vouchers: boolean;
//     deals: boolean;
//   };
// }

// const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
//   const {
//     id,
//     image,
//     name,
//     cuisine,
//     rating,
//     cost,
//     deliveryTime,
//     offers,
//     vouchers,
//     deals
//   } = restaurant;

//   return (
//     <Link to={`/restaurant/${id}`}>
//       <div className="rounded-xl shadow hover:shadow-lg transition bg-white overflow-hidden cursor-pointer">

//         {/* IMAGE */}
//         <img src={image} alt={name} className="w-full h-40 object-cover" />

//         {/* CONTENT */}
//         <div className="p-4 flex justify-between">

//           {/* LEFT SIDE */}
//           <div>
//             <h3 className="text-lg font-semibold">{name}</h3>
//             <p className="text-gray-600">{cuisine}</p>

//             <span className="inline-block mt-2 text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
//               ⭐ {rating}
//             </span>

//             {/* BADGES */}
//             <div className="flex gap-2 mt-3 flex-wrap">
//               {offers && (
//                 <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
//                   Offer
//                 </span>
//               )}
//               {vouchers && (
//                 <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
//                   Voucher
//                 </span>
//               )}
//               {deals && (
//                 <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
//                   Deal
//                 </span>
//               )}
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="text-right flex flex-col justify-between">
//             <p className="text-gray-700 font-semibold">{cost}</p>
//             <p className="text-sm text-gray-500 mt-1">⏱ {deliveryTime}</p>
//           </div>

//         </div>
//       </div>
//     </Link>
//   );
// };

// export default RestaurantCard;



// import React from "react";
// import { Link } from "react-router-dom";

// export default function RestaurantCard({ id, name, cuisine, rating, costForTwo, img }) {
//   return (
//     <Link to={`/restaurant/${id}`} className="card">
//       <img src={img} className="card-img" />
//       <div className="card-body">
//         <h3>{name}</h3>
//         <p className="muted">{cuisine.join(" • ")}</p>
//         <div className="meta">
//           <span>⭐ {rating}</span>
//           <span>{costForTwo}</span>
//         </div>
//       </div>
//     </Link>
//   );
// }
