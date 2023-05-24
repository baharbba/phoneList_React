/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react'
import List from './List'
import Form from './Form'
import './styles.css'

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: 'mehmet',
      phone_number: "44455"
    },
    {
      
      fullname: 'bahar',
      phone_number: "12"
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
      </div>
      
  )
}

export default Contacts;
