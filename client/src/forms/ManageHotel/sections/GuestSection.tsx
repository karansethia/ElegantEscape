import {useFormContext} from "react-hook-form";
import {HotelFormData} from "../ManageHotelForm";
type GuestSectionProps = {};

const GuestSection = ({}: GuestSectionProps) => {
  const {
    register,
    formState: {errors},
  } = useFormContext<HotelFormData>();
  return (
    <div>
      <h2 className="text-2xl mb-3">Guest</h2>
      <div className="grid grid-cols-2 p-6 gap-5 bg-slate-300">
        <label className="text-slate-700 text-sm font-semibold">
          Adults
          <input
            className="border rounded w-full py-2 px-3 font-normal"
            type="number"
            min={1}
            {...register("adultCount", {
              required: "This field is required",
            })}
          />
          {errors.adultCount && (
            <span className="text-sm font-bold text-red-500">
              {errors.adultCount.message}
            </span>
          )}
        </label>
        <label className="text-slate-700 text-sm font-semibold">
          Children
          <input
            className="border rounded w-full py-2 px-3 font-normal"
            type="number"
            min={0}
            {...register("childCount", {
              required: "This field is required",
            })}
          />
          {errors.childCount && (
            <span className="text-sm font-bold text-red-500">
              {errors.childCount.message}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default GuestSection;
