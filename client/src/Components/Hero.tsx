import hero from "../assets/hero.png";
import border from "../assets/border.png";

const Hero = () => {
  return (
    <div className="flex flex-row mt-2 ">
      <div className="w-[55%] z-0">
        <img src={hero} className="w-[98%]" />
        <img
          src={border}
          className="w-[48%] rotate-180 -mt-[350px] filter brightness-[400]"
        />
      </div>
      <div className="flex flex-col w-[45%] items-end justify-end gap-5 bg-hero bg-no-repeat bg-custom bg-right-top z-10 pe-9">
        <h3 className="mt-[160px] font-rouge text-[5rem] text-[#9E3900] leading-none">
          Experience Unparalled <br /> Luxury{" "}
        </h3>
        <p className="font-poppins text-xs text-slate-600 w-full text-start pe-10 -mt-2">
          Exclusive luxury hotel bookings with personalized concierge service.
        </p>
        <button className="bg-[#FEC785] px-6 py-1.5 rounded-sm text-xs text-slate-600 me-5">
          Search Hotels
        </button>
      </div>
    </div>
  );
};

export default Hero;
