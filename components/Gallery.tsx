import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <section className="bg-background-10">
      <div className="max-container padding-container flex flex-col gap-5 py-10">
        <h1 className="text-white text-center text-3xl">GALLERY</h1>
        <div className="px-2 my-3 grid gap-7 grid-cols-gallery">
          <div className="h-[300px] rounded-xl relative overflow-hidden shadow-custom object-center">
            <Image
              src={"/productsImages/whiskey_3.jpg"}
              alt="Whiskey"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="h-[300px] rounded-xl relative overflow-hidden shadow-custom object-center">
            <Image
              src={"/productsImages/hammer_1.jpg"}
              alt="Whiskey"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="h-[300px] rounded-xl relative overflow-hidden shadow-custom object-center">
            <Image
              src={"/productsImages/cheese_board_4.jpg"}
              alt="Whiskey"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="h-[300px] rounded-xl relative overflow-hidden shadow-custom object-center">
            <Image
              src={"/productsImages/cheese_board_1.jpg"}
              alt="Whiskey"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="h-[300px] rounded-xl relative overflow-hidden shadow-custom object-center">
            <Image
              src={"/productsImages/wiskey_smoker_1.jpg"}
              alt="Whiskey"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="h-[300px] rounded-xl relative overflow-hidden shadow-custom object-center">
            <Image
              src={"/productsImages/wiskey_smoker.jpg"}
              alt="Whiskey"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
