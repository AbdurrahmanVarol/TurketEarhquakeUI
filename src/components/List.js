import React,{useState,useEffect} from 'react'
import {Table,Row,Col} from 'reactstrap'


function List({activeTab}) {
    const [data,setData]=useState([])
    const getData = () =>{
      fetch(`https://localhost:44374/api/Earthquakes?SiteType=${activeTab}`)
      .then(response=>response.json())
      .then(d=>setData(d))
      console.log(data) 
  }
  
  useEffect(() => {
    console.log("list:" + activeTab)
    getData();
  }, [activeTab]);


  return (
    <div>
        <Table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>latitude</th>
                    <th>longitude</th>
                    <th>depth</th>
                    <th>type</th>
                    <th>size</th>
                    <th>location</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item=>(
                    <tr>
                        <td>{item.date}</td>
                        <td>{item.latitude}</td>
                        <td>{item.longitude}</td>
                        <td>{item.depth}</td>
                        <td>{item.type}</td>
                        <td>{item.size}</td>
                        <td>{item.location}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
  )
}

export default List