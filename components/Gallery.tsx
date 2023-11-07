import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
      <section className="max-container padding-container flex flex-col gap-5 py-10">
        <h1 className="text-white text-center text-3xl">GALLERY</h1>
        <div className="flex flex-row flex-wrap justify-between items-center gap-[16px] mx-auto my-0 py-[20px] px-[10px]">
          <div
            className="h-96 w-96 rounded-xl relative overflow-hidden box-shadow-custom"
          >
            <Image
              src={"/productsImages/whiskey_3.jpg"}
              alt="cheese board"
              fill={true}
              className="object-cover"
            />
          </div>

          <div
            className="h-96 w-96 rounded-xl relative overflow-hidden box-shadow-custom"
          >
            <Image
              src={"/productsImages/hammer_1.jpg"}
              alt="cheese board"
              fill={true}
              className="object-cover"
            />
          </div>

          <div
            className="h-96 w-96 rounded-xl relative overflow-hidden box-shadow-custom"
          >
            <Image
              src={"/productsImages/cheese_board_4.jpg"}
              alt="cheese board"
              fill={true}
              className="object-cover"
            />
          </div>

          <div
            className="h-96 w-96 rounded-xl relative overflow-hidden box-shadow-custom"
          >
            <Image
              src={"/productsImages/cheese_board_1.jpg"}
              alt="cheese board"
              fill={true}
              className="object-cover"
            />
          </div>

          <div
            className="h-96 w-96 rounded-xl relative overflow-hidden box-shadow-custom"
          >
            <Image
              src={"/productsImages/wiskey_smoker_1.jpg"}
              alt="cheese board"
              fill={true}
              className="object-cover"
            />
          </div>

          <div
            className="h-96 w-96 rounded-xl relative overflow-hidden box-shadow-custom"
          >
            <Image
              src={"/productsImages/wiskey_smoker.jpg"}
              alt="cheese board"
              fill={true}
              className="object-cover"
            />
          </div>

        </div>
        
      </section>
  );
};

export default Gallery;
