import React, { useContext, useEffect, useRef, useState } from 'react'
import { RestContext } from '../context/RestContext';

const Sidebar = () => {

    const [form, setForm] = useState({
        restName:'',
        address:'',
        type:'',
        parkingLot:'',
        image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
    })
    const inputRef = useRef();
    const {addRest} = useContext(RestContext);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleChange = (e) => {
        const {name, value} = e.target;

        setForm(prev => ({
            ...prev,
            [name] : name === 'parkingLot' ? value === 'true' : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.restName || !form.address || !form.type ){
            alert('Incomplete Form');
            return;
        }

        addRest(form);
        setForm({
            restName:'',
            address:'',
            type:'',
            parkingLot:''
        })
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="restName"
            placeholder='Restaurant Name'
            value={form.restName}
            onChange={handleChange}
            ref={inputRef} />

            <input type="text" name="address"
            placeholder='Address'
            value={form.address}
            onChange={handleChange} />

            <select name="type"
            value={form.type}
            onChange={handleChange}>
                <option value="">Type</option>
                <option value="Rajasthani">Rajasthani</option>
                <option value="Gujarati">Gujarati</option>
                <option value="Mughlai">Mughlai</option>
                <option value="Jain">Jain</option>
                <option value="Thai">Thai</option>
                <option value="North Indian">North Indian</option>
                <option value="South Indian">South Indian</option>
            </select>

            <select name="parkigLot"
            value={form.parkingLot}
            onChange={handleChange}>
                <option value="">Parking Lot</option>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>

            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default Sidebar