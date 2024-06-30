import {useFormContext} from "react-hook-form";
import {hotelFacilities} from "../../../config/hotel-options";
import {HotelFormData} from "../ManageHotelForm";
type FacilitesSectionProps = {};

const FacilitesSection = ({}: FacilitesSectionProps) => {
  const {
    register,
    formState: {errors},
  } = useFormContext<HotelFormData>();
  return (
    <div>
      <h2 className="text-2xl mb-2">Facilities</h2>
      <div className="grid grid-cols-5 gap-3">
        {hotelFacilities.map((facility) => (
          <label className="flex gap-2 text-sm" key={facility}>
            <input
              type="checkbox"
              value={facility}
              {...register("facilities", {
                validate: (fc) => {
                  if (fc && fc.length > 0) {
                    return true;
                  } else {
                    return "At least one facility is required";
                  }
                },
              })}
            />
            {facility}
          </label>
        ))}
      </div>
      {errors.facilities && (
        <span className="text-sm font-bold text-red-500">
          {errors.facilities.message}
        </span>
      )}
    </div>
  );
};

export default FacilitesSection;
