// import React, { useEffect, useState} from "react";
// import { fetchApi } from "../../actions/dumpapi";

// function Api() {
//     const [state, setState] = useState([]);
    
//     useEffect(() => {
//             const responses =  fetchApi();
           
//             setState([...responses]);
//     }, []);


//     return (
//         <div>
           
           
//         </div>
//     );
// };



import React from 'react'
import dumpapi from 'C:/Users/Oluwanifemi Ogunnowo/Desktop/HTML/React/hello-wrld-2/src/actions/dumpapi.js'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Modal from '../modal-component/modal';



const Api = () => {
    const [show, setShow] = useState(false)
    const [read, setRead] = useState(true)
    const [rowNo, setRowNo] = useState([])

    let [responseData, setResponseData] = React.useState('')

    const fetchData = (e) => {
            dumpapi.getData()
            .then((response)=>{
                setResponseData(response.data)
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        }

        useEffect(() => {
            fetchData()
        }, []);


    return (
        <div>
             <table className='table table-sm table-hover table-bordered table-dark'>
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Username</th>  
                        <th scope='col'>Email</th>
                        <th scope='col'>Address</th>
                        <th scope='col'>Phone</th>
                        <th scope='col'>Website</th>
                        <th scope='col'>Company</th>
                    </tr>
                </thead>
                {responseData && responseData.map(data => {
                    return (
                        <tbody key={data.id} onClick={() => {setRowNo(data.id); setShow(true)}}>
                            <Modal title={data.name} onClose={() => setShow(false)} edit={() => setRead(!read)} show={show && rowNo===(data.id)}>
                                <div>
                                    <span>Username:</span>
                                    <input 
                                    className='modal-inp'
                                    defaultValue={(data.username)}
                                    type="text"
                                    readOnly={read}
                                    />
                                </div>
                                <div>
                                    <span>
                                        Email: 
                                    </span>
                                    <input
                                    className='modal-inp'
                                    defaultValue={(data.email)}
                                    type="text"
                                    readOnly={read}
                                    />
                                </div>
                                <div>
                                    <span>
                                        Address:
                                    </span>
                                    <input  
                                    className='modal-inp'
                                    defaultValue={(data.address.suite) + ", " + (data.address.street) + ", " + (data.address.city) + ". " + (data.address.zipcode)}
                                    type="text"
                                    readOnly={read}
                                    />  
                                </div>
                                <div>
                                    <span>
                                        Geo:  
                                    </span>
                                    <input 
                                    className='modal-inp'
                                    defaultValue={(data.address.geo.lat) + ", " + (data.address.geo.lng)  }
                                    type="text"
                                    readOnly={read}
                                    />
                                </div>
                                <div>
                                    <span>
                                        Phone:
                                    </span>
                                    <input 
                                    className='modal-inp'
                                    defaultValue={(data.phone)}
                                    type="text"
                                    readOnly={read}
                                />
                                </div>
                                <div>
                                    <span>
                                    Website:
                                    </span>
                                    <input 
                                    className='modal-inp'
                                    defaultValue={(data.website)}
                                    type="text"
                                    readOnly={read}
                                    />
                                </div>
                                <div className='col'>
                                    <span>
                                    Company name:
                                    </span>
                                    <input 
                                    className='modal-inp'
                                    defaultValue={(data.company.name)}
                                    type="text"
                                    readOnly={read}
                                    />
                                </div>
                                <div>
                                    <span>
                                    Company Catch Phrase:
                                    </span>
                                    <input 
                                    className='modal-inp'
                                    defaultValue={(data.company.catchPhrase)}
                                    type="text"
                                    readOnly={read}
                                    />  
                                </div>
                                <div>
                                    <span>
                                    Business Strategy:
                                    </span>
                                    <input 
                                    className='modal-inp'
                                    defaultValue={(data.company.bs)}
                                    type="text"
                                    readOnly={read}
                                    /> 
                                </div>
                                
                                
                            </Modal>
                            <tr >
                                <td>{data.name}</td>
                                <td>{data.username}</td>
                                <td>{data.email}</td>
                                <td>{data.address.street}</td>
                                <td>{data.phone}</td>
                                <td>{data.website}</td>
                                <td>{data.company.name}</td>
                            </tr>
                        </tbody>
                    
                    )
                })}
            </table>
        </div>
       
    )
}


export default Api;