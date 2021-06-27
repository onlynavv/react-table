import React,{useState} from "react";
import './index.css'
import {data} from './data'

function App() {

  const [contacts,setContacts] = useState(data)

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=>{
            const {id,fullName,address,phoneNumber,email} = contact
            return(
                <tr key={id}>
                  <td>{fullName}</td>
                  <td>{address}</td>
                  <td>{phoneNumber}</td>
                  <td>{email}</td>
                </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
