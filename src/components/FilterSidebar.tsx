interface FilterProps {
  cuisine: string;
  setCuisine: (value: string) => void;

  rating: string;
  setRating: (value: string) => void;

  offers: boolean;
  setOffers: (value: boolean) => void;

  vouchers: boolean;
  setVouchers: (value: boolean) => void;

  deals: boolean;
  setDeals: (value: boolean) => void;
}

const FilterSidebar = ({
  cuisine,
  setCuisine,
  rating,
  setRating,
  offers,
  setOffers,
  vouchers,
  setVouchers,
  deals,
  setDeals,
}: FilterProps) => {
  return (
    <div className="w-64 bg-white p-4 shadow-md h-screen sticky top-0">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {/* CUISINE */}
      <label className="block mb-2 font-medium">Cuisine</label>
      <select
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        className="border p-2 rounded w-full"
      >
        <option value="All">All</option>
        <option value="Indian">North Indian</option>
        <option value="Chinese">Chinese</option>
        <option value="Italian">Italian</option>
        <option value="American">American</option>
        <option value="Dessert">Dessert</option>
        <option value="Cafe">Cafe</option>
        <option value="African">African</option>
      </select>

      {/* RATING */}
      <label className="block mt-4 mb-2 font-medium">Rating</label>
      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="border p-2 rounded w-full"
      >
        <option value="All">All</option>
        <option value="4">4+</option>
        <option value="3">3+</option>
        <option value="2">2+</option>
      </select>

      {/* OFFERS SECTION */}
      <h3 className="mt-6 mb-2 font-semibold text-lg">Offers & Deals</h3>

      <div className="flex items-center gap-2 mb-3">
        <input
          type="checkbox"
          checked={offers}
          onChange={(e) => setOffers(e.target.checked)}
        />
        <label>Offers Available</label>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <input
          type="checkbox"
          checked={vouchers}
          onChange={(e) => setVouchers(e.target.checked)}
        />
        <label>Accepts Vouchers</label>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <input
          type="checkbox"
          checked={deals}
          onChange={(e) => setDeals(e.target.checked)}
        />
        <label>Deals</label>
      </div>
    </div>
  );
};

export default FilterSidebar;
