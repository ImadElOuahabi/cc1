import React,{useContext} from 'react'
import {Contact} from '../imad_cc/Father'
import '../../App.css'


export default function Afich() {
    const {tabl, settabl,nom, setnom,phon, setphon,city, setcity,tabl4, settabl4,ajouter,suprimi,search} = useContext(Contact);
  return (
    <div>
        {    
        tabl.map((t)=>{
            return(
                        <ul key={t.id} className='todo-row ' >
                            <li  key={t.id}>
                                <div className='all_contact'>
                                    <div className='contact'>
                                        <label className='titre' htmlFor="">Name :</label>
                                        <input readOnly type="text"  value={t.name} className= "todo-tsck"/> 
                                    </div>
                                    <div>
                                        <label className='titre' htmlFor="">Number :</label>
                                        <input readOnly type="text"  value={t.tel}  className= "todo-tsck"/> 
                                    </div>
                                    <div>
                                        <label className='titre' htmlFor="">City :</label>
                                        <input readOnly type="text"  value={t.vill}  className= "todo-tsck"/> 
                                    </div>
                                </div>
                                <input type="button" value="DELETE" className='todo-delet' onClick={()=>suprimi(t.tel)}  />
                            </li>
                        </ul>
                    )
                })
        }
    </div>
  )
}
