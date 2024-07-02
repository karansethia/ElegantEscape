import ManageHotelForm from "../forms/ManageHotel/ManageHotelForm";
import {useHotelRegister} from "../hooks/hotel-hooks";

type AddHotelProps = {};

const AddHotel = ({}: AddHotelProps) => {
  const {registerHotel, isLoading} = useHotelRegister();
  const onSave = (data: FormData) => {
    registerHotel(data);
  };
  return (
    <div className="flex bg-flowers bg-cover bg-no-repeat bg-fixed">
      <ManageHotelForm onSave={onSave} isLoading={isLoading} />
    </div>
  );
  // return ;
};

export default AddHotel;
