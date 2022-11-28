import React,{Component} from 'react'
import './style.css'

class SubscribeButton extends Component {
 
  state = { 
    employees: [
      {
        "id": 1,
        "name": "Frodo Baggins",
        "department": "Management",
        "role": "CEO"
      },
      {
        "id": 2,
        "name": "Samwise Gamgee",
        "department": "Management",
        "role": "CTO"
      },
      {
        "id": 3,
        "name": "Gandalf the Gray",
        "department": "Recruitment",
        "role": "Lead-recruiter"
      },
      {
        "id": 4,
        "name": "Aragorn",
        "department": "Security",
        "role": "Security officer"
      },
      {
        "id": 5,
        "name": "Legolas",
        "department": "Management",
        "role": "Office manager"
      }
  ]
    };



  render() {
      return this.state.employees.map((user) => {
        return ( 
         <div className='div' key={user.id}>
           <h2>Employee name: {user.name}</h2>
           <h3>Department: {user.department}</h3>
           <h3>Role: {user.role}</h3>
         </div>
        );
      });
      
     }
     
  }

 export default SubscribeButton