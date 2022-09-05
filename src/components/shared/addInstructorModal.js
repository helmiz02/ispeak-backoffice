import React, {useState} from 'react';

import Modal from '@mui/material/Modal';
import axios from 'axios'
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import CenterAdmin from './AdminCreate';
import { Box } from '@mui/material';
const style = {
  position: 'absolute',
  top: '0%',
  left: '25%',
//   transform: 'translate(0%, -25%)',
  width: 550,
  bgcolor: 'background.paper',
  border: '1px solid #000',

  p: 4,
};

export default function AddInstructorModal({open, setOpen,  refreshFornewAdmins, setRefresh,}) {
 
  const [form, setForm] = useState({});
  const token = localStorage.getItem("token");

  const {idCenter} = useParams();

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setOpen(false);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/${idCenter}/create-instructor`, form, { headers: { Authorization: `${token}` } })
      .then(res => {
        setMessage(res.data.message)
        /* hide form after save */
        setForm({})
        /* hide errors after save */
        setErrors({})
        setShow(true)
        setRefresh(!refreshFornewAdmins)
        handleClose()
        setTimeout(() => {
          setShow(false)
        }, 4000);
      })
      .catch(err => setErrors(err.response.data))

  }

  const onChangeHandler = (e) => {
  

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };


  return (
    <div>
     
      <Modal
        open={open}
        onClose={handleClose}
      >
         <Box sx={style}>
        
            <h4>Create instructor</h4>
        
          <div>
            <CenterAdmin onChangeHandler={onChangeHandler} onSubmit={onSubmitHandler} handleClose={handleClose} />
          </div>
          </Box>
      </Modal>
    </div>
  );
}
