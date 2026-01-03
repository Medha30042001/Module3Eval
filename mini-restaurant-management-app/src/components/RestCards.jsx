import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { RestContext } from '../context/RestContext';

const RestCards = ({rest, displayElements}) => {

    const navigate = useNavigate();
    const {deleteRestaurant} = useContext(RestContext);


  return (
    <>
        <div style={{border:'1px solid gray', padding:10}}>
            <img src={rest.image} alt="restImage" />
            <h4>Restaurant name : {rest.restName}</h4>
            <h4>Address : {rest.address}</h4>
            <h4>Type : {rest.type}</h4>
            <h4>Parking Lot : {rest.parkingLot ? 'Yes' : 'No'}

                {displayElements && (
                    <>
                        <button onClick={() => {
                            navigate(`/admin/restaurants/update/${rest.id}`)
                        }}>Update</button>

                        <button onClick={() => deleteRestaurant(rest.id)}>Delete</button>
                    </>
                )}
            </h4>
        </div>
    </>
  )
}

export default RestCards