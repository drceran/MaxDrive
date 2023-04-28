import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


export default function AppointmentForm(){
    const navigate = useNavigate();

    const[formData, setFormData] = useState({
        date:'',
        time:'',
        vin:'',
        customer:'',
        technician:'',
        reason:'',
    })

    const [technicians, setTechnicians] = useState([])

    const loadTechnicians = async() =>{
        const response = await fetch('http://localhost:8080/api/technicians/')
        if (response.ok){
            const data = await response.json()
            setTechnicians(data.technicians)
        }
    }

    useEffect(()=> {loadTechnicians()},[])

    const handleFormChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [name]:value});
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const {date,time, ...formDataClean} = formData;
        const dateTime = `${date}T${time}`;

        const url = "http://localhost:8080/api/appointments/"
        const fetchOptions = {
            method: "POST",
            headers:{
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ ...formDataClean, date_time: dateTime }),
        }
        const response = await fetch(url, fetchOptions);

        if (response.ok){
            setFormData({
                date:'',
                time:'',
                vin:'',
                customer:'',
                technician:'',
                reason:'',
            })
            navigate("/appointments/")
        }
    }

    return(
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Create a service appointment</h1>
            <form onSubmit={handleSubmit} id="create-appointment-form">
                <div className="form-floating mb-3">
                    <input onChange={handleFormChange} placeholder="Automobile VIN" required type="text" name="vin" id="vin" className="form-control" value={formData.vin}/>
                    <label htmlFor="vin">Automobile VIN</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleFormChange} placeholder="Customer" required type="text" name="customer" id="customer" className="form-control" value={formData.customer}/>
                    <label htmlFor="customer">Customer</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleFormChange} required type="date" name="date" id="date" className="form-control" value={formData.date}/>
                    <label htmlFor="date">Date</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleFormChange} required type="time" name="time" id="time" className="form-control" value={formData.time}/>
                    <label htmlFor="time">Time</label>
                </div>
                <div className="mb-3">
                    <select onChange={handleFormChange} required name="technician" id="technician" className="form-select" value={formData.technician}>
                        <option disabled value="">Choose a technician...</option>
                        {technicians.map(technician => {
                        return (
                            <option key={technician.id} value={technician.id}>{technician.first_name} {technician.last_name}</option>
                        )
                        })}
                    </select>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleFormChange} required type="text" name="reason" id="reason" className="form-control" value={formData.reason}/>
                    <label htmlFor="reason">Reason</label>
                </div>
                <button className="btn btn-primary">Add</button>
            </form>
            </div>
        </div>
        </div>
    )
}
