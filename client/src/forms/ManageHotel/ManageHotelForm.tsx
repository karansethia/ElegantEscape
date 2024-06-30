import {useForm, FormProvider} from "react-hook-form";
import DetailsSection from "./sections/DetailsSection";
import TypesSection from "./sections/TypesSection";
import FacilitesSection from "./sections/FacilitesSection";
import GuestSection from "./sections/GuestSection";
import ImagesSection from "./sections/ImagesSection";

export type HotelFormData = {
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  pricePerNight: number;
  startRating: number;
  facilities: string[];
  imageFiles: FileList;
  adultCount: number;
  childCount: number;
};

type ManageHotelFormProps = {};

const ManageHotelForm = ({}: ManageHotelFormProps) => {
  const form = useForm<HotelFormData>();
  const submitHandler = (formData: HotelFormData) => {
    //todo: call api
    console.log(formData);
  };
  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-8 border shadow-md bg-white  mx-auto m-6 p-10 font-poppins"
        onSubmit={form.handleSubmit(submitHandler)}
      >
        <DetailsSection />
        <TypesSection />
        <FacilitesSection />
        <GuestSection />
        <ImagesSection />
        <span className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold hover:bg-blue-500 text-xl p-2"
          >
            Save
          </button>
        </span>
      </form>
    </FormProvider>
  );
};

export default ManageHotelForm;
