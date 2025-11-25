const ShimmerCard = () => {
  return (
    <div className="rounded-xl overflow-hidden bg-gray-200 animate-pulse shadow">
      <div className="w-full h-40 bg-gray-300"></div>

      <div className="p-4 space-y-3">
        <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>

        <div className="flex gap-2 mt-2">
          <div className="w-10 h-4 bg-gray-300 rounded"></div>
          <div className="w-10 h-4 bg-gray-300 rounded"></div>
        </div>

        <div className="flex justify-between mt-4">
          <div className="w-16 h-4 bg-gray-300 rounded"></div>
          <div className="w-12 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
