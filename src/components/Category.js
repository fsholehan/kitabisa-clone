function Category({ img, title }) {
  return (
    <div className="flex flex-col justify-center items-center space-y-2 cursor-pointer overflow-hidden">
      <img
        src={img}
        alt=""
        className="object-contain h-14 w-14 md:h-20 md:w-20"
      />
      <h1 className="text-gray-500 text-xs md:text-lg whitespace-nowrap">
        {title}
      </h1>
    </div>
  );
}

export default Category;
