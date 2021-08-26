function CardFLex({ img, title, author, progress, total, time }) {
  return (
    <div className="flex space-x-3 items-center border-b-2 relative pb-5 cursor-pointer mt-4 w-auto h-36">
      <div className="w-48 h-32">
        <img
          src={img}
          alt=""
          className="object-cover rounded-md max-w-full h-full"
        />
      </div>
      <div className="flex flex-col space-y-2 flex-grow-0 sm:flex-grow">
        <h1 className="font-medium text-gray-700 text-sm">{title}</h1>
        <h2 className="font-medium text-gray-500 text-xs">{author}</h2>
        <div>
          <div className="h-1 w-full bg-gray-300 rounded-full">
            <div className={`h-full ${progress} bg-blue-500 rounded-full`} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Terkumpul</p>
            <h3 className="font-semibold text-gray-900">Rp. {total}</h3>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Sisa hari</p>
            <h3 className="font-semibold text-gray-900">{time}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFLex;
