import React,{useState,useEffect} from 'react'
import {Button} from 'reactstrap'
import List from './List'


const TabComponent = ()=> {
    const [activeTab,setActiveTab] = useState(1)
    
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    useEffect(()=>{console.log('active: ' + activeTab)},[activeTab])


  return (
    <div>
        <Button onClick={()=>{setActiveTab(1)}}><img src=''></img> Afad</Button>
        <Button onClick={()=>{setActiveTab(2)}}>Kandilli</Button>
        <div className={`logo ${activeTab===1?"bgAfad":"bgKandilli"}`} ></div>
        <List  activeTab={activeTab}></List>
    </div>
  )
}

export default TabComponent;