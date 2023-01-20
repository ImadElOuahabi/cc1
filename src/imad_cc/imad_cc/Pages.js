import React,{useContext} from 'react'
import {Contact} from './Father'
import Home from './Home';
import Cherche from './Cherche';

export default function Pages() {
    const {tabl, settabl,nom, setnom,phon, setphon,city, setcity,tabl4, settabl4,ajouter,suprimi,search,flag, setflag} = useContext(Contact);
    var pg = ""
    if(flag==0){
         pg = <Home/> ;
    }
    else{
         pg = <Cherche/> ;
    }
  return (
    <div>
        {pg}
    </div>
    
  )
}