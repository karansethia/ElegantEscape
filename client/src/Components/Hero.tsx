import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="flex flex-row mt-2 ">
      <div className="w-[60%] z-0">
        <img src={hero} className="w-[98%]" />
      </div>
      <div className="flex flex-col w-[40%] items-end justify-end gap-5 bg-hero bg-no-repeat bg-cover bg-right-top z-10">
        <h3 className="font-rouge text-[5rem] text-[#9E3900] leading-none">
          Experience Unparalled Luxury{" "}
        </h3>
        <p className="font-poppins text-sm text-slate-600">
          Exclusive luxury hotel bookings with personalized concierge service.
        </p>
        <button className="bg-[#FEC785] px-6 py-1.5 rounded-sm text-slate-600">
          Search Hotels
        </button>
      </div>
    </div>
  );
};

export default Hero;
