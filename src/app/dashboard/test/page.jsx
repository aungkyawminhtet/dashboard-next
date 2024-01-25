import React from 'react'
import { Button } from 'flowbite-react';

const page = () => {
    const handleForm = async(formData) => {
        "use server";
        console.log(formData);
        const username = formData.get("username");
        console.log("hello world", username);
    }
  return (
    <div>
      <form action={handleForm}>
        <input type="text" name='username' />
        
        <button type='submit'>submit</button>
      </form>
       
    </div>
  )
}

export default page
