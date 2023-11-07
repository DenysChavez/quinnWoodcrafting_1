import Image from "next/image";

function LatestProducts() {
  const products = [
    {
      name: "Olive Wood Cheese Board",
      description: "Made from a single piece of sustainably-sourced olive wood",
      price: "$25.00",
      imageSrc: "/productsImages/cheese_board.jpg",
    },
    {
      name: "Whiskey Smoker",
      description:
        "Elevate your whiskey experience with our sophisticated Whiskey Smoker.",
      price: "$15.00",
      imageSrc: "/productsImages/wiskey_smoker.jpg",
    },
    {
      name: "Wood Hammer",
      description: "Hand-carved from select hardwoods",
      price: "$25.00",
      imageSrc: "/productsImages/wood_hammer.jpg",
    },
  ];

  return (
    <section className="bg-background-10">
      <div className="bg-background-10 max-container padding-container flex flex-col gap-5 py-10 h-fit">
        <h2 className="text-white text-3xl text-center">LATEST PRODUCTS</h2>
        <div className="grid grid-flow-col scroll-auto gap-[1.2rem] overscroll-x-contain scroll-snap-x scrollbar-none carrousel">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between mb-0 product-border min-w-[342px] max-w-[342px] min-h-[452px] max-h-[452px]"
            >
              <div className="h-[250px] w-[300px] relative overflow-hidden">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill={true}
                  className="h-[250px] w-[300px] object-cover"
                />
              </div>
              <h2 className="regular-24 font-semibold mt-4 mb-2 text-white">
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
      </div>
    </section>
  );
}

export default LatestProducts;
