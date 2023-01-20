import React,{createContext,useState} from 'react'

export const Contact = createContext();

export default function Father({children}) {
const [tabl, settabl] = useState([
    {name:"Imad ",tel:"+212619000000",vill:"Tanger"} ]
);
const [nom, setnom] = useState("");
const [phon, setphon] = useState("");
const [city, setcity] = useState("");
const [tabl4, settabl4] = useState([]);
const [flag, setflag] = useState(0);
const [madina, setmadina] = useState("");

const ajouter =()=>{
    let tabl2 =[...tabl];
    let obj = {};
    obj.name = nom;
    obj.tel = phon;
    obj.vill = city;
    tabl2.push(obj);
    settabl(tabl2);
    setnom("");
    setphon("");
    setcity("");
}

const suprimi = (alo) => {
    let tabl3  = tabl.filter((cc)=>{
        return cc.tel !== alo;
    });
    settabl(tabl3);

    let tabl6  = tabl4.filter((cc)=>{
      return cc.tel !== alo;
  });
  settabl4(tabl6);
}

const search =() =>{
      let tabl3  = tabl.filter((cc)=>{
          return cc.vill === madina;
      });
      settabl4(tabl3);
      setmadina("");
}

const triyi=()=>{
    let tabl5 =[...tabl];
    tabl5.sort( (a, b) => {
    return a.name.localeCompare(b.name);
  });
  settabl(tabl5);
}

  return (
    <Contact.Provider value={{tabl, settabl,nom, setnom,phon, setphon,city, setcity,tabl4, settabl4,ajouter,suprimi,search,flag, setflag,madina, setmadina,triyi}}>
      {children}
    </Contact.Provider>
  )
}

