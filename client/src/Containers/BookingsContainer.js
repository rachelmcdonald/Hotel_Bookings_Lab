import Booking from "../Components/Booking";


const BookingsContainer = ({bookings}) => {

    const bookingItems = bookings.map((booking)=>{
        return <Booking booking={booking} key={booking._id} />
    }) 


    return (
        <>
        <p>This will be a list of bookings</p>
        {bookingItems}
        </>
    )
}

export default BookingsContainer;