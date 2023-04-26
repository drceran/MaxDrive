import { useState, useEffect } from "react"

export default function AppointmentList(){
    const [appointments, setAppointments] = useState([])

    const loadAppointments = async() =>{
        const response = await fetch('http://localhost:8080/api/appointments/')
        if (response.ok){
            const data = await response.json()
            setAppointments(data.appointments)
        }
    }

    useEffect(()=> {loadAppointments()},[])

    const handleCancelUpdate = async (id) =>{
        const url = `http://localhost:8080/api/appointments/${id}/cancel/`;
        const fetchConfig = {
            method: "PUT"
        }
        const response = await fetch(url, fetchConfig);
        if (response.ok){
            loadAppointments()
        }
        console.log(appointments)
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
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Is VIP?</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                </tr>
            </thead>
            <tbody>
                {appointments.filter(appointment => appointment.status !== 'cancel' && appointment.status !== 'finish').map(appointment => (
                    <tr key={ appointment.id }>
                        <td>{appointment.vin}</td>
                        <td>Placeholder</td>
                        <td>{appointment.customer}</td>
                        <td>{new Date(appointment.date_time).toLocaleDateString()}</td>
                        <td>{new Date(appointment.date_time).toLocaleTimeString()}</td>
                        <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                        <td>{appointment.reason}</td>
                        <td>
                            <button type="button" className="btn btn-primary" name="cancel-button" onClick={()=>handleCancelUpdate(appointment.id)}>Cancel</button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-primary" name="finish-button" onClick={()=>handleFinishUpdate(appointment.id)}>Finish</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
