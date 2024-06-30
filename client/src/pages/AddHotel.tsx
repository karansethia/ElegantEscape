import ManageHotelForm from "../forms/ManageHotel/ManageHotelForm";

type AddHotelProps = {};

const AddHotel = ({}: AddHotelProps) => {
  return (
    <div className="flex bg-flowers bg-cover bg-no-repeat bg-fixed">
      <ManageHotelForm />
    </div>
  );
  // return ;
};

export default AddHotel;
