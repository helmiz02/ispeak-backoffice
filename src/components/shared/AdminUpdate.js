import * as React from "react";
import InputGroup from "./InputGroup2";
import styled from "styled-components";

const Container = styled.span`
display: inline-flex;
align-items: center;
width: 150px;
max-width: 150px;
padding: 4px 12px;
border: 1px solid #bfc9d9;
border-radius: 4px;

input[type="color"] {
    margin-right: 8px;
    border: none;
    background: none;
    height: auto;
    width: auto;
    &::-webkit-color-swatch-wrapper {
        height: 14px;
        width: 14px;
        padding: 0;
    }
    &::-webkit-color-swatch {
        border: 1px solid #bfc9d9;
        border-radius: 4px;
    }

}

input[type="text"] {
    border: none;
    width: 100%;
    font-size: 14;
}
`;
export default function AdminUpdate({ admin, onSubmit, onChangeHandler}) {

    

    
    const [centerDataState, setStateCenterDataState] = React.useState({ ...admin });
    
    React.useEffect(() => {
        setStateCenterDataState({ ...admin })

    }, [admin])

    return (

        <div className="row justify-content-between">
            <div className="col-8">
                <form onSubmit={(e) => onSubmit(e, centerDataState)} >
                    <InputGroup
                        label="FirstName"
                        type="text"
                        name="firstName"
                        onChangeHandler={(e) => {
                            onChangeHandler(e)
                            let newState = centerDataState
                            newState.firstName = e.target.value
                            setStateCenterDataState({ ...newState })
                        }
                        }
                        value={centerDataState.firstName}
                    />
                    <InputGroup
                        label="LastName"
                        type="text"
                        name="lastName"
                        onChangeHandler={(e) => {
                            onChangeHandler(e)
                            let newState = centerDataState
                            newState.lastName = e.target.value
                            setStateCenterDataState({ ...newState })
                        }
                        }
                        value={centerDataState.lastName}
                    />
                    <InputGroup
                        label="Phone"
                        type="number"
                        name="phone"
                        onChangeHandler={(e) => {
                            onChangeHandler(e)
                            let newState = centerDataState
                            newState.phone = e.target.value
                            setStateCenterDataState({ ...newState })
                        }
                        }
                        value={centerDataState.phone}
                    />
                    <div class="row">
                         <div class="d-flex justify-content-end" style={{ padding: '0.5rem' }}>
                            <button className="btn btn-primary" type="submit">Update Admin</button>
                         </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
