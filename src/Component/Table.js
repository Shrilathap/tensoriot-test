import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import PaginationList from './Pagination'
import Table from 'react-bootstrap/Table';
// import img from '../loading-icon-16.jpg'
const TableComp=(props)=>{
    const launches=useSelector((state)=>{
        return state.launches
    })
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(12)

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
      }
      const totalPages = Math.ceil(launches.length / itemsPerPage)
      const startIndex = (currentPage - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      const currentLaunches = launches.slice(startIndex, endIndex)

    return(
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Launched(UTC)</th>
                        <th>Location</th>
                        <th>Mission</th>
                        <th>Orbit</th>
                        <th>Launch status</th>
                        <th>Rocket</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // currentLaunches.length===0?<img src={img} alt='Loading'/>:
                        currentLaunches.map((ele, i) => {
                            const date = new Date(ele.launch_date_utc)
                            const options = {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                                hour12: false,
                                timeZone: "UTC",
                              }
                              const formattedDate = date.toLocaleString("en-US", options);
                            return (<tr key={i}>
                                <td>{i + 1}</td>
                                <td>{formattedDate}</td>
                                <td>{ele.launch_site.site_name}</td>
                                <td>{ele.mission_name}</td>
                                <td>{ele.rocket.second_stage.payloads[0].orbit}</td>
                                {ele.upcoming ? <td style={{color:'orange'}}>Upcoming</td> : (ele.launch_success ? <td style={{color:'green'}}>Success</td> : <td style={{color:'red'}}>Failed</td>)}
                                <td>{ele.rocket.rocket_name}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </Table>
            <PaginationList handlePageChange={handlePageChange} totalPages={totalPages} currentPage={currentPage}/>
        </div>
    )
}
export default TableComp