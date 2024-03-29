import {useState, useEffect} from 'react'

import './style.css';

import List from './List'
import Form from './Form'


function Contacts() {
    const [contacts,setContacts]=useState([
        {
            fullname:"Ali",
            phone_number:"123456"
        },
        {
            fullname:"Veli",
            phone_number:"879786"
        },
        {
            fullname:"Ayşe",
            phone_number:"457265"
        }
    ]);

useEffect(() =>{
console.log(contacts);
},[contacts]);

    return <div id="container">
        <h1>Contacts</h1>
        <List contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts} />

        


        
    </div>
}

export default Contacts
