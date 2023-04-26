import { useState } from "react"


export default function TechnicianForm(){
    const[formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        employee_id: '',
    })

    const handleFormChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setFormData({...formData, [name]:value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const url = "http://localhost:8080/api/technicians/"
        const fetchOptions = {
            method: "POST",
            headers:{
                'Content-Type':'application/json'},
            body: JSON.stringify(formData)
        }

        const response = await fetch(url, fetchOptions);
        if (response.ok){
            setFormData({
                first_name: '',
                last_name: '',
                employee_id: ''
            })
        }
    }

    return(
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Add a technician</h1>
            <form onSubmit={handleSubmit} id="create-technician-form">
                <div className="form-floating mb-3">
                    <input onChange={handleFormChange} placeholder="First Name" required type="first_name" name="first_name" id="first_name" className="form-control" value={formData.first_name}/>
                    <label htmlFor="first_name">First Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleFormChange} placeholder="Last Name" required type="text" name="last_name" id="last_name" className="form-control" value={formData.last_name}/>
                    <label htmlFor="last_name">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleFormChange} placeholder="Employee ID" required type="text" name="employee_id" id="employee_id" className="form-control" value={formData.employee_id}/>
                    <label htmlFor="employee_id">Employee ID</label>
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
            </div>
        </div>
        </div>
    )
}
