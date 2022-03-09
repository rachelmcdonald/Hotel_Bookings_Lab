import { useState } from 'react';
import { postBooking } from '../BookingsService';

const Form = ({addBooking}) => {

    const [ newBooking , setNewBooking ] = useState({});

    const onChange = (evt) => {
        newBooking[evt.target.id] = evt.target.value;
        setNewBooking(newBooking)
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        postBooking(newBooking)
        .then((data) => {
            addBooking(data)
        })
    } 

    return (
        <form onSubmit={handleFormSubmit}>
            <input id="name" onChange={onChange} type="text" placeholder="Name" />
            <input id="email" onChange={onChange} type="text" placeholder="Email" />
            <input type="submit" value="Post"/>
        </form>
    )
}

export default Form;