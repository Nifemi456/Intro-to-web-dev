import React from "react"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const MyForm = () => {
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    Validate
    autoComplete="off"
    >
      <div>
        <TextField
          error
          fullWidth
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
          sx={{color:"white"}}
        />
        <TextField
          error
          fullWidth
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
    </Box>
  )
};

export default MyForm;


// import React from "react";
// import { useForm } from "react-hook-form";
// import Grid from '@mui/material/Grid'; 


// const MyForm = () => {
//   const {register, formState: {errors}, handleSubmit} = useForm()

//   const onSubmit = data => {
//       console.log(data)
//       exportUserInfo(data)
//   }

//   function exportUserInfo(data) {
//     const fileData = JSON.stringify(data);
//     const blob = new Blob([fileData], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.download = "user-info.json";
//     link.href = url;
//     link.click();
//   }

  

//   return (
//     <Grid item xs={6}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <div>
//               <div >
//                 <label htmlFor="fname">
//                   Firstname
//                 </label>
//                 {errors.Firstname && <p role="alert">{errors.Firstname?.message}</p>}
//               </div>
//               <input
//                 id="fname"
//                 type="text"      
//                 {...register("Firstname", 
//                   { required:
//                   'required',
//                   pattern:{
//                     value: /^([A-Za-z-])/g,
//                   message: "Firstname...",
//                 },
//               })}
//                 placeholder="Firstname..." 
//                 aria-invalid={errors.Firstname ? "true" : "false"} 
//               />
//             </div>
//             <div >
//               <div >
//                 <label htmlFor="lname">
//                   Lastname
//                 </label>
//                 {errors.Lastname && <p role="alert">{errors.Lastname?.message}</p>}
//               </div>
//               <input
//                 id="lname"
//                 type="text"      
//                 {...register("Lastname", 
//                   { required:
//                   'required',
//                   pattern:{
//                   value: /^([A-Za-z-])/g,
//                   message: "Lastname..."
//                 }
//                 })}
//                 placeholder="Lastname..."
//               />
//             </div>
//             <div >
//               <div >
//                 <label htmlFor="email" >
//                   Email
//                 </label> 
//                 {errors.Email && <p role="alert">{errors.Email?.message}</p>}
//               </div>
//               <input
//                 id="email"
//                 type="email"      
//                 {...register("Email", 
//                   { required:
//                   'required',
//                   pattern:{
//                   value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
//                   message: "Input valid email"
//                 }
//                 })}
              
//                 placeholder="johndoe@example.com"
//               />
            
//             </div>
//             <div >
//               <div >
//                 <label htmlFor="phone" >
//                   Phonenumber
//                 </label>
//                 {errors.Phonenumber && <p role="alert">{errors.Phonenumber?.message}</p>}
//               </div>
//               <input
//                 id="phone"
//                 type="tel"      
//                 {...register("Phonenumber", 
//                   {pattern:{ 
//                   value:  /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm,
//                   message: "Input a valid phone number"
//                 }
//                 })}
//                 placeholder="7402221111"
//               />
//             </div>
//             <button
//               onClick={handleSubmit}
//             >
//                 Submit Form
//             </button>
//         </form>
//     </Grid>
//     )

//   }


// export default MyForm; 
