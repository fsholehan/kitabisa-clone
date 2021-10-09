import { ArrowLeftIcon } from "@heroicons/react/outline";
import { CheckCircleIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function ViewPage() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transistionNavBar = () => {
    if (window.scrollY > 80) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  console.log(show);

  useEffect(() => {
	  window.scrollTo(0,0)
    window.addEventListener("scroll", transistionNavBar);
    return () => window.removeEventListener("scroll", transistionNavBar);
  }, []);

  return (
    <div className="w-full max-h-screen">
      <div
        className={`${
          show && "bg-white border-b-2"
        } w-full  p-4   sticky top-0 transition duration-150`}
      >
        <div className="max-w-[34rem] mx-auto flex items-center text-gray-600 space-x-4 md:px-2">
          <ArrowLeftIcon
            className={`${
              show ? "text-gray-600" : "text-white"
            } h-5 cursor-pointer transition duration-150`}
            onClick={() => history.push("/")}
          />
          <h2
            className={`${
              show ? "opacity-100" : "opacity-0"
            }  truncate transition duration-150`}
          >
            Bantu Anak Palestina Lewati Musim Dingin Mematikan
          </h2>
        </div>
      </div>
      <main className="max-w-[34rem] mx-auto">
        <section className="-mt-14 bg-white pb-5">
          <img
            src="https://images.unsplash.com/photo-1487800940032-1cf211187aea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
            alt=""
            className="object-cover h-56 md:h-72 w-full"
          />
          <h1 className="px-3 py-2 text-xl text-gray-700 font-bold">
            Bantu Anak Palestina Lewati Musim Dingin Mematikan
          </h1>
          <div className="py-1 px-3 flex items-center space-x-2">
            <h2 className="text-blue-500 font-semibold text-xl">
              Rp 3.900.879
            </h2>
            <p className="text-xs text-gray-600">terkumpul dari</p>
            <p className="text-sm text-gray-600">Rp 4.000.000</p>
          </div>
          <div className="px-3 py-1">
            <div className="h-1 w-full bg-gray-300 rounded-full">
              <div className="h-full w-72 bg-blue-500 rounded-full" />
            </div>
          </div>
          <div className="px-3 py-1 flex items-center justify-between">
            <div className="flex space-x-1 items-end">
              <h1 className="text-lg text-gray-700 font-bold">7909</h1>
              <p className="text-xs text-gray-600 pb-1">Donasi</p>
            </div>
            <div className="flex space-x-1 items-end">
              <h1 className="text-lg text-gray-700 font-bold">79</h1>
              <p className="text-xs text-gray-600 pb-1">Hari lagi</p>
            </div>
          </div>
          <div className="px-3 py-1">
            <button
              type="button"
              className="w-full bg-[#d81d5b] hover:bg-[#CB1552] py-3 text-white rounded-md font-semibold text-lg"
            >
              Donasi Sekarang!
            </button>
          </div>
        </section>
        <section className="bg-white p-3 mt-2">
          <h1 className="font-bold text-gray-700 text-lg">
            Informasi Penggalangan Dana
          </h1>
          <div className="p-3 border rounded mt-3">
            <h4 className="text-gray-600 font-semibold text-sm">
              Penggalang Dana
            </h4>
            <div className="flex items-center space-x-3 mt-3 cursor-pointer">
              <img
                src="https://img.freepik.com/free-photo/yellow-letter-f_1232-701.jpg?size=338&ext=jpg"
                alt=""
                className="h-14 w-14 rounded-full object-contain"
              />
              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-1">
                  <h1 className="text-gray-600 font-semibold text-sm">
                    Fuad For Indonesia
                  </h1>
                  <CheckCircleIcon className="h-5 text-blue-500" />
                </div>
                <p className="text-xs text-gray-600">Identitas terverifikasi</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white p-4 relative mt-2">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold">Cerita</h1>
            <p className="text-gray-600">2 Januari 2020</p>
          </div>
          <div className="py-2">
            <p className="line-clamp-5 font-semibold text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus provident placeat, tenetur neque blanditiis libero
              nostrum nihil tempora minima itaque commodi maiores repellat
              quisquam aperiam adipisci quos illo nulla accusamus asperiores
              facere. Maiores magnam nesciunt quam alias libero error minus
              voluptates velit adipisci consequatur illo ipsum assumenda
              quibusdam, molestias ratione minima deleniti repellat explicabo
              inventore rem recusandae vitae, nihil maxime!
            </p>
          </div>
          <div className="filter blur-sm opacity-90 bg-white w-full h-12 absolute top-32 right-0"></div>
          <div className="bg-white my-1 text-center">
            <button className="bg-blue-200 py-1 px-4 text-xs rounded-full text-blue-500 inline-flex items-center">
              Baca selengkapnya
              <ChevronDownIcon className="h-4 ml-1" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ViewPage;
