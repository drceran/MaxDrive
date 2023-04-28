import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SalespeopleCreate(props) {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        employee_id: '',
    });

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = "http://localhost:8090/api/salespeople/";
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
                first_name: '',
                last_name: '',
                employee_id: '',
            });
            navigate("/salespeople")
            // event.target.reset(); navigate comes here
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
    return(
        <div className='row'>
            <div className='offset-3 col-6'>
                <div className='shadow p-4 mt-4'>
                    <h1>Add a Salesperson</h1>
                    <form onSubmit={handleSubmit} id="create-salesperson-form">
                        <div className='form-floating mb-3'>
                            <input onChange={handleFormChange} placeholder='First name' required type='text' name='first_name' id='first name' className='form-control' />
                            <label htmlFor='first name'>First name</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input onChange={handleFormChange} placeholder='Last name' required type='text' name='last_name' id='last name' className='form-control' />
                            <label htmlFor='last name'>Last name</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input onChange={handleFormChange} placeholder='Employee id' required type='text' name='employee_id' id='employee id' className='form-control' />
                            <label htmlFor='employee id'>Employee id</label>
                        </div>
                        <button type="submit" className="btn btn-secondary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SalespeopleCreate;
