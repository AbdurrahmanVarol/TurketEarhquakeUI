import React,{useState,useEffect} from 'react'
import {useNavigate,useLocation,useParams} from 'react-router-dom'
import {Table,Row,Col} from 'reactstrap'


function EarthquakeList() {
  const location = useLocation();
  const {siteType} = location.state
    const navigate = useNavigate()
    const [data,setData]=useState([])
    const getData = () =>{

      fetch(`https://localhost:44374/api/Earthquakes?SiteType=${siteType}`)
      .then(response=>response.json())
      .then(d=>setData(d))
      console.log(data) 
  }
  
  useEffect(() => {
    getData();
  }, [siteType]);

  const navigateToMap = (latitude, longitude) => {
    navigate("map", { state: { latitude, longitude } });
  };

  return (
    <div>
        <Table bordered borderless hover responsive striped>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Depth</th>
                    <th>Type</th>
                    <th>Size</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=>(
                    <tr key={index} onClick={()=> navigateToMap(item.latitude,item.longitude)}>
                        <td>{item.date}</td>
                        <td>{item.latitude}</td>
                        <td>{item.longitude}</td>
                        <td>{item.depth}</td>
                        <td>{item.type}</td>
                        <td>{item.size}</td>
                        <td className='text-start'>{item.location}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
  )
}

export default EarthquakeList