 import React, { useEffect, useState } from 'react';

function SalespersonHistory({ }) {
    const [salespersons, setSalespersons] = useState([]);
    const [salesHistory, setSalesHistory] = useState([]);

    const fetchSalesPersonData = async () => {
        const url = "http://localhost:8090/api/salespeople/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSalespersons(data.salespersons);
        }
    }

    const populateSalesHistory = async (id) => {
        const url = `http://localhost:8090/api/salespeople/${id}/sales`;
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSalesHistory(data.sales);
        }
    }

    const handleSalesPersonChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        populateSalesHistory(value);
    }

    useEffect(() => {
        fetchSalesPersonData();
    }, []);


return (
    <div className='row'>
        <div className='offset-3 col-6'>
            <div className='shadow p-4 mt-4'>
                <h1>Salesperson History</h1>
                <form id="create-salesperson-history-form">
                    <div className='form-floating mb-3'>
                        <select onChange={handleSalesPersonChange} placeholder="salesperson" required type="text" name="salesperson" id="salesperson" className='form-select'>
                            <option value="">Choose a salesperson</option>
                            {salespersons.map(salesperson => {
                                return (
                                    <option key={salesperson.id} value={salesperson.id}>{salesperson.first_name} {salesperson.last_name}</option>
                                )
                            })}
                        </select>
                    </div>
                </form>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Salesperson</th>
                            <th>Customer</th>
                            <th>VIN</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesHistory
                            .map(salesperson => {
                                return (
                                    <tr key={salesperson.id}>
                                        <td>{salesperson.salesperson.first_name} {salesperson.salesperson.last_name}</td>
                                        <td>{salesperson.customer.first_name} {salesperson.customer.last_name}</td>
                                        <td>{salesperson.automobile.vin}</td>
                                        <td>{salesperson.price}</td>

                                    </tr>
                                );
                            })}</tbody>
                </table>
            </div>
        </div>
    </div>
)
}
export default SalespersonHistory;
