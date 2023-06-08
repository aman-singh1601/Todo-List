import React,{useState} from 'react'


import todo_img from './images/todo_image.svg'
import add_btn_img from './images/add_btn.svg'
import delete_btn_img from './images/delete_btn.svg'

import './App.css';
import './components/myStyles.css'



function App() {
  const [itemName,setItemName]=useState('');
  const [items,setItems]=useState([]);

  const clickHandler=()=>{
    if(!itemName){
      return;
    }else{
      
        setItems([...items,itemName]);
        setItemName('');
        console.log(items)
    } 
  }

  //delete btn
  const deleteBtnHandler=(id)=>{
    const updatedItems =items.filter((elem,ind)=>{
        return id!==ind;
    })
    setItems(updatedItems)
  }

  const removeAll=()=>{
    setItems([]);
  }

  return (
  <div className='main-div'>
    <div className='child-div'>
         <figure>
            <img src={todo_img} alt="*****"/> 
            <figcaption >Add Your List Here</figcaption> 
         </figure>
     
       <div className="addItems">
         <div className="input-area">
            <input placeholder="Add Items..." 
            value={itemName}
            onChange={(e)=>setItemName(e.target.value)}
            />
            <img src={add_btn_img} 
            title='Add Item'
            onClick={clickHandler} />
         </div>
       </div> 
       <div className='showItems' >
        {
          items.map((item,ind)=>{
           return(
            <div className="singleItem" key={ind}>
            <h3>{item}</h3>
            <img src={delete_btn_img} title='Delete Item' onClick={()=>deleteBtnHandler(ind)}/>
         </div>
           )
          })
        }

         {/* <div className="singleItem">
            <h3>Apple</h3>
            <img src={delete_btn_img} title='Delete Item'/>
         </div> */}

       </div>
       <div className="remove-btn-continer">
        <button className="remove-btn" onClick={removeAll}><span>Remove ALL</span></button>
       </div>
    </div>
   </div>
  );
}

export default App;
