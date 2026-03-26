import React, {useState, useRef} from 'react';

function App() {

  // const[formData, setForm] = useState({
  //   name1:'',
  //   email:'',
  //   mobile:'',
  // });

  const name1Ref = useRef();
  const emailRef = useRef();
  const mobileRef =useRef();

  // function handleForm(event){

  //   event.preventDefault(); 

  //   console.log(event.target);

  //   console.log("User pressed one character that's why I got called");

  //   setForm({...formData,[event.target.name]: event.target.value});


  //   console.log(formData);
  // }

  function storeFormData(event){

    event.preventDefault();

    console.log("Now the entire form data is going to store in localStorage");

    console.log(name1Ref);

    const obj1 = {
      name1 : name1Ref.current.value,
      email: emailRef.current.value,
      mobile: mobileRef.current.value,
    };

    console.log(obj1);

    localStorage.setItem("userData",JSON.stringify(obj1) );

    console.log("Data stored.....");

    event.target.form.reset();
    


  }

  return (
    <>
      <form >
        <input type="text" ref={name1Ref} name="name1" placeholder='Enter your name'  required  /><br /><br />
        <input type="email" ref = {emailRef} name="email" placeholder='Enter your email'  required /><br /><br />
        <input type="text" ref = {mobileRef} name="mobile" placeholder='Enter your mobile number'  required  /><br /><br />
        <button type="button" onClick={storeFormData}>Submit</button><br /><br />
      </form>
    </>);
}

export default App;