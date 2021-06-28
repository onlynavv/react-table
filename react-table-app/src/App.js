import React,{useState,useEffect} from "react";
import './index.css'
import {data} from './data'
import ReadOnlyRow from "./ReadOnlyRow";
import EditTableRow from "./EditTableRow";

function App() {

  const [contacts,setContacts] = useState(data)
  const [addFormData,setAddFormData] = useState({fullName:'', address:'', number:'', email:''})
  const [editId,setEditId] = useState(null)
  const [editFormData,setEditFormData] = useState({fullName:'', address:'', number:'', email:''})

  const handleAddForm = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value

    const newFormData = {...addFormData, [fieldName]: fieldValue}
    console.log(newFormData)
    setAddFormData(newFormData)
  }

  const handleEditForm = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value

    const newEditFormData = {...editFormData, [fieldName]:fieldValue }
    setEditFormData(newEditFormData)
  }

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    const newAddFormData = {...addFormData, id: new Date().getTime().toString()}
    console.log(newAddFormData)
    setContacts([...contacts,newAddFormData])
  }

  const handleEdit = (id) => {
    setEditId(id)
  }

  useEffect(()=>{
    const getOldValue = contacts.find((contact)=>{
      return contact.id === editId
    })
    // console.log(getOldValue)
    setEditFormData(getOldValue)
  },[editId])

  const handleEditSave = (e) => {
    e.preventDefault();
    // console.log(id)
  }

  return (
    <div className="app-container">
      <form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=>{
            return(
              <>
                {editId === contact.id ? <EditTableRow handleEditForm={handleEditForm} {...editFormData} handleEditSave={handleEditSave} /> : <ReadOnlyRow key={contact.id} {...contact} handleEdit={handleEdit} />}
              </>
            )
          })}
        </tbody>
      </table>
      </form>
      <div>
        <h2>Add a contact</h2>
        <form>
          <input type='text' name='fullName' placeholder='enter name' onChange={handleAddForm}></input>
          <input type='text' name='address' placeholder='enter address' onChange={handleAddForm}></input>
          <input type='text' name='phoneNumber' placeholder='enter number' onChange={handleAddForm}></input>
          <input type='text' name='email' placeholder='enter email' onChange={handleAddForm}></input>
          <button type='submit' onClick={handleAddFormSubmit}>Add</button>
        </form>
      </div>
    </div>
  );
}

export default App;
