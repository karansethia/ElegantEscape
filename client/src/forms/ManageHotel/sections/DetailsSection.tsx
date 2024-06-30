import {useFormContext} from "react-hook-form";
import {HotelFormData} from "../ManageHotelForm";

type DetailsSectionProps = {};

const DetailsSection = ({}: DetailsSectionProps) => {
  const {
    register,
    formState: {errors},
  } = useFormContext<HotelFormData>();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-light mb-3 font-poppins tracking-wider">
        Add Hotel
      </h1>
      <label className="text-gray-700 text-sm font-poppins flex-1">
        Name
        <input
          type="text"
          className="border rounded w-full py-2 border-slate-500 my-2 px-2 font-normal text-xs invalid:border-red-500"
          {...register("name", {
            required: "This field is required",
          })}
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </label>
      <div className="flex gap-4">
        <label className="text-gray-700 text-sm font-poppins flex-1">
          City
          <input
            type="text"
            className="border rounded w-full py-2 border-slate-500 my-2 px-2 font-normal text-xs invalid:border-red-500"
            {...register("city", {
              required: "This field is required",
            })}
          />
          {errors.city && (
            <span className="text-red-500">{errors.city.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-poppins flex-1">
          Country
          <input
            type="text"
            className="border rounded w-full py-2 border-slate-500 my-2 px-2 font-normal text-xs invalid:border-red-500"
            {...register("country", {
              required: "This field is required",
            })}
          />
          {errors.country && (
            <span className="text-red-500">{errors.country.message}</span>
          )}
        </label>
      </div>
      <label className="text-gray-700 text-sm font-poppins flex-1">
        Description
        <textarea
          rows={5}
          className="border rounded w-full py-2 border-slate-500 my-2 px-2 font-normal text-xs invalid:border-red-500"
          {...register("description", {
            required: "This field is required",
          })}
        />
        {errors.description && (
          <span className="text-red-500">{errors.description.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-poppins max-w-[50%]">
        Price per Night
        <input
          type="number"
          min={1}
          className="border rounded w-full py-2 border-slate-500 my-2 px-2 font-normal text-xs invalid:border-red-500"
          {...register("pricePerNight", {
            required: "This field is required",
          })}
        />
        {errors.pricePerNight && (
          <span className="text-red-500">{errors.pricePerNight.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-poppins max-w-[50%]">
        Star Rating
        <select
          className="border rounded w-full py-2 border-slate-500 my-2 px-2 font-normal text-xs invalid:border-red-500"
          {...register("startRating", {
            required: "This field is required",
          })}
        >
          <option value="" className="text-sm font-bold">
            Select as Rating
          </option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        {errors.startRating && (
          <span className="text-red-500">{errors.startRating.message}</span>
        )}
      </label>
    </div>
  );
};

export default DetailsSection;
