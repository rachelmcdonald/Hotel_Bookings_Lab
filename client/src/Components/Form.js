import { useState } from 'react';

const Form = () => {

    const [ newBooking , setNewBooking ] = useState("");

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
    } 

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="submit" value="Post"/>
        </form>
    )
}

export default Form;