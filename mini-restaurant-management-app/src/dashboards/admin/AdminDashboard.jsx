import React, { useContext } from 'react'
import Sidebar from '../../components/Sidebar'
import RestCards from '../../components/RestCards'
import { RestContext } from '../../context/RestContext'

const AdminDashboard = () => {

    const {rests} = useContext(RestContext);

  return (
    <>
        <Sidebar />

        <div>
            {rests.map(r => (
                <div key={r.id}>
                    <RestCards rest = {r} 
                        displayElements = {true} />
                </div>
            ))}
        </div>
    </>
  )
}

export default AdminDashboard