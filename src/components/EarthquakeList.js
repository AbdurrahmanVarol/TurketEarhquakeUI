import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Table, Row, Col } from "reactstrap";
import MyContext from "../contexts/MyContext";
import PaginationComponent from "./PaginationComponent";

function EarthquakeList() {
  const location = useLocation();
  const { siteType, currentPage } = location.state;

  const { totalPage, setCurrentPage, setSiteType, setTotalPage } =
    useContext(MyContext);

  const navigate = useNavigate();
  const [earthquakes, setEarthquakes] = useState([]);
  const getData = () => {
    fetch(
      `https://localhost:44374/api/Earthquakes/paginated?SiteType=${siteType}&PageNumber=${currentPage}&PageSize=15`
    )
      .then((response) => response.json())
      .then((data) => {
        setEarthquakes(data.earthquakes);
        setCurrentPage(currentPage);
        setTotalPage(data.totalPage);
      });
  };

  useEffect(() => {
    getData();
    setSiteType(siteType);
  }, [siteType, currentPage]);

  const navigateToMap = (latitude, longitude) => {
    navigate("/map", { state: { latitude, longitude } });
  };

  const getColorBySize = (magnitude) => {
    if (magnitude < 3) return "safe";
    else if (magnitude >= 3 && magnitude <= 4) return "warning";
    else return "danger";
  };

  return (
    <div>
      <Table bordered borderless hover responsive striped>
        <thead>
          <tr>
            <th style={{width:"20%"}}>Date</th>
            <th style={{width:"8%"}}>Latitude</th>
            <th style={{width:"8%"}}>Longitude</th>
            <th style={{width:"8%"}}>Depth</th>
            <th style={{width:"8%"}}>Type</th>
            <th style={{width:"8%"}}>Magnitude</th>
            <th style={{width:"40%"}}>Location</th>
          </tr>
        </thead>
        <tbody>
          {earthquakes.map((item, index) => (
            <tr
              key={index}
              onClick={() => navigateToMap(item.latitude, item.longitude)}
            >
              <td>{item.date}</td>
              <td>{item.latitude}</td>
              <td>{item.longitude}</td>
              <td>{item.depth}</td>
              <td>{item.type}</td>
              <td className={getColorBySize(item.magnitude)}>{item.magnitude}</td>
              <td className="text-start">{item.location}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center">
        <PaginationComponent></PaginationComponent>
      </div>
    </div>
  );
}

export default EarthquakeList;
