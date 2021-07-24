import React from 'react'

const EditTableRow = ({handleEditForm,fullName,address,phoneNumber,email,handleEditFormSubmit}) => {
    
    return (
        <tr>
            <td>
                <input type='text' value={fullName} name='fullName' placeholder='enter name' onChange={handleEditForm}></input>
            </td>
            <td>
                <input type='text' value={address} name='address' placeholder='enter address' onChange={handleEditForm}></input>
            </td>
            <td>
                <input type='text' value={phoneNumber} name='phoneNumber' placeholder='enter number' onChange={handleEditForm}></input>
            </td>
            <td>
                <input type='text' value={email} name='email' placeholder='enter email' onChange={handleEditForm}></input>
            </td>
            <td><button onClick={handleEditFormSubmit}>save</button></td>
        </tr>
    )
}

export default EditTableRow
