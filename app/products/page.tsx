import Image from "next/image";

const products = [
  {
    name: "Olive Wood Cheese Board",
    description: "Made from a single piece of sustainably-sourced olive wood",
    price: "$20.00",
    imageSrc: "/cheese_board.jpg",
  },
  {
    name: "Whiskey Smoker",
    description:
      "Elevate your whiskey experience with our sophisticated Whiskey Smoker.",
    price: "$15.00",
    imageSrc: "/wiskey_smoker.jpg",
  },
  {
    name: "Wood Hammer",
    description: "Hand-carved from select hardwoods",
    price: "$25.00",
    imageSrc: "/wood_hammer.jpg",
  },
];

const page = () => {
  return (
    <div className="mt-16 regular-20">
      <section className="max-container padding-container flex flex-col py-10 text-center justify-center">
        <h1 className="regular-40">Products</h1>
        <div className="flex flex-wrap gap-10 justify-center mt-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between mb-0 product-border min-w-[342px] max-w-[342px]"
            >
              <div className="h-[250px] w-[300px] relative overflow-hidden">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill={true}
                  className="h-[250px] w-[300px] object-cover"
                />
              </div>
              <h2 className="regular-24 font-semibold mt-4 mb-2 text-background-10">
                {product.name}
              </h2>
              <p className="regular-20 font-semibold text-gray-10 w-[80%] mb-4">
                {product.description}
              </p>
              <span className="text-lg font-bold text-gold-10 mb-2">
                {product.price}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
