import React,{useContext} from 'react'
import {Contact} from './Father'
import Afich_cherche from './Afich_cherche';


export default function Cherche() {
    const {tabl, settabl,nom, setnom,phon, setphon,city, setcity,tabl4, settabl4,ajouter,suprimi,search,flag, setflag,madina, setmadina} = useContext(Contact);
  return (
    <div>
        <h1>CONTACT</h1>
        <form className="todo-form">
            <input type="text" className='todo-input' placeholder='Enter an city' value={madina} onChange={(e)=>{setmadina(e.target.value)} } /> <br/>
            <input type="button" className='todo-button' value="SEARCH" onClick={()=>search()}/>
            <input type="button" className='todo-button' value="HOME" onClick={()=>{setflag(0)}}/>
            <Afich_cherche/>
        </form>
        
    </div>
    
  )
}