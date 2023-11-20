"use client";

import { Footer, Navbar } from "@/components";

export default function Home() {
  return (
    <div className="grid grid-cols-[auto_minmax(0,_1fr)_0] md:grid-cols-[4rem_minmax(0,_1fr)_0]">
    {/* <div className="flex "> */}
      <div className="">
      {/* <div className="w-0 md:w-[4rem] container"> */}
        <header>
          <Navbar />
        </header>
      </div>
      <div className="flex flex-col w-full h-screen justify-between">
        <main className="bg-black text-white">
          <p>aqui va el contenido
            
          </p>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
