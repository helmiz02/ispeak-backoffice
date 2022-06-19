import React, { useEffect, useState } from 'react'
import DataTable from '../shared/DataTable'
import Sidebar from './Sidebar'
import axios from 'axios'



export default function Center() {

  const [centreData, setCentreData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const token = localStorage.getItem("token");

  useEffect(() => {

    axios.get("https://ispeak.api.pfe.anypli.com/api/centers/", { headers: { Authorization: `${token}` } }).then(res => {
      setCentreData(res.data.centers);
      setTotalData(res.data.count);
    })
  }, [])

  const columns = [
    { id: 'logo', label: 'Logo', minWidth: 170 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'phone', label: 'Phone', minWidth: 170 },
    { id: 'language', label: 'Language', minWidth: 170 },
    { id: 'color1', label: 'Color 1', minWidth: 170 },
    { id: 'color2', label: 'Color 2', minWidth: 170 },
    { id: 'color3', label: 'Color 3', minWidth: 170 },
    { id: 'actions', label: 'Actions', minWidth: 170 },
  ];
  console.log(centreData, totalData);

  return (
    <div className="row">
      <Sidebar />

      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Center</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            {/* <div className="btn-group me-2">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Share
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Export
              </button>
            </div> */}
          </div>
        </div>


        <div className="table-responsive">
          <DataTable
            data={centreData} totalData={totalData} columns={columns}
          />
        </div>

      </main>
    </div>
  )
}
