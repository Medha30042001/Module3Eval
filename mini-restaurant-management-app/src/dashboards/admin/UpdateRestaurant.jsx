import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RestContext } from '../../context/RestContext';

const UpdateRestaurant = () => {

    const {id} = useParams();
    const [rests, updateRest] = useContext(RestContext);
    const navigate = useNavigate();

    const rest = rests.find(
        r => r.id === Number(id)
    );

    const [form, setForm] = useState(rest);

    const handleUpdates = () => {
        updateRest(form);
        alert('Updated successfully');
        navigate('/admin/dashboard');
    }

    if(!rest) return <p>Restaurant not found</p>;

  return (
    <>
        <h2>Update Restaurant</h2>

        <input 
        value={form.restName}
        onChange={(e) => setForm({...form, restName: e.target.value})} />
        <input 
        value={form.address}
        onChange={(e) => setForm({...form, address : e.target.value})} />
        <input 
        value={form.type}
        onChange={(e) => setForm({...form, type:e.target.value})}/>

        <button onClick={handleUpdates}>Update</button>
    </>
  )
}

export default UpdateRestaurant