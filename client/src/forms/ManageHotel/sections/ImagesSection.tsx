import {useFormContext} from "react-hook-form";
import {HotelFormData} from "../ManageHotelForm";
type ImagesSectionProps = {};

const ImagesSection = ({}: ImagesSectionProps) => {
  const {
    register,
    formState: {errors},
  } = useFormContext<HotelFormData>();
  return (
    <div>
      <h2 className="text-2xl mb-3">Images</h2>
      <div className="border rounded p-4 flex flex-col gap-4">
        <input
          type="file"
          multiple
          accept="image/*"
          className="w-full font-normal"
          {...register("imageFiles", {
            validate: (img) => {
              const total = img.length;
              if (total === 0) {
                return "Atleast 1 image needs to be added";
              }
              if (total > 6) {
                return "Not more than 6 images needed";
              }
            },
          })}
        />
      </div>
      {errors.imageFiles && (
        <span className="text-red-500">{errors.imageFiles.message}</span>
      )}
    </div>
  );
};

export default ImagesSection;
