import React from 'react'
import Sidebar from './Sidebar'
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

export default function Course() {
  
  // useEffect(() => {//https://ispeak.api.pfe.anypli.com/

  //   axios.get("http://localhost:5000/api/all-centers/", { headers: { Authorization: `${token}` } }).then(res => {
  //     setCentreData(res.data.centers);
  //     setTotalData(res.data.count);
  //   })
  // }, [])

  const navigate = useNavigate();

  const handelClick= () =>  {
    navigate(`/createcourse`);
  }

  return (
    
    <div className="row">
    <Sidebar />
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Session</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            
            <Button variant="outlined" onClick={()=>handelClick()} >Create course</Button>
       
          </div>
        </div>
    </main>
  </div>
  )
}
