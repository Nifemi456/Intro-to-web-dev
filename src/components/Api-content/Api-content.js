import React from 'react'
import dumpapi from 'C:/Users/Oluwanifemi Ogunnowo/Desktop/HTML/React/hello-wrld-2/src/actions/dumpapi.js'
import { useEffect, useState } from 'react'
import Modal from '../modal-component/modal';



const Api = () => {
    const [show, setShow] = useState(false)
    const [read, setRead] = useState(true)
    const [rowNo, setRowNo] = useState([])
    
    let [responseData, setResponseData] = useState('')
    


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
    
    const [newData, setNewData] = useState()
    
    const onChangeInput = (e, id) => {
        const { name, value } = e.target
        console.log('name', name)
        console.log('value', value)
        console.log('id', id)
    
        const editData = responseData.map((item) =>
          item.id === id && name ? { ...item, [name]: value } : item
        )
        
        console.log('editData', editData)
    
        setNewData(editData)
    }

    const onSubmit = () => {
        if (newData) {
            setResponseData(newData)
        }
        setShow(false)
        console.log(responseData)
    }

    
    const onChangeCompanyInput = (e, id) => {
        const company = 
                {
                name:"" ,
                catchPhrase:"" ,
                bs:"" ,
                }

        responseData.map(data => {

            if (id === data.id) {
                company["name"] = (data.company.name)
                company["catchPhrase"] = (data.company.catchPhrase)
                company["bs"] = (data.company.bs)
            }
            return null
        })
        
        const { name, value } = e.target
        console.log('name', name)
        console.log('value', value)
    
        company[name] = value
 
        const editData = responseData.map((item) =>
          item.id === id && "company" ? { ...item, "company": company } : item
        )
    
        setNewData(editData)

    }
    

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
                    <tbody key={data.id} onClick={() => {setRowNo(data.id); setShow(true); setRead(true)}}>
                        <Modal title={data.name} onClose={() => {setShow(false); setNewData()}} edit={() => {setRead(!read)}} show={show && rowNo===(data.id)} submit={() => onSubmit()}>
                            <div>
                                <span>Username:</span>
                                <input 
                                className='modal-inp'
                                defaultValue={(data.username)}
                                name={"username"}
                                type="text"
                                readOnly={read}
                                onChange={(e) => onChangeInput(e, (data.id))}
                                />
                            </div>
                            <div>
                                <span>
                                    Email: 
                                </span>
                                <input
                                className='modal-inp'
                                defaultValue={(data.email)}
                                name={"email"}
                                type="text"
                                readOnly={read}
                                onChange={(e) => onChangeInput(e, (data.id))}
                                />
                            </div>
                            <div>
                                <span>
                                    Address:
                                </span>
                                <input  
                                className='modal-inp'
                                defaultValue={(data.address.suite) + ", " + (data.address.street) + ", " + (data.address.city) + ". " + (data.address.zipcode)}
                                name={"address"}
                                type="text"
                                readOnly={read}
                                onChange={(e) => onChangeInput(e, (data.id))}
                                />  
                            </div>
                            {/* <div>
                                <span>
                                    Geo:  
                                </span>
                                <input 
                                className='modal-inp'
                                defaultValue={(data.address.geo.lat) + ", " + (data.address.geo.lng)  }
                                name={(data.address.geo.lat) + (data.address.geo.lng)}
                                type="text"
                                readOnly={read}
                                onChange={(e) => onChangeInput(e, (data.id))}
                                />
                            </div> */}
                            <div>
                                <span>
                                    Phone:
                                </span>
                                <input 
                                className='modal-inp'
                                defaultValue={(data.phone)}
                                name={"phone"}
                                type="text"
                                readOnly={read}
                                onChange={(e) => onChangeInput(e, (data.id))}
                            />
                            </div>
                            <div>
                                <span>
                                Website:
                                </span>
                                <input 
                                className='modal-inp'
                                defaultValue={(data.website)}
                                name={"website"}
                                type="text"
                                readOnly={read}
                                onChange={(e) => onChangeInput(e, (data.id))}
                                />
                            </div>
                            <div className='col'>
                                <span>
                                Company name:
                                </span>
                                <input 
                                className='modal-inp'
                                defaultValue={(data.company.name)}
                                name={"name"}
                                type="text"
                                readOnly={read}
                                onChange={(e) => onChangeCompanyInput(e, (data.id))}
                                />
                            </div>
                            <div>
                                <span>
                                Company Catch Phrase:
                                </span>
                                <input 
                                className='modal-inp'
                                defaultValue={(data.company.catchPhrase)}
                                name={"catchPhrase"}
                                type="text"
                                readOnly={read}
                                onChange={(e) => onChangeCompanyInput(e, (data.id))}
                                />  
                            </div>
                            <div>
                                <span>
                                Business Strategy:
                                </span>
                                <input 
                                className='modal-inp'
                                defaultValue={(data.company.bs)}
                                name={"bs"}
                                type="text"
                                readOnly={read}
                                onChange={(e) => onChangeCompanyInput(e, (data.id))}
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