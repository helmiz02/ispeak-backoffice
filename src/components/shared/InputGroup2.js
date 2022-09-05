import React from 'react'
import classnames from 'classnames'

function InputGroup2({label, type, name, onChangeHandler, errors, value}) {
  return (
    //<div className="mb-3">
    <div class="row">
      <div class="col" style={{padding: '0.5rem'}}><label for="Email" className="form-label">
        {label}
      </label>
    </div>
    <div class="col" style={{padding: '0.5rem'}}>
      <input type={type} value={value} className={(classnames("form-control", {"is-invalid": errors}))}  name={name} onChange={onChangeHandler}/>
      {
        errors && (<div class="invalid-feedback">
        {errors}
      </div>)
      }
    </div>
  </div>
  )
}

export default InputGroup2