function CardLarge({ img, title, total, time, progress }) {
  return (
    <div className="flex flex-col w-72 rounded-md border shadow-md mb-3 cursor-pointer">
      <div>
        <img src={img} alt="" className="object-cover rounded-t-md" />
      </div>
      <div className="flex flex-col space-y-5">
        <h2 className="px-3 truncate py-1">{title}</h2>
        <div className="px-3">
          <div className="h-2 w-64 bg-gray-300 rounded-full">
            <div className={`h-full ${progress} bg-blue-500 rounded-full`} />
          </div>
        </div>
        <div className="flex items-center justify-between px-3 pb-2">
          <h2 className="text-gray-800 font-semibold">Rp {total}</h2>
          <p className="text-gray-800 font-semibold">{time} hari lagi</p>
        </div>
      </div>
    </div>
  );
}

export default CardLarge;
