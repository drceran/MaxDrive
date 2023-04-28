import React, { useEffect, useState } from 'react';


function CustomerList({ }) {
    const [customers, setCustomers] = useState([]);


    const fetchdata = async () => {
        const url = "http://localhost:8090/api/customers/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setCustomers(data.customers);
        }
    }

    useEffect(() => {
        fetchdata();
    }, []);

    const deleteCustomer = async (id) => {
        const url=`http://localhost:8090/api/customers/${id}`;
        const fetchConfig = {
            method:'delete',
            headers: {
                'Content-Type':'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            fetchdata();
        }
    }

    return (
        <div className="container mt-4">
            <table className='table'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {customers?.map(customer => {
                        return (
                            <tr key={customer.id}>
                                <td>{customer.first_name}</td>
                                <td>{customer.last_name}</td>
                                <td>{customer.address}</td>
                                <td>{customer.phone_number}</td>
                                <td><button onClick={() => deleteCustomer(customer.id)} type="button" className="btn btn-outline-danger">Delete me!</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CustomerList;
