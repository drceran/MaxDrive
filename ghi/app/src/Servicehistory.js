import { useState, useEffect } from "react"

export default function Servicehistory() {
    const [allAppointments, setAllAppointments] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [searchTerm, setSearchTerms] = useState("");
    const [vinInventory, setVinInventory] = useState([])

    const loadAppointments = async() =>{
        const response = await fetch('http://localhost:8080/api/appointments/');
        if (response.ok){
            const data = await response.json();
            setAllAppointments(data.appointments);
            setAppointments(data.appointments);
        }
    }
        const loadInventory = async() =>{
        const response = await fetch("http://localhost:8100/api/automobiles/")
        if (response.ok){
            const data = await response.json();
            setVinInventory(data.autos.map(auto => auto.vin));
        }
    }


    useEffect(()=> {loadAppointments()},[])
    useEffect(()=> {loadInventory()},[])

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerms(value);
    }

    const handleSubmit = () =>{
        setAppointments(allAppointments.filter(appointment => appointment.vin.toLowerCase().includes(searchTerm.toLowerCase())));
        }

    return(
        <div className="container mt-4">
            <div className="input-group mb-3">
                <input type="text" className="form-control" id="search-bar" aria-describedby="search-button" placeholder="Search appointments by VIN" value={searchTerm} onChange = {handleSearch}/>
                <button type="button" className="btn btn-secondary" id="search-button" onClick={handleSubmit}>Search</button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>VIP?</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => (
                        <tr key={ appointment.id }>
                            <td>{appointment.vin}</td>
                            <td>{vinInventory.includes(appointment.vin) ? "Yes" : "No"}</td>
                            <td>{appointment.customer}</td>
                            <td>{new Date(appointment.date_time).toLocaleDateString()}</td>
                            <td>{new Date(appointment.date_time).toLocaleTimeString()}</td>
                            <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                            <td>{appointment.reason}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
