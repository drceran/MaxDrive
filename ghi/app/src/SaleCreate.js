import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SaleCreate() {
    const [formData, setFormData] = useState({
        automobile: '',
        salesperson: '',
        customer: '',
        price: '',
    });
    const navigate = useNavigate();
    const [automobiles, setAutomobiles] = useState([]);

    const fetchData = async () => {
        const url = "http://localhost:8090/api/automobiles/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setAutomobiles(data.automobiles);
        }
    }

    const [salespersons, setSalespersons] = useState([]);

    const fetchSalesPersonData = async () => {
        const url = "http://localhost:8090/api/salespeople/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSalespersons(data.salespersons);
        }
    }

    const [customers, setCustomers] = useState([]);

    const fetchCustomerData = async () => {
        const url = "http://localhost:8090/api/customers/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setCustomers(data.customers);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = "http://localhost:8090/api/sales/";
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
                automobile: '',
                salesperson: '',
                customer: '',
                price: '',
            });
            navigate("/sales")
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

    useEffect(() => {
        fetchData();
        fetchSalesPersonData();
        fetchCustomerData();
    }, []);


    return (
        <div className='row'>
            <div className='offset-3 col-6'>
                <div className='shadow p-4 mt-4'>
                    <h1>Record a new sale</h1>
                    <form onSubmit={handleSubmit} id="create-a-new-sale-form">
                        <div className='form-floating mb-3'>
                            <select value={formData.automobile} onChange={handleFormChange} placeholder="automobile" required type="text" name="automobile" id="automobile" className='form-select'>
                                <option value="">Choose an automobile VIN...</option>
                                {automobiles.map(automobile => {
                                    return (
                                        <option key={"a"+automobile.id} value={automobile.vin}>{automobile.vin}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='form-floating mb-3'>
                            <select value={formData.salesperson} onChange={handleFormChange} placeholder="salesperson" required type="text" name="salesperson" id="salesperson" className='form-select'>
                                <option value="">Choose a salesperson...</option>
                                {salespersons.map(salesperson => {
                                    return (
                                        <option key={"s"+salesperson.id} value={salesperson.id}>{salesperson.first_name} {salesperson.last_name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='form-floating mb-3'>
                            <select value={formData.customer} onChange={handleFormChange} placeholder="customer" required type="text" name="customer" id="customer" className='form-select'>
                                <option value="">Choose a customer...</option>
                                {customers.map(customer => {
                                    return (
                                        <option key={"c"+customer.id} value={customer.id}>{customer.first_name} {customer.last_name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='form-floating mb-3'>
                            <input value={formData.price} onChange={handleFormChange} placeholder="price" required type="text" name="price" id="price" className='form-control' />
                            <label htmlFor="price">Price</label>
                        </div>
                            <button className="btn btn-secondary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SaleCreate;
