import {useParams} from "react-router-dom";
import {useGetHotelDetails} from "../hooks/hotel-hooks.ts";
import ManageHotelForm from "../forms/ManageHotel/ManageHotelForm.tsx";


const EditHotel = () => {
    const {hotelId} = useParams();
    const {myHotelDetail, isLoading} = useGetHotelDetails(hotelId || "")
    console.log(hotelId)
    return (
        <ManageHotelForm isLoading={isLoading} onSave={()=>{}} hotel={myHotelDetail}/>
    );
};

export default EditHotel;