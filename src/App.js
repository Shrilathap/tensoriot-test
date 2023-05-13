import React, {useState, useEffect } from "react";
import {useDispatch} from 'react-redux'
import { startGetAllLaunch, startGetLaunchFailed, startGetLaunchSuccess, startGetUpcomingLaunch } from "./Action/launchAction";
import TableComp from "./Component/Table";
import Dropdown from 'react-bootstrap/Dropdown';
const App=(props)=>{
  const [filter, setFilter] = useState('All Launches');
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(startGetAllLaunch())
  },[])
  const handleFilterSelect = (filter) => {
    setFilter(filter)
    if(filter==='Failed Launches'){
      dispatch(startGetLaunchFailed())
    }
    else if(filter==='Upcoming Launches'){
      dispatch(startGetUpcomingLaunch())
    }
    else if(filter==='Successful Launches'){
      dispatch(startGetLaunchSuccess())
    }
    else{
      dispatch(startGetAllLaunch())
    }
  }
  return (
    <div className="container">
       <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {filter}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleFilterSelect('All Launches')}>
          All Launches
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleFilterSelect('Upcoming Launches')}>
          Upcoming Launches
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleFilterSelect('Successful Launches')}>
          Successful Launches
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleFilterSelect('Failed Launches')}>
          Failed Launches
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <TableComp/>
    </div>
  );
}

export default App;
