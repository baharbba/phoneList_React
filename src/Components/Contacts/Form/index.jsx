/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useState} from 'react'

function Form({addContact, contacts}) {
    
    const [form, setForm] = useState({ fullname: "", phone_number: "" });

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault() //sayfanın sürekli yenilenmesini durdurmak için

        if (form.fullname === "" || form.phone_number === "" ) {return false}

      addContact([...contacts, form]);

      setForm({ fullname: "", phone_number: "" });
    };

  return (
    <form onSubmit={onSubmit}>
        <div>
        <input
                name="fullname"
          placeholder='Full Name'
          value={form.fullname}
                  onChange={onChangeInput}
            />
          </div>
          
          <div>
              <input
          name="phone_number" placeholder='Phone Number'
          value={form.phone_number}
                  onChange={onChangeInput}
              />
          </div>
          <button className='btn'>Add</button>
    </form>
  )
}

export default Form;
