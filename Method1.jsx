import React, { useState } from 'react'

const Method1 = () => {
    const [name ,setName]=useState("");
    const [pass ,setPass]=useState('');
    const [email ,setEmail]=useState('');
    const [rePass ,setRePass]=useState('');
    const [number ,setNumber]=useState('');
    const [count,setCount]=useState(0);
const formValidating=(e)=>{
        e.preventDefault();
        console.log("From was Submitted")
        console.log(name)
        console.log(pass);
        console.log(email);
        console.log(rePass);
        console.log(number);
        setCount(1);
       if(name.length<4){
        alert("The Name Is Too Short")
       }
       if (name==""||pass==""||email==""||rePass==""||number=="") {
        alert("Fill all the Details")
       }
       if(pass.length<4){
        alert("password Is Too Short")
       }
       if(pass!==rePass){
        alert("incoorect Password")
       }
       if(number<10){
        alert(" enter a 10 digit number")
       }
    }       
  return (
    <div >
      <form action="" onSubmit={formValidating} className='flex-col m-4'>
        <div>
            Username <input className='border-2' type="text" name='Username' onChange={(e)=>{setName(e.target.value), console.log(e.target.value);
        }}/>
        </div>
        <div>
        Password <input className='border-2' type="password" name="password" id="" onChange={(e)=>{setPass(e.target.value)}}/>
        </div>
        <div>
        Retype Password <input className='border-2' type="password" name="reenter" id="" onChange={(e)=>{setRePass(e.target.value)}}/>
        </div>
        <div>
        Email <input className='border-2' type="email" name="email" id=""onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <div>
        PhoneNo <input className='border-2' type="number" name="number" id="" onChange={(e)=>{setNumber(e.target.value)}} />
        </div>
        <button type="submit" className='border-2'>Submit</button>
      </form>
      { count===1? (
            <div className='border-2 border-green-500'>
                <h1>Hello {name}</h1>
                <h1>Your Password{pass}</h1>
                <h1>your email{email}</h1>
                <h1>Your PhoneNo.{number}</h1>
            </div>
            
      ):(
        ""
      )
    }
</div>
)}

export default Method1
