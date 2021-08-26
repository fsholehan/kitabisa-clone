import Header from "../components/Header";
import { ChatIcon, ArrowCircleRightIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Category from "../components/Category";
import CardLarge from "../components/CardLarge";
import CardSmall from "../components/CardSmall";
import Icon from "../components/Icon";
import CardFLex from "../components/CardFLex";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// https://assets.kitabisa.cc/images/categories/icon-bencana.png
// https://assets.kitabisa.cc/images/categories/icon-balita.png
// https://assets.kitabisa.cc/images/categories/icon-medis.png
// https://assets.kitabisa.cc/images/categories/icon-list.png
function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="w-full bg-blue-500 sticky top-0 z-50">
        <Header />
      </div>
      <main className="max-w-xl mx-auto pb-16">
        <section className="bg-white p-4">
          <h1 className="text-gray-600 text-lg font-semibold my-2 pb-2">
            Ingin Menggalang Dana?
          </h1>
          <div className="w-full flex flex-col space-y-3 mt-3">
            <button className="text-white bg-blue-500 px-3 py-2 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-150">
              Galang Dana Sekarang
            </button>
            <button className="text-blue-500 hover:text-white border border-blue-500 bg-transparent hover:bg-blue-500 px-3 py-2 rounded-full text-lg font-semibold transition duration-150 flex items-center justify-center space-x-2">
              <ChatIcon className="h-5" />
              <p>Tanya Tentang Galang Dana</p>
            </button>
          </div>
        </section>
        {/* Category */}
        <section className="bg-white p-4 mt-2 overflow-x-hidden">
          <div className="grid grid-cols-4 gap-2">
            <Category
              img="https://firebase-kanvas.imgix.net/tile_homepage/icon-donasi.png"
              title="Donasi"
            />
            <Category
              img="https://firebase-kanvas.imgix.net/tile_homepage/icon-zakat.png"
              title="Zakat"
            />
            <Category
              img="https://firebase-kanvas.imgix.net/tile_homepage/icon-kbplus.png"
              title="Saling Jaga"
            />
            <Category
              img="https://firebase-kanvas.imgix.net/tile_homepage/icon-kbplus.png"
              title="Saling Jaga"
            />
          </div>
        </section>
        {/* Donasi Cepat */}
        <section className="bg-white p-4 mt-2">
          <h1 className="text-gray-600 text-lg font-semibold my-2 pb-2">
            Penggalangan Dana Mendesak
          </h1>
          <div className="flex overflow-x-scroll space-x-4">
            <Link to="/view">
              <CardLarge
                img="https://images.unsplash.com/photo-1487800940032-1cf211187aea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
                title="Ayo bangun Masjid seperti pada gambar"
                progress="w-24"
                time="30"
                total="10000000"
              />
            </Link>
            <Link to="/view">
              <CardLarge
                img="https://images.unsplash.com/photo-1487800940032-1cf211187aea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
                title="Ayo bangun Masjid seperti pada gambar"
                progress="w-12"
                time="30"
                total="10000000"
              />
            </Link>
            <Link to="/view">
              <CardLarge
                img="https://images.unsplash.com/photo-1487800940032-1cf211187aea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
                title="Ayo bangun Masjid seperti pada gambar"
                progress="w-48"
                time="30"
                total="10000000"
              />
            </Link>
          </div>
        </section>
        {/* Banner */}
        <section className="mt-2">
          <img
            src="https://firebase-kanvas.imgix.net/kilasbalik/installapps_sedekah.png?auto=compress,format&cs=tinysrgb&fm=pjpg&fit=scale&dpr=2"
            alt=""
            className="object-cover"
          />
        </section>
        {/* Program spesial */}
        <section className="bg-white p-4 mt-2">
          <h1 className="text-gray-600 text-lg font-semibold my-2 pb-2">
            Program Spesial Kitabisa
          </h1>
          <div className="flex overflow-x-scroll space-x-4">
            <Link to="/view">
              <CardLarge
                img="https://images.unsplash.com/photo-1487800940032-1cf211187aea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
                title="Ayo bangun Masjid seperti pada gambar"
                progress="w-8"
                time="30"
                total="10000000"
              />
            </Link>
            <Link to="/view">
              <CardLarge
                img="https://images.unsplash.com/photo-1487800940032-1cf211187aea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
                title="Ayo bangun Masjid seperti pada gambar"
                progress="w-28"
                time="30"
                total="10000000"
              />
            </Link>
            <Link to="/view">
              <CardLarge
                img="https://images.unsplash.com/photo-1487800940032-1cf211187aea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
                title="Ayo bangun Masjid seperti pada gambar"
                progress="w-full"
                time="30"
                total="10000000"
              />
            </Link>
          </div>
        </section>
        <section className="bg-white p-4 mt-2">
          <div className="flex justify-between items-center my-2 pb-2">
            <h1 className="text-gray-600 text-lg font-semibold ">
              Program Spesial Kitabisa
            </h1>
            <p className="text-blue-500 cursor-pointer">Lihat lainnya</p>
          </div>
          <div className="flex overflow-x-scroll space-x-4 flex-shrink-0">
            <CardSmall
              title="Ayo bangun Masjid seperti pada gambar"
              img="https://images.unsplash.com/photo-1487800940032-1cf211187aea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
              author="Rumah Fuad Indonesia"
              total={95070000}
              progress="w-4"
            />
            <CardSmall
              title="Ayo bangun Masjid seperti pada gambar"
              img="https://images.unsplash.com/photo-1487800940032-1cf211187aea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
              author="Rumah Fuad Indonesia"
              total={95070000}
              progress="w-4"
            />
            <CardSmall
              title="Ayo bangun Masjid seperti pada gambar"
              img="https://images.unsplash.com/photo-1487800940032-1cf211187aea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
              author="Rumah Fuad Indonesia"
              total={95070000}
              progress="w-4"
            />
            <CardSmall
              title="Ayo bangun Masjid seperti pada gambar"
              img="https://images.unsplash.com/photo-1487800940032-1cf211187aea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
              author="Rumah Fuad Indonesia"
              total={95070000}
              progress="w-4"
            />
            <CardSmall
              title="Ayo bangun Masjid seperti pada gambar"
              img="https://images.unsplash.com/photo-1487800940032-1cf211187aea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
              author="Rumah Fuad Indonesia"
              total={95070000}
              progress="w-4"
            />
            <CardSmall
              title="Ayo bangun Masjid seperti pada gambar"
              img="https://images.unsplash.com/photo-1487800940032-1cf211187aea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
              author="Rumah Fuad Indonesia"
              total={95070000}
              progress="w-4"
            />
            <div className="flex flex-col text-blue-500 items-center justify-center cursor-pointer">
              <ArrowCircleRightIcon className="h-9" />
              <h1 className="font-bold text-sm whitespace-nowrap">
                Lihat Semuanya
              </h1>
            </div>
          </div>
        </section>
        {/* section category */}
        <section className="bg-white p-4 mt-2">
          <h1 className="text-gray-600 text-lg font-semibold my-2 pb-2">
            Pilih Kategori Favoritmu
          </h1>
          <div className="grid grid-cols-4 gap-1">
            <Icon
              img="https://assets.kitabisa.cc/images/categories/icon-bencana.png"
              title="Bencana Alam"
              active={true}
            />
            <Icon
              img="https://assets.kitabisa.cc/images/categories/icon-balita.png"
              title="Balita & Anak Sakit"
            />
            <Icon
              img="https://assets.kitabisa.cc/images/categories/icon-medis.png"
              title="Bantuan Medis & Alat Kesehatan"
            />
            <Icon
              img="https://assets.kitabisa.cc/images/categories/icon-list.png"
              title="Lainnya"
            />
          </div>
          <div className="mt-5">
            <CardFLex
              title="Ayo bangun Masjid seperti pada gambar"
              img="https://images.unsplash.com/photo-1487800940032-1cf211187aea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
              author="Rumah Fuad Indonesia"
              total={95070000}
              progress="w-18"
              time="30"
            />
            <CardFLex
              title="Ayo bangun Masjid seperti pada gambar"
              img="https://images.unsplash.com/photo-1487800940032-1cf211187aea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
              author="Rumah Fuad Indonesia"
              total={95070000}
              progress="w-16"
              time="30"
            />
            <CardFLex
              title="Ayo bangun Masjid seperti pada gambar"
              img="https://images.unsplash.com/photo-1487800940032-1cf211187aea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
              author="Rumah Fuad Indonesia"
              total={95070000}
              progress="w-4"
              time="30"
            />
          </div>
          <button className="bg-blue-100 px-3 py-1 flex items-center space-x-3 mx-auto mt-3 rounded-full text-blue-600">
            <p>Lihat Semua</p>
            <ChevronRightIcon className="h-6" />
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
