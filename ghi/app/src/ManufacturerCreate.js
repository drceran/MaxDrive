import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ManufacturerCreate(props) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: ''
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = "http://localhost:8100/api/manufacturers/";
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
            navigate("/manufacturers")
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
                    <h1>Create a manufacturer</h1>
                    <form onSubmit={handleSubmit} id="create-manufacturer-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder='Name' required type='text' name='name' id='name' className='form-control' />
                            <label htmlFor='name'>Manufacturer name</label>
                        </div>
                        <button type="submit" className="btn btn-secondary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ManufacturerCreate;
