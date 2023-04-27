import React, { useEffect, useState } from 'react';

function CustomerCreate(props) {
    const [formData, setFormData] = useState({
        name: ''
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = "http://localhost:8090/api/customers/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': "application/json",
            },
        };
        const response = await fetch(url, fetchConfig);

        if (response.ok) {
            setFormData({
                name: ''
            });
            event.target.reset();
        }
    }
    const handleFormChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData({
            ...formData,
            [name]: value
        });
    }
    return (
        <div className='row'>
            <div className='offset-3 col-6'>
                <div className='shadow p-4 mt-4'>
                    <h1>Add a customer</h1>
                    <form onSubmit={handleSubmit} id="create-customer-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder='First Name' required type='text' name='first name' id='first name' className='form-control' />
                            <label htmlFor='first name'>First name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder='Last Name' required type='text' name='last name' id='last name' className='form-control' />
                            <label htmlFor='last name'>Last name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder='Address' required type='text' name='address' id='address' className='form-control' />
                            <label htmlFor='address'>Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder='Phone Number' required type='text' name='phone number' id='phone number' className='form-control' />
                            <label htmlFor='phone number'>Phone number</label>
                        </div>
                        <button type="submit" className="btn btn-light">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default CustomerCreate;
