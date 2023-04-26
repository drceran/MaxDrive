import React, { useEffect, useState } from 'react';


export default function VehicleForm() {
    const [manufacturers, setManufacturers]= useState([])

    const [formData, setFormData] = useState({
        name: '',
        picture_url: '',
        manufacturer_id: ''
    })

    const fetchManufacturers = async () => {
        const response = await fetch("http://localhost:8100/api/manufacturers/")
        if (response.ok){
            const data = await response.json();
            setManufacturers(data.manufacturers)
        }
    }

    useEffect(()=> {fetchManufacturers()}, []);

    const handleFormChange = (e) => {
        console.log(e);
        const value = e.target.value;
        const inputName = e.target.name;

        setFormData({...formData, [inputName]:value})
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(formData)
        const url = "http://localhost:8100/api/models/"

        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }

        const response = await fetch(url, fetchOptions);
        if (response.ok){
            setFormData({
                name: '',
                picture_url: '',
                manufacturer_id: ''
            })
        }

    }

    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Create a vehicle model</h1>
            <form onSubmit={handleSubmit} id="create-vehicle-form">
                <div className="form-floating mb-3">
                    <input onChange={handleFormChange} placeholder="Model Name" required type="text" name="name" id="name" className="form-control" value={formData.name}/>
                    <label htmlFor="name">Model Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input onChange={handleFormChange} placeholder="Picture URL" required type="text" name="picture_url" id="picture_url" className="form-control" value={formData.picture_url}/>
                    <label htmlFor="picture_url">Picture URL</label>
                </div>

                <div className="mb-3">
                    <select onChange={handleFormChange} required name="manufacturer_id" id="manufacturer_id" className="form-select" value={formData.manufacturer_id}>
                        <option disabled value="">Choose a manufacturer...</option>
                        {manufacturers.map(manufacturer => {
                        return (
                            <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
                        )
                        })}
                    </select>
                </div>
                <button className="btn btn-primary">Add</button>
            </form>
            </div>
        </div>
        </div>
    )
}
