import React, {useState} from 'react';
import Modal from '@mui/material/Modal';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import InstructorCreate from './InstructorCreate';
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
  
  const [formErrors, setFormErrors] = React.useState({})

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(form);
    setFormErrors(validate(form))
    if(Object.keys(formErrors).length === 0 )
    axios.post(`https://ispeak.api.pfe.anypli.com/api/${idCenter}/create-instructor`, form, { headers: { Authorization: `${token}` } })
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
      .catch(err => { setErrors(err.response.data)})
  }
  

  const validate = (values) => {
    const errors = {};
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const reg = /^[0-9]{8}$/
    if (!values.firstName) {
        errors.firstName = "First Name is required";
    } else if (values.firstName.length < 4 ) {
      errors.firstName = "First name must be more than 4";
    }
    if (!values.lastName) {
        errors.lastName = "Last Name is required";
    } else if (values.lastName.length < 4 ) {
      errors.lastName = "Last name must be more than 4";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format"
    } 
    if (!values.language) {
      errors.language = "Language is required";
    } 
    if (!values.phone) {
      errors.phone = "Phone is required";
    } else if (!reg.test(values.phone)) {
      errors.phone = "This is not a valid phone format"
    }
    if (!values.password) {
      errors.password = "password is required";
    } 
    
    return errors
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
            <InstructorCreate  formErrors={formErrors} form={form} onChangeHandler={onChangeHandler} onSubmit={onSubmitHandler} handleClose={handleClose} />
          </div>
          </Box>
      </Modal>
    </div>
  );
}
