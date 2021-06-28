import React from 'react'

const ReadOnlyRow = ({id,fullName,address,phoneNumber,email,handleEdit}) => {
    return (
        
            <tr>
                  <td>{fullName}</td>
                  <td>{address}</td>
                  <td>{phoneNumber}</td>
                  <td>{email}</td>
                  <td><button onClick={()=>handleEdit(id)}>Edit</button></td>
            </tr>
    
    )
}

export default ReadOnlyRow
