import React, { useEffect, useState } from 'react';

function SaleCreate(props) {
    const [formData, setFormData] = useState({
        vin: '',
        salesperson: '',
        customer: '',
        price: '',
    });

        return (
            <div className='row'>
                <div className='offset-3 col-6'>
                    <div className='shadow p-4 mt-4'>
                        <h1>Record a new sale</h1>


                    </div>
                </div>
            </div>

        )
    }
    export default SaleCreate;
