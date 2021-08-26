function CardSmall({ img, title, author, progress, total }) {
  return (
    <div className="flex flex-col w-40 rounded-md shadow-md border my-3 cursor-pointer">
      <img src={img} alt="" className="object-cover rounded-t-md" />
      <div className="flex flex-col space-y-3">
        <h2 className="px-2 text-sm text-gray-900 font-semibold">{title}</h2>
        <h4 className="truncate text-xs text-gray-600 font-semibold px-2">
          {author}
        </h4>
        <div className="px-2">
          <div className="h-2 w-full bg-gray-300 rounded-full">
            <div className={`h-full ${progress} bg-blue-500 rounded-full`} />
          </div>
        </div>
        <div className="px-2">
          <p className="text-xs text-gray-600">Terkumpul</p>
          <h5 className="text-gray-900 font-semibold">Rp {total}</h5>
        </div>
      </div>
    </div>
  );
}

export default CardSmall;
