import {useFormContext} from "react-hook-form";
import {hotelTypes} from "../../../config/hotel-options";
import {HotelFormData} from "../ManageHotelForm";
type TypesSectionProps = {};

const TypesSection = ({}: TypesSectionProps) => {
  const {
    register,
    watch,
    formState: {errors},
  } = useFormContext<HotelFormData>();
  const typeWatch = watch("type");
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Type</h2>
      <div className="grid grid-cols-5 gap-2">
        {hotelTypes.map((type) => (
          <label
            key={type}
            className={
              typeWatch === type
                ? "cursor-pointer bg-blue-300 text-sm rounded-sm px-4 py-2 font-semibold"
                : "cursor-pointer bg-slate-300 text-sm rounded-sm px-4 py-2"
            }
          >
            <input
              type="radio"
              className="hidden"
              value={type}
              {...register("type", {
                required: "This field is required",
              })}
            />
            <span>{type}</span>
          </label>
        ))}
      </div>
      {errors.type && (
        <span className="text-red-500 text-sm font-bold">
          {errors.type.message}
        </span>
      )}
    </div>
  );
};

export default TypesSection;
