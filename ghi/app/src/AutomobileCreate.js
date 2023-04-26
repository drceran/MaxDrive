import React, { useEffect, useState } from 'react';

function AutomobileCreate() {
    const [formData, setFormData] = useState({
        color: '',
        year: '',
        vin: '',
        model: '',
    });

    const [models, setModels] = useState([]);

    // get models list
    const fetchData = async () => {
        const url = 'http://localhost:8080/api/models';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setModels(data.models);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    // http://localhost:8100/api/models/
    // / url den model datasini - fetch et
    // modelList state ona ata tum model verilerini

    //  {this.handleChangeModels.models.map(model => { icine yaz

    //  const data = await response.json();
    //             this.setState({models: data.models});

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = "http://localhost:8100/api/automobiles/";
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
                color: '',
                year: '',
                vin: '',
                model: '',
            });
            event.target.reset();
        }
    }
    const handleFormChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;

        setFormData({
            ...formData,
            [inputName]: value
        });
    }
    return (
        <div className='row'>
            <div className='offset-3 col-6'>
                <div className='shadow p-4 mt-4'>
                    <h1>Add an automobile to inventory</h1>
                    <form onSubmit={handleSubmit} id="create-automobile-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} placeholder='Color' required type='text' name='name' id='name' className='form-control' />
                            <label htmlFor='name'>Color</label>
                        </div>
                        <div className='form-floating mb-3' >
                            <input onChange={handleFormChange} placeholder='Year' required type='number' name='name' id='name' className='form-control' />
                            <label htmlFor='year'>Year</label>
                        </div>
                        <div className='form-floating mb-3' >
                            <input onChange={handleFormChange} placeholder='Vin' required type='text' name='name' id='name' className='form-control' />
                            <label htmlFor='vin'>VIN</label>
                        </div>
                        <div className='mb-3' >
                            <select onChange={handleFormChange} required name='model' id='model' className='form-select' >
                                <option value=''>Choose a model</option>
                                {models.map(model => {
                                    return (
                                        <option key={model.id} value={model.id}>{model.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-light">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AutomobileCreate;
