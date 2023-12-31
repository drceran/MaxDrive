import { useState, useEffect } from "react"

export default function AppointmentList(){
    const [appointments, setAppointments] = useState([])
    const [vinInventory, setVinInventory] = useState([])

    const loadAppointments = async() =>{
        const response = await fetch('http://localhost:8080/api/appointments/')
        if (response.ok){
            const data = await response.json()
            setAppointments(data.appointments)
        }
    }

    const loadInventory = async() =>{
        const response = await fetch("http://localhost:8100/api/automobiles/")
        if (response.ok){
            const data = await response.json();
            setVinInventory(data.autos.map(auto => auto.vin));
        }
    }

    useEffect(()=> {
        loadAppointments();
        loadInventory()},[])

    const handleCancelUpdate = async (id) =>{
        const url = `http://localhost:8080/api/appointments/${id}/cancel/`;
        const fetchConfig = {
            method: "PUT"
        }
        const response = await fetch(url, fetchConfig);
        if (response.ok){
            loadAppointments()
        }
    }

    const handleFinishUpdate = async (id) =>{
        const url = `http://localhost:8080/api/appointments/${id}/finish/`;
        const fetchConfig = {
            method: "PUT"
        }
        const response = await fetch(url, fetchConfig);
        if (response.ok){
            loadAppointments()
        }
    }

    return(
        <div className="container mt-2">
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
                    {appointments.filter(appointment => appointment.status !== 'cancelled' && appointment.status !== 'finished').map(appointment => (
                        <tr key={ appointment.id }>
                            <td>{appointment.vin}</td>
                            <td>{vinInventory.includes(appointment.vin) ? "Yes" : "No"}</td>
                            <td>{appointment.customer}</td>
                            <td>{new Date(appointment.date_time).toLocaleDateString()}</td>
                            <td>{new Date(appointment.date_time).toLocaleTimeString()}</td>
                            <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                            <td>{appointment.reason}</td>
                            <td>
                                <button type="button" className="btn cancel-button" name="cancel-button" onClick={()=>handleCancelUpdate(appointment.id)}>Cancel</button>
                            </td>
                            <td>
                                <button type="button" className="btn finish-button" name="finish-button" onClick={()=>handleFinishUpdate(appointment.id)}>Finish</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
