import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';


function SalesList({ }) {
    const [sales, setSales] = useState([]);
    const [showDeletedAlert, setShowDeletedAlert] = useState(false)
    const [deletedSaleId, setdeletedSaleId] = useState("")


    const fetchdata = async () => {
        const url = "http://localhost:8090/api/sales/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSales(data.sales);
        }
    }
    useEffect(() => {
        fetchdata();
    }, []);
    const deleteSale = async (id) => {
        const url = `http://localhost:8090/api/sale/${id}`;
        const fetchConfig = {
            method: "delete",
            headers: {
                'Content-Type': "application/json",
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const deletedSale = sales.find(element => element.id === id);
            setdeletedSaleId(deletedSale.id);
            setShowDeletedAlert(true);
            fetchdata();
        }
    }

    return (
        <div className="container mt-4">
            <table className='table'>
                <thead>
                    <tr>
                    <th>Salesperson Employee ID</th>
                    <th>Salesperson Name</th>
                    <th>Customer</th>
                    <th>VIN</th>
                    <th>Price</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {sales?.map(sale => {
                        return(
                            <tr key={sale.id}>
                                <td>{sale.salesperson.employee_id}</td>
                                <td>{sale.salesperson.first_name} {sale.salesperson.last_name}</td>
                                <td>{sale.customer.first_name} {sale.customer.last_name}</td>
                                <td>{sale.automobile.vin}</td>
                                <td>$ {sale.price}</td>
                                <td><button onClick={()=> deleteSale(sale.id)} type="button" className="btn btn-outline-danger">Delete me!</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Alert show={showDeletedAlert} dismissible
                onClose={() => setShowDeletedAlert(false)} variant="success">
                <p>
                   Sale with id number: {deletedSaleId} is successfully deleted!
                </p>
            </Alert>
        </div>
    );

}
export default SalesList;
