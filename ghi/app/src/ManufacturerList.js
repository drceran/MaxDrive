import React, {useEffect, useState} from 'react';

function ManufacturerList() {
    const [manufacturerdetails, setManufacturers] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            const url = "http://localhost:8100/api/manufacturers/";
            const response = await fetch(url);
            if (response.ok) {
                const data =await response.json();
                setManufacturers(data.manufacturers);
            }
        }
        fetchdata();
    }, []);

return (
    <div className="container mt-2">
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {manufacturerdetails?.map(manufacturerdetail => {
                    return(
                        <tr key={manufacturerdetail.id}>
                            <td>{manufacturerdetail.name}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
);
}
export default ManufacturerList;
