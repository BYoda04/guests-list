import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Guests from './Guests';

const List = ({route,confirmation}) => {

    const [guests,setGuests] = useState([]);
    let total = 0;

    useEffect(()=>{
        if (route) {
            const getData = async ()=>{
                try {
                    const data = await axios.get(`https://invitation-api-danna.herokuapp.com/api/v1/${route}/get/query?confirmation=${confirmation}`);
                    setGuests(data.data.data); 
                } catch (error) {
                    console.log(error.response.data);
                };
            };

            getData()
        }
    },[confirmation,route]);

    if (guests.length) {
        guests.map(guest=>{
            return total += guest.escorts.length
        });
    };

    return (
        <div className='guest-container'>
            <div className='title'>
                <p>Invitados: {guests?.length}</p>
                <p>Acompañantes: {total}</p>
            </div>
            { guests?.map(guest=>(
                <Guests guest={guest} key={guest?.id}/>
            )) }
        </div>
    );
};

export default List;