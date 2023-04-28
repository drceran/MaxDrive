import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CustomerCreate() {
    const [formData, setFormData] = useState({

    });
    const navigate = useNavigate();
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

            });
            // event.target.reset();
            navigate("/customers")
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
                            <input onChange={handleFormChange} placeholder='First Name' required type='text' name='first_name' id='first_name' className='form-control' />
                            <label htmlFor='first_name'>First name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder='Last Name' required type='text' name='last_name' id='last_name' className='form-control' />
                            <label htmlFor='last_name'>Last name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder='Address' required type='text' name='address' id='address' className='form-control' />
                            <label htmlFor='address'>Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder='Phone Number' required type='text' name='phone_number' id='phone_number' className='form-control' />
                            <label htmlFor='phone_number'>Phone number</label>
                        </div>
                        <button type="submit" className="btn btn-secondary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default CustomerCreate;
