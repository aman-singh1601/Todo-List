import logo from './logo.svg';
import todo_img from './images/todo_image.svg'
import add_btn_img from './images/add_btn.svg'
import delete_btn_img from './images/delete_btn.svg'

import './App.css';
import './components/myStyles.css'


function App() {
  return (
  <div className='main-div'>
    <div className='child-div'>
         <figure>
            <img src={todo_img} alt="*****"/> 
            <figcaption >Add Your List Here</figcaption> 
         </figure>
     
       <div className="addItems">
         <div className="input-area">
            <input placeholder="Add Items..."/>
            <img src={add_btn_img} title='Add Item' />
         </div>
       </div> 
       <div className='showItems'>
         <div className="singleItem">
            <h3>Apple</h3>
            <img src={delete_btn_img} title='Delete Item'/>
         </div>

       </div>
       <div className="remove-btn-continer">
        <button className="remove-btn"><span>CHECK LIST</span></button>
       </div>
    </div>
   </div>
  );
}

export default App;
