import React, { useEffect, useState } from 'react';


function SalespeopleList ({}) {
    const [salespersons, setSalespersons] = useState([]);


    useEffect(() => {
    const fetchdata = async () => {
        const url = "http://localhost:8090/api/salespeople/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSalespersons(data.salespersons);
        }
    }
    fetchdata();
}, []);

return(<table className='table'>
<thead>
    <tr>
        <th>Employee ID</th>
        <th>First Name</th>
        <th>Last Name</th>
    </tr>
</thead>
<tbody>
    {salespersons?.map(salesperson => {
        return (
            <tr key={salesperson.employee_id}>
                <td>{salesperson.employee_id}</td>
                <td>{salesperson.first_name}</td>
                <td>{salesperson.last_name}</td>
            </tr>
        );
    })}</tbody>
</table>
);

}
export default SalespeopleList;
