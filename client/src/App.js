import { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form';
import BookingsContainer from './Containers/BookingsContainer';
import { getBookings } from './BookingsService';

function App() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings()
    .then((data) => {
      setBookings(data)
    })
  }, [])

  return (
    <>
    <h1>Hotel still to be named..</h1>
    <Form/>
    <BookingsContainer bookings={bookings}/>
    </>
  );
}

export default App;
