import { SearchIcon } from "@heroicons/react/outline";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  const searchHandler = () => {
    history.push("/search");
  };
  return (
    <header className="flex items-center mx-auto p-3 max-w-xl space-x-6">
      <img
        src="https://assets.kitabisa.cc/images/logos/logogram__ktbs_white.png"
        alt=""
        width="33px"
        height="33px"
      />
      <div
        className="flex bg-blue-400 px-3 py-2 flex-grow rounded-full items-center"
        onClick={searchHandler}
      >
        <input
          type="text"
          className="bg-transparent focus:outline-none flex-grow text-gray placeholder-blue-50 text-white"
          placeholder={`Coba cari "Tolong - menolong"`}
        />
        <SearchIcon className="h-4 text-white" />
      </div>
    </header>
  );
}

export default Header;
