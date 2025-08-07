import {createContext, useState ,useEffect } from 'react';
import './App.css'
import Cards from './Component/Cards';

const itemContext = createContext();

function App() {
  const [item, setItem] = useState()
   const [load, setLoad] = useState(true)


useEffect(()=>{ 
   
  const timer = setTimeout(async()=>{
    const response =await fetch('https://jsonplaceholder.typicode.com/posts');
     const data = await response.json();
      setLoad(false);
     setItem(data);
  },5000)
  return () => clearTimeout(timer);
},[])

  return (<>
  <itemContext.Provider value={{item, setItem}}>
<div className='flex justify-center align-middle text-4xl font-extrabold'>{load && <h1>Loading...</h1>}</div>
      <Cards />
    </itemContext.Provider>
    <div className='flex justify-center align-middle'>
    
     <button className='btn m-2'>
       1
      </button>
     
      <button className='btn m-2'>
       2
      </button>
      <button className='btn m-2'>
        3
      </button>
    </div>
  </>)
}

export default App
export {itemContext}
