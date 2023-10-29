const Hero = () => {
  return (
    <div className="bg-hero-gradient">
      <section className="max-container padding-container flex flex-col gap-5 py-10">
        <div className="relative z-20 flex flex-1 flex-col items-center mt-5">
          <h1 className="regular-64 text-center">Quinn Woodcrafting</h1>
          <hr className="mt-2 w-3/4 h-0.5 xl:max-w-[400px] bg-black" />
          <p className="regular-24 mt-6 text-center">
            Where Your Ideas Meet Our Chisels: Custom Wood Artistry.
          </p>

          <div className="flex justify-center mt-4">
            {[...Array(7)].map((_, idx) => (
              <span key={idx} className="mx-4 text-2xl">
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="hero-imagen"></div>
      </section>
    </div>
  );
};

export default Hero;
