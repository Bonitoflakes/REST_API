import axios from 'axios';
import { useState } from 'react';

function App() {

    const  [name,setName] = useState('Anonymous');
    const  [age,setAge] = useState(0);
    const  [email,setEmail] = useState("abc@gmail.com");
    const  [contact,setContact] = useState(0);
    
    const handleForm = (event)=>{
        event.preventDefault();
        console.log(name);


          axios.post('http://127.0.0.1:5000/users',{
              firstName:name,
              age:age,
              email,
              contact,
          })
          .then(function (response) {
            console.log(response);
          })

        fetch("http://127.0.0.1:5000/users")
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err => console.error(err));

    }



    return (
        <form onSubmit={handleForm}>
        
        
        <label>
          Name:
          <input type="text" name="name" onChange={(event)=>setName(event.target.value)}/>
        </label>
        <br/>
        
        <label>
          Age:
          <input type="text" name="name" onChange={(event)=>setAge(event.target.value)}/>
        </label>
        <br/>
        
        <label>
          Email:
          <input type="text" name="name" onChange={(event)=>setEmail(event.target.value)}/>
        </label>
        <br/>
        
        <label>
          Contact:
          <input type="text" name="name" onChange={(event)=>setContact(event.target.value)}/>
        </label>
        
        <input type="submit" value="Submit"  />
      </form>
    );
}


export {App};    