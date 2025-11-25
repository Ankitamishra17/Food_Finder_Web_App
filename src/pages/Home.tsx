import { useState, useEffect } from "react";
import FilterSidebar from "../components/FilterSidebar";
import RestaurantCard from "../components/RestaurantCard";
import ShimmerCard from "../components/ShimmerCard";
import { restaurants } from "../data/restaurants";

// SWIPER IMPORTS
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface HomeProps {
  search: string;
}

const Home = ({ search }: HomeProps) => {
  const [cuisine, setCuisine] = useState("All");
  const [rating, setRating] = useState("All");
  const [offers, setOffers] = useState(false);
  const [vouchers, setVouchers] = useState(false);
  const [deals, setDeals] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  const filtered = restaurants.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.cuisine.toLowerCase().includes(search.toLowerCase());

    const matchesCuisine = cuisine === "All" ||  r.cuisine.toLowerCase().includes(cuisine.toLowerCase());
    const matchesRating = rating === "All" || r.rating >= Number(rating);
    const matchesOffers = !offers || r.offers;
    const matchesVouchers = !vouchers || r.vouchers;
    const matchesDeals = !deals || r.deals;

    return (
      matchesSearch &&
      matchesCuisine &&
      matchesRating &&
      matchesOffers &&
      matchesVouchers &&
      matchesDeals
    );
  });

  return (
    <>
     {/*SWIPER CAROUSEL */}
<div className="w-full mt-0 mb-4">
  <Swiper
    modules={[Pagination, Autoplay]}
    pagination={{ clickable: true }}
    autoplay={{ delay: 2000 }}
    loop={true}
    className="w-full h-80"
  >
    <SwiperSlide>
      <img src="/images/banner4.jpg" className="w-full h-80 object-cover" />
    </SwiperSlide>

    <SwiperSlide>
      <img src="/images/banner2.jpg" className="w-full h-80 object-cover" />
    </SwiperSlide>

    <SwiperSlide>
      <img src="/images/banner3.jpg" className="w-full h-80 object-cover" />
    </SwiperSlide>
  </Swiper>
</div>


      {/* MOBILE FILTER BAR */}
      <div className="md:hidden flex gap-3 overflow-x-auto px-4 py-3 bg-white shadow-sm sticky top-0 z-40">
        <select
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          className="px-4 py-2 rounded-full bg-gray-100  text-sm"
        >
          <option value="All">Cuisine: All</option>
          <option value="Indian">North Indian</option>
          <option value="Chinese">Chinese</option>
          <option value="Italian">Italian</option>
          <option value="Dessert">Dessert</option>
          <option value="American">American</option>
          <option value="Cafe">Cafe</option>
        <option value="African">African</option>
        </select>

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="px-4 py-2 rounded-full bg-gray-100  text-sm"
        >
          <option value="All">Rating: All</option>
          <option value="4">4+ Stars</option>
          <option value="3">3+ Stars</option>
          <option value="2">2+ Stars</option>
        </select>

        <button
          onClick={() => setOffers(!offers)}
          className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap 
            ${offers ? " border-gray-600" : "bg-gray-100"}`}
        >
          Offers
        </button>

        <button
          onClick={() => setDeals(!deals)}
          className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap 
            ${deals ? " border-gray-600" : "bg-gray-100"}`}
        >
          Deals
        </button>

        <button
          onClick={() => setVouchers(!vouchers)}
          className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap 
            ${vouchers ? " border-gray-600" : "bg-gray-100"}`}
        >
          Vouchers
        </button>
      </div>

      <div className="flex">
        {/* DESKTOP SIDEBAR */}
        <div className="hidden md:block">
          <FilterSidebar
            cuisine={cuisine}
            setCuisine={setCuisine}
            rating={rating}
            setRating={setRating}
            offers={offers}
            setOffers={setOffers}
            vouchers={vouchers}
            setVouchers={setVouchers}
            deals={deals}
            setDeals={setDeals}
          />
        </div>

        {/* RESTAURANT GRID */}
                
        <div className="flex-1 p-6">

          {/* HEADING ABOVE CARDS */}
          <h2 className="text-2xl font-semibold mb-4 text-center">Top Restaurants</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array(9)
                  .fill(0)
                  .map((_, i) => <ShimmerCard key={i} />)
              : filtered.length
              ? filtered.map((r) => (
                  <RestaurantCard key={r.id} restaurant={r} />
                ))
              : "No restaurants found"}
          </div>

        </div>

      </div>
    </>
  );
};

export default Home;
