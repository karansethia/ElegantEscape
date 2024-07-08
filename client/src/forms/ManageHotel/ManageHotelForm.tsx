import {useForm, FormProvider} from "react-hook-form";
import DetailsSection from "./sections/DetailsSection";
import TypesSection from "./sections/TypesSection";
import FacilitesSection from "./sections/FacilitesSection";
import GuestSection from "./sections/GuestSection";
import ImagesSection from "./sections/ImagesSection";
import {HotelType} from "../../types";
import {useEffect} from "react";



export type HotelFormData = {
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  pricePerNight: number;
  starRating: number;
  facilities: string[];
  imageFiles: FileList;
  adultCount: number;
  childCount: number;
};

type ManageHotelFormProps = {
  onSave: (data: FormData) => void;
  isLoading: boolean;
  hotel: HotelType
};

const ManageHotelForm = ({onSave, isLoading, hotel}: ManageHotelFormProps) => {
  const form = useForm<HotelFormData>();
  const {reset} = form
  useEffect(()=>{
    reset(hotel)
  },[hotel, reset])
  const submitHandler = (formDataJson: HotelFormData) => {
    //todo: call api
    const formData = new FormData();
    formData.append("name", formDataJson.name);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);
    formData.append("description", formDataJson.description);
    formData.append("type", formDataJson.type);
    formData.append("pricePerNight", formDataJson.pricePerNight.toString());
    formData.append("starRating", formDataJson.starRating.toString());
    formData.append("adultCount", formDataJson.adultCount.toString());
    formData.append("childCount", formDataJson.childCount.toString());
    formDataJson.facilities.forEach((fc, index) => {
      formData.append(`facilities[${index}]`, fc);
    });
    Array.from(formDataJson.imageFiles).forEach((file) => {
      formData.append("imageFiles", file);
    });
    for (const value of formData.values()) {
      console.log(value);
    }

    onSave(formData);
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
            className="bg-blue-600 disabled:bg-slate-600 text-white font-bold hover:bg-blue-500 text-xl p-2"
            disabled={isLoading}
          >
            {!isLoading ? "Save" : "Loading"}
          </button>
        </span>
      </form>
    </FormProvider>
  );
};

export default ManageHotelForm;
