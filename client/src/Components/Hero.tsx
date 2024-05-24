type HeroProps = {};

const Hero = ({}: HeroProps) => {
  return (
    <div className="bg-blue-700 pb-16">
      <div className="flex flex-col gap-2 container mx-auto">
        <h1 className="text-5xl text-white font-semibold">
          Make your trip Elegant and comfy
        </h1>
        <p className="text-xl text-white">
          Search best hotels for your dream vacation...
        </p>
      </div>
    </div>
  );
};

export default Hero;
