import React from 'react'
import { useNavigate } from 'react-router-dom'

const RestCards = ({rest, displayElements}) => {

    const navigate = useNavigate();



  return (
    <>
        <div className='card'>
            <img src={rest.image} alt="restImage" />
            <h4>Restaurant name : {rest.restName}</h4>
            <h4>Address : {rest.address}</h4>
            <h4>Type : {rest.type}</h4>
            <h4>Parking Lot : {rest.parkingLot ? 'Yes' : 'No'}

                {displayElements && (
                    <>
                        <button onClick={() => {
                            navigate('/admin/restaurants/update')
                        }}>Update</button>
                    </>
                )}
            </h4>
        </div>
    </>
  )
}

export default RestCards