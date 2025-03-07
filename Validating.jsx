import React, { useRef } from 'react'

const Validating = () => {
    const name=useRef(null)
    const pass=useRef(null)
    const retype=useRef(null)
    const email=useRef(null)
    const phoneno=useRef(null)
    // const {name,pass,retype,email,phoneno}=useRef([null]);
const formValidating=(e)=>{
        e.preventDefault();
        console.log("The Data was Submitted");
        console.log(name.current.value)
        console.log(pass.current.value)
        console.log(retype.current.value)
        console.log(email.current.value)
        console.log(phoneno.current.value)
        if(name.current.value==""||phoneno.current.value==""||retype.current.value==""||pass.current.value==""||email.current.value==""){
            alert("enter all the data ")
        }
        if(name.current.value.length<4){
            alert("The name is too short")
        }
        if(pass.current.value!==retype.current.value){
            alert("You have enter the incorrect Password")
        }
        if(phoneno.current.value.length!==10){
            alert("Incorrect PhoneNo.")
        }
    }
  return (
    <div className='flex-col'>
      <form action="" onSubmit={formValidating} className='flex-col'>
        Username <input className='border-2' type="text" name='Username' ref={name}/>
        Password <input className='border-2' type="password" name="password" id="" ref={pass}/>
        Retype Password <input className='border-2' type="password" name="reenter" id="" ref={retype}/>
        Email <input className='border-2' type="email" name="email" id="" ref={email} />
        PhoneNo <input className='border-2' type="number" name="number" id="" ref={phoneno} />
        <button type="submit" className='border-2'>Submit</button>
      </form>
    </div>
  )
}

export default Validating
