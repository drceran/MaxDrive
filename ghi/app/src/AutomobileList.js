import React, {useEffect, useState} from 'react';

function AutomobileList() {
    const [automobilesdetails, setAutomobiles] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            const url = "http://localhost:8100/api/automobiles/";
            const response = await fetch(url);
            if (response.ok) {
                const data =await response.json();
                // alert(data.autos[0].vin)
                setAutomobiles(data.autos);
            }
        }
        fetchdata();
    }, []);

return (
    <div className="container mt-2">
        <table className='table'>
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Color</th>
                    <th>Year</th>
                    <th>Model</th>
                    <th>Manufacturer</th>
                    <th>Sold</th>
                </tr>
            </thead>
            <tbody>
                {automobilesdetails?.map(automobilesdetail => {
                    return(
                        <tr key={automobilesdetail.id}>
                            <td>{automobilesdetail.vin}</td>
                            <td>{automobilesdetail.color}</td>
                            <td>{automobilesdetail.year}</td>
                            <td>{automobilesdetail.model.name}</td>
                            <td>{automobilesdetail.model.manufacturer.name}</td>
                            <td>{automobilesdetail.sold ? "Sold" : "Available"}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
);
}
export default AutomobileList;
