import { ArrowLeftIcon } from "@heroicons/react/solid";
import { useHistory } from "react-router-dom";
import CardSearch from "../components/CardSearch";

function SearchPage() {
  const history = useHistory();
  return (
    <div className="h-screen">
      <div className="w-full bg-white p-4 border-b-2">
        <div className="max-w-[34rem] mx-auto flex items-center text-gray-400 space-x-4">
          <ArrowLeftIcon
            className="h-5 cursor-pointer text-gray-600"
            onClick={() => history.push("/")}
          />
          <input
            type="text"
            autoFocus
            className="flex-grow focus:outline-none placeholder-gray-300"
            placeholder={`Coba cari "Tolong - menolong"`}
          />
        </div>
      </div>
      <main className="max-w-[34rem] mx-auto">
        <section className="bg-white p-5">
          <h1 className="text-gray-700 font-medium my-2">Terakhir Dilihat</h1>
          <div className="flex flex-col w-full overflow-hidden">
            <CardSearch
              img="https://img.kitabisa.cc/size/664x357/7086f62f-15fd-4a80-b6a0-c19ed7050dd7.jpg"
              title="Untuk Muslim Minoritas: Bebaskan Lahan Masjid"
              author="Fuad For Indonesia"
            />
            <CardSearch
              img="https://img.kitabisa.cc/size/664x357/7086f62f-15fd-4a80-b6a0-c19ed7050dd7.jpg"
              title="Untuk Muslim Minoritas: Bebaskan Lahan Masjid"
              author="Fuad For Indonesia"
            />
            <CardSearch
              img="https://img.kitabisa.cc/size/664x357/7086f62f-15fd-4a80-b6a0-c19ed7050dd7.jpg"
              title="Untuk Muslim Minoritas: Bebaskan Lahan Masjid"
              author="Fuad For Indonesia"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default SearchPage;
