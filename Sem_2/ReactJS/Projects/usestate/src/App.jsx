import React, { useReducer } from 'react'


const intitalState = { 
  count: 0,
  name: '',
  Rank: 0,
}

function reducer(state, action){


  switch(action.type){

    case "handleInc": console.log("Handle Inc fucntion called....");
                      console.log(action.name1);
                      return {...state, count: state.count + 1};
    case "handleDec": console.log("Handle Dec fucntion called....");
                      return {...state, count: state.count - 1};
    case "handleName": console.log("Handle Name fucntion called....");
                      return {...state, name: "samir singh"};
    default:         console.log("Handle Deafult for Rank fucntion called....");
                      return {...state, Rank: 100};

  }

}


export default function App() {
  const[state, dispatch] = useReducer(reducer, intitalState);


  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Name: {state.name}</p>
      <p>Rank: {state.Rank}</p>
      <button onClick={()=>{dispatch({type: "handleInc", name1: "samir"})}}>HandleInc</button>
      <button onClick={()=>{dispatch({type: "handleDec"})}}>HandleDec</button>
      <button onClick={()=>{dispatch({type: "handleName"})}}>HandleName</button>
      <button onClick={()=>{dispatch({type: "handleRank"})}}>HandleRank</button>


    </div>
  )
}











// import React, { useEffect, useState } from 'react'

// export default function App() {
//   const[count, setCount] = useState(0);
//   const[name, setName] = useState('');

//   function handleInc(){
//     console.log("Handle Increment fucntion is under process....");
//     setCount(count + 1);
//     console.log("Handle fucntion got executed....");
//   }

//    function handleDec(){
//     console.log("Handle Decrement fucntion is under process....");
//     setCount(count - 1);
//     console.log("Handle fucntion got executed....");
//   }

//   function handleName(){
//     console.log("Name function is getting updated....");
//     setName("amit");
//     console.log("fucntion name got executed....");
//   }


//   useEffect(()=>{
//     console.log("Useeffect hook will be execute only once during mounting phase......");
//     console.log("Only count will uodate....")
//     const data = JSON.parse(localStorage.getItem("count"));
//     setCount(data);

//     console.log("Name will be update...");
//     const data1 = localStorage.getItem("name");
//     setName(data1);

//     console.log("Function got rendered.....")
//   },[]);


//   useEffect(()=>{
//     console.log("Useeffect function is under procedd due to dependency got updated...");
//     console.log("Only count is updatted......");
//     localStorage.setItem("count", JSON.stringify(count));

//     console.log("Only name is updatted......");
//     localStorage.setItem("name", name);

//     console.log("Updation done......");
//   },[count]);

  

//   return (
//     <div>
//       <p>Count:{count}</p>
//       <p>Name: {name == ''?"no_name":name}</p>
//       <button onClick={handleInc}>Inc</button>
//       <button onClick={handleDec}>Dec</button>
//       <button onClick={handleName}>updateName</button>
//       {/* <button onClick={()=>{localStorage.setItem("count", JSON.stringify(count))}}>Sumbit</button> */}
//     </div>
//   )
// }