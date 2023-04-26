
//maybe add spinner instead of ?
export default function VehicleList(props){

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Manufacturer</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                {props.vehicles?.map(vehicle => {
                    return (
                        <tr key={ vehicle.href }>
                            <td>{ vehicle.name }</td>
                            <td>{ vehicle.manufacturer.name }</td>
                            <td><img src= { vehicle.picture_url } alt = { vehicle.picture_url } height = "200"/> </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
);
}
