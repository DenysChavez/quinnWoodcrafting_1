import Image from "next/image";

function LatestProducts() {
  const products = [
    {
      name: "Olive Wood Cheese Board",
      description: "Made from a single piece of sustainably-sourced olive wood",
      price: "$99.99",
      imageSrc: "/wood_hammer.jpg",
    },
    {
      name: "Whiskey Smoker",
      description:
        "Elevate your whiskey experience with our sophisticated Whiskey Smoker.",
      price: "$80.99",
      imageSrc: "/wood_hammer.jpg",
    },
    {
      name: "Wood Hammer",
      description: "Hand-carved from select hardwoods",
      price: "$80.99",
      imageSrc: "/wood_hammer.jpg",
    },
  ];

  return (
    <div className="bg-background-10">
<section className=" bg-background-10 max-container padding-container flex flex-col gap-5 py-10">
      <h2 className="text-white text-3xl text-center">LATEST PRODUCTS</h2>
      <div className="flex justify-between flex-row mb-[10px] gap-[20px]">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between mb-0 product-border min-w-[342px] max-w-[342px]"
          >
            <Image
              src={product.imageSrc}
              alt={product.name}
              width={250}
              height={250}
              objectFit="cover"
              className="h-[250px] w-[300px] object-cover block"
            />
            <h2 className="regular-24 font-semibold mt-4 mb-2 text-white">{product.name}</h2>
            <p className="regular-20 font-semibold text-gray-10 w-[80%] mb-4">{product.description}</p>
            <span className="text-lg font-bold text-gold-10 mb-2">{product.price}</span>
          </div>
        ))}
      </div>
    </section>
    </div>
    
  );
}

export default LatestProducts;
