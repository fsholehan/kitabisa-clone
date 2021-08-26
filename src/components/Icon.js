function Icon({ img, title, active }) {
  return (
    <div className="flex flex-col items-center space-y-3 cursor-pointer">
      <div
        className={`bg-gray-100 p-3 rounded-full w-12 ${
          active && "border border-blue-500 bg-white"
        }`}
      >
        <img src={img} alt="" />
      </div>
      <h2 className="md:text-xs text-xxs text-gray-500 text-center">{title}</h2>
    </div>
  );
}

export default Icon;
