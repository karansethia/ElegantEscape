import {Link} from "react-router-dom";
import {useGetHotels} from "../hooks/hotel-hooks";
import {Building, IndianRupee, MapPin} from "lucide-react";



const ManageHotel = () => {
  const {myHotels} = useGetHotels();
  console.log(myHotels);

  return (
    <div className="space-y-5">
      <span className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Hotels</h1>
        <Link to="/add-hotel" className="p-2 bg-blue-600 text-xl text-white">
          Add Hotel
        </Link>
      </span>
      <div className="grid grid-cols-1 gap-8">
        {myHotels &&
          myHotels.map((hotel, index) => (
            <div
              className="flex flex-col justify-between border border-slate-300 gap-5 p-8"
              key={index}
            >
              <span>
                <h2 className="text-2xl font-bold">{hotel.name}</h2>
                <h2 className="">{hotel.starRating} star Hotel</h2>
              </span>
              <div className="whitespace-pre-line">{hotel.description}</div>
              <section className="grid grid-cols-4 gap-2">
                <div className="border border-black flex items-center gap-2 p-3">
                  <MapPin />
                  {hotel.city},{hotel.country}
                </div>

                <div className="border border-black flex items-center gap-2 p-3">
                  <Building />
                  {hotel.type}
                </div>
                <div className="border border-black flex items-center gap-2 p-3">
                  <IndianRupee />
                  Rs {hotel.pricePerNight}
                </div>
                <div className="border border-black flex items-center gap-2 p-3">
                  <IndianRupee />
                  {hotel.adultCount} adults, {hotel.childCount} children
                </div>
              </section>
              <span className="flex justify-end">
                <Link
                  to={`${hotel._id}`}
                  className="bg-blue-500 text-white p-2"
                >
                  View Details
                </Link>
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ManageHotel;
