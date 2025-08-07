import React,{useContext, useRef, useState} from 'react'
import { itemContext } from '../App'
import '../App.css'
function Crads() {
const [count, setCount] = useState(6)
  const card = useContext(itemContext);
  console.log(card)
  const handledelete = (id)=>{
   const newCard = card.item.filter((item)=> item.id !== id)
   card.setItem(newCard);
   setCount(count+1);
   console.log("inside delete function")
  }
  return (
   
    <div className='w-full flex flex-wrap justify-center align-middle gap-3 overflow-hidden'>
     
     {card.item?.map((items)=>{
    
      if(items.id <= count){
      return(
       
        <div key={items.id} className='border-2 my-2 w-[40%]' >
          <div className='deletitem' >
            <button onClick={()=>handledelete(items.id)}> &#10006;</button>
           </div>
<p className='text-xl font-medium text-gray-700 p-2'>{items.body}</p>
<p className='text-lg font-bold text-indigo-400'>{items.title}</p>
        </div>
      )
     }})}
    </div> 
  )
}

export default Crads
