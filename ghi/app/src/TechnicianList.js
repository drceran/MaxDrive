import { useState, useEffect } from "react"

export default function TechnicianList(){
    const [technicians, setTechnicians] = useState([])

    const loadTechnicians = async() =>{
        const response = await fetch('http://localhost:8080/api/technicians/')
        if (response.ok){
            const data = await response.json()
            setTechnicians(data.technicians)
        }
    }

    useEffect(()=> {loadTechnicians()},[])


    return(
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {technicians.map(technician => (
                    <tr key={ technician.id }>
                        <td>{technician.employee_id}</td>
                        <td>{technician.first_name}</td>
                        <td>{technician.last_name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
