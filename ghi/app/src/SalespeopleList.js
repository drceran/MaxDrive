import React, { useEffect, useState } from 'react';


function SalespeopleList({ }) {
    const [salespersons, setSalespersons] = useState([]);


    const fetchdata = async () => {
        const url = "http://localhost:8090/api/salespeople/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSalespersons(data.salespersons);
        }
    }

//butun requestlerin default metodu GET. get olmasaydi fetchconfig le belirtirdin
    useEffect(() => {
        fetchdata();
    }, []);

    // const [state, setState] = useState ({salespersons: [], count : ""});

    // const deleteSalesperson = (id) => {
    //     const newSalespersons = state.salespersons.filter(salesperson => salesperson.id !== id)
    //     const newCount = newSalespersons.length;
    //     setState({salespersons: newSalespersons, count: newCount})
    // }
//fetchconfig is not a reserved name we chose it.

    const deleteSalesperson = async (id) => {
        const url =`http://localhost:8090/api/salespeople/${id}`;
        const fetchConfig = {
            method:"delete",
            headers: {
                'Content-Type': "application/json",
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            fetchdata();
        }
    }

    return (<table className='table'>
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
                        <td><button onClick={()=> deleteSalesperson(salesperson.id)} type="button" className="btn btn-outline-danger">Delete me! </button></td>
                    </tr>
                );
            })}</tbody>
    </table>
    );

}
export default SalespeopleList;
