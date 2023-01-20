import React,{useContext} from 'react'
import {Contact} from './Father'
import Afich from './Afich';


export default function Home() {
    const {tabl, settabl,nom, setnom,phon, setphon,city, setcity,tabl4, settabl4,ajouter,suprimi,search,flag, setflag,triyi} = useContext(Contact);
    var phoneRegex = /^(\+212)[6-7]{1}[0-9]{8}$/;
  return (
    <div>
        <p className='big_title'>CONTACT</p>
        <form className="todo-form">
            <input type="text" className='todo-input' placeholder='Enter an name' value={nom} onChange={(e)=>{setnom(e.target.value)} } />
            <input type="text" className='todo-input' placeholder='Enter an phone number' value={phon} onChange={(e)=>{setphon(e.target.value)} } />
            <input type="text" className='todo-input' placeholder='Enter an city' value={city} onChange={(e)=>{setcity(e.target.value)} } /> <br/>
            <input type="button" className='todo-button' value="ADD" onClick={()=>{  if(nom=="" || city=="" || phon==""){alert("Please! Fill out the form completely")} else{ if(phoneRegex.test(phon)){ajouter()} else{alert("Please! Check out the number that you entered")} }   }}/>
            <input type="button" className='todo-button' value="SEARCH" onClick={()=>{setflag(1)}}/>
            <input type="button" className='todo-button' value="SORT" onClick={()=>triyi()}/>
        </form>
        <Afich/>
    </div>
    
  )
}
