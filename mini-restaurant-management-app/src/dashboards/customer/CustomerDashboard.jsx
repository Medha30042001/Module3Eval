import React, { useContext } from 'react'
import { RestContext } from '../../context/RestContext';

const CustomerDashboard = () => {

        const {rests, addRest} = useContext(RestContext);
    
  return (
    <div>

        <h2>Customer Dashboard</h2>
        
        <div>
            {rests.map(r => (
                <div key={r.id}>
                    <RestCards rest = {r} 
                        displayElements = {false} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default CustomerDashboard