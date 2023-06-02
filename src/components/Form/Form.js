import React from "react";
import "bootstrap";
import { useForm } from "react-hook-form";


const MyForm = () => {
  const {register, formState: {errors}, handleSubmit} = useForm()

  const onSubmit = data => {
      console.log(data)
      exportUserInfo(data)
  }

  function exportUserInfo(data) {
    const fileData = JSON.stringify(data);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "user-info.json";
    link.href = url;
    link.click();
  }

  

  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
        <div >
          <div >
            <label htmlFor="fname" className="form-label">
              Firstname
            </label>
            {errors.Firstname && <p className="alert alert-danger text-align:centre" role="alert">{errors.Firstname?.message}</p>}
          </div>
          <input
            id="fname"
            type="text"      
            {...register("Firstname", 
              { required:
              'required',
              pattern:{
                value: /^([A-Za-z-])/g,
              message: "Firstname...",
            },
          })}
            className="form-control mb-3"
            placeholder="Firstname..." 
            aria-invalid={errors.Firstname ? "true" : "false"} 
          />
        </div>
        <div >
          <div >
            <label htmlFor="lname" className="form-label">
              Lastname
            </label>
            {errors.Lastname && <p className="alert alert-danger text-align:centre" role="alert">{errors.Lastname?.message}</p>}
          </div>
          <input
            id="lname"
            type="text"      
            {...register("Lastname", 
              { required:
              'required',
              pattern:{
              value: /^([A-Za-z-])/g,
              message: "Lastname..."
            }
            })}
            className="form-control mb-3"
            placeholder="Lastname..."
          />
        </div>
        <div >
          <div >
            <label htmlFor="email" className="form-label">
              Email
            </label> 
             {errors.Email && <p className="alert alert-danger text-align:centre" role="alert">{errors.Email?.message}</p>}
          </div>
          <input
            id="email"
            type="email"      
            {...register("Email", 
              { required:
              'required',
              pattern:{
              value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
              message: "Input valid email"
            }
            })}
           
            className="form-control mb-3"
            placeholder="johndoe@example.com"
          />
         
        </div>
        <div >
          <div >
            <label htmlFor="phone" className="form-label">
              Phonenumber
            </label>
            {errors.Phonenumber && <p className="alert alert-danger text-align:centre" role="alert">{errors.Phonenumber?.message}</p>}
          </div>
          <input
            id="phone"
            type="tel"      
            {...register("Phonenumber", 
              {pattern:{ 
              value:  /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm,
              message: "Input a valid phone number"
            }
            })}
            className="form-control mb-3"
            placeholder="7402221111"
          />
        </div>
        <button
            onClick={handleSubmit}
            className="btn btn-primary">
            Submit Form
        </button>
    </form>
    )

  }


export default MyForm; 
