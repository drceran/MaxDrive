import { useState, useEffect } from "react"

export default function VehicleList(){
    const [vehicles, setVehicles] = useState([])

    const loadVehicles = async() =>{
        const response = await fetch('http://localhost:8100/api/models/')
        if (response.ok){
            const data = await response.json()
            setVehicles(data.models)
        }
    }

    useEffect(()=> {loadVehicles()},[])

    return (
        <div className="container mt-2">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Manufacturer</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map(vehicle => {
                        return (
                            <tr key={ vehicle.href }>
                                <td>{ vehicle.name }</td>
                                <td>{ vehicle.manufacturer.name }</td>
                                <td><img src= { vehicle.picture_url } alt = { vehicle.picture_url } height="300" width="450"/> </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
);
}
