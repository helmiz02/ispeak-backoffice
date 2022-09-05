import React, { useEffect, useState } from 'react'
import CenterCreate from '../shared/CenterCreate'
import Sidebar from './Sidebar'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CreateCourse from '../shared/createCourse';
import { useNavigate, useParams } from 'react-router-dom';


export default function CourseCreate() {

  const {idCenter} = useParams(); 
  const {idSession} = useParams();

  const [centreData, setCentreData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const token = localStorage.getItem("token");
  const [admin, setAdmin] = useState('');

  const [colorState, updateState] = useState("#FFF")
  let nArry  : string[] = []
  const [updateLagnuages, setUpdateLagnuages] = useState(nArry);
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [adminData, setAdminData] = useState([]);
  const [refreshFornewCourses,setRefresh]= useState(false)

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [AdminC, setAdminC] = useState("")
  const [fileName, setFileName] = useState("")

  
  
  const onChangeName = (e: any) => {
    setName(e.target.value);
  };

  const onChangePhone = (e: any) => {
    setPhone(e.target.value);
  };

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  //color
  const handleInput = (e: any) => {

    updateState(e.target.value);
  };

  const onChangeAdminC = (e: any) => {
    setAdminC(e.target.value);
  };

  const handleLanguages = (e: any) => {
    let newArry  : string[] = []
    newArry = updateLagnuages;
    newArry.push(e.target.value)
    setUpdateLagnuages(newArry);
  };

  const onChangeFile = (e : any) => {
    setFileName(e.target.files[0]);
    console.log("rrrrr","fdff")
  }

  const onChangeHandler = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };
  
  const navigate = useNavigate();

  const columns = [
    { id: 'logo', label: 'Logo', minWidth: 170 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'phone', label: 'Phone', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'language', label: 'Language', minWidth: 170 },
    { id: 'color1', label: 'Color 1', minWidth: 170 },
    { id: 'color2', label: 'Color 2', minWidth: 170 },
    { id: 'color3', label: 'Color 3', minWidth: 170 },
    { id: 'admin', label: 'Admin', minWidth: 170 },
    { id: 'actions', label: 'Actions', minWidth: 170 },
  ];


  const handleChange = (event: SelectChangeEvent) => {
    setAdmin(event.target.value as string);
  };

  return (
    <div className="row">
      <Sidebar />

      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">New Course</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            {
            /* <div className="btn-group me-2">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Share
              </button>
              /*<button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Export
              </button>
            </div> */}
          </div>
        </div>
        <div className="row p-4">
          <div >
            <CreateCourse  
            refreshFornewCourses={refreshFornewCourses} setRefresh={setRefresh} idCenter={idCenter} idSession={idSession}
            />
          </div>
        </div>
      </main>
    </div>
  )
}