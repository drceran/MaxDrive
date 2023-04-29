import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';


function SalespeopleList({ }) {
    const [salespersons, setSalespersons] = useState([]);
    const [showDeletedAlert, setShowDeletedAlert] = useState(false)
    const [deletedPersonName, setDeletedPersonName] = useState("")

    const fetchdata = async () => {
        const url = "http://localhost:8090/api/salespeople/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSalespersons(data.salespersons);
        }
    }

    useEffect(() => {
        fetchdata();
    }, []);

    const deleteSalesperson = async (id) => {
        const url = `http://localhost:8090/api/salespeople/${id}`;
        const fetchConfig = {
            method: "delete",
            headers: {
                'Content-Type': "application/json",
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const deletedPerson = salespersons.find(element => element.id === id);
            setDeletedPersonName(deletedPerson.first_name + " " + deletedPerson.last_name);
            setShowDeletedAlert(true);
            fetchdata();
        }
    }

    return (
        <div className="container mt-2">
            <table className='table'>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {salespersons?.map(salesperson => {
                        return (
                            <tr key={salesperson.employee_id}>
                                <td>{salesperson.employee_id}</td>
                                <td>{salesperson.first_name}</td>
                                <td>{salesperson.last_name}</td>
                                <td><button onClick={() => deleteSalesperson(salesperson.id)} type="button" className="btn btn-outline-danger">Delete me! </button></td>
                            </tr>
                        );
                    })}</tbody>
            </table>

            <Alert show={showDeletedAlert} dismissible
                onClose={() => setShowDeletedAlert(false)} variant="success">
                <p>
                    {deletedPersonName} is successfully deleted!
                </p>
            </Alert>
        </div>
    );

}
export default SalespeopleList;
