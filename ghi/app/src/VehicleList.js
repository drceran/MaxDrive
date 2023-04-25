import { useEffect, useState } from 'react';
//maybe add spinner instead of ?

export default function VehicleList(props){

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Model</th>
                    <th>Picture</th>
                    <th>Manufacturer</th>
                </tr>
            </thead>
            <tbody>
                {props.vehicles?.map(vehicle => {
                    return (
                        <tr key={ vehicle.href }>
                            <td>{ vehicle.name }</td>
                            <td><img src= { vehicle.picture_url } alt = { vehicle.picture_url } height = "100"/> </td>
                            <td>{ vehicle.manufacturer.name }</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
);
}
