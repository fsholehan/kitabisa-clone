function CardSearch({ img, title, author }) {
  return (
    <div className="w-20 h-14 flex space-x-2 items-center mt-4 cursor-pointer ">
      <img
        src={img}
        alt=""
        className="object-cover rounded-md w-full h-full"
        width="80"
        height="55"
      />
      <div className="flex flex-col space-y-1 w-52 md:w-auto">
        <h1 className="truncate text-sm text-gray-700 font-semibold">
          {title}
        </h1>
        <p className="text-xs text-gray-600">{author}</p>
      </div>
    </div>
  );
}

export default CardSearch;
