import './App.css'
import Button from "@mui/material/Button";
import { useState } from "react";
import SelectFile from "./SelectFile";
import Grid from '@mui/material/Grid';
import TextFieldDinamic from './TextFieldDinamic' ;
import SelectFieldDinamic from './SelectFieldDinamic';
import CheckFieldDinamic from './CheckFieldDinamic';
import Swal from 'sweetalert2'
import RatingFieldDinamic from './RatingFieldDinamic'
export default function App() {
  const [fields,setfields]=useState([])
  const handleSubmit = (event) => {
    event.preventDefault();
    if(fields.find(fi => fi.value === "")){
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Campos del formulario vacios',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      let valAlert = "";
      fields.forEach(field => {
        valAlert +=`<p>${field.label} : ${field.value}</p>`;
      });
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Formulario enviado',
        html:valAlert,
        showConfirmButton: false,
        timer: 1500
      })
      fields.map(field => {
        console.log({campo:field.label,valor:field.value})
      })
    }
  };
  return (
    <Grid container spacing={2} style={{padding:"20px"}}>
      <Grid item xs={6}>
        <SelectFile fields={fields} setfields={setfields} />
      </Grid>
      <Grid item xs={6}>
        <form onSubmit={handleSubmit}>
          {
            fields.length > 0 ? 
              fields.map((field,index) => 
                field.componente === "Text"?
                  <div key={`TextFieldDinamic_${index}`}>
                    <TextFieldDinamic curretnField={field}  fields={fields} setfields={setfields} />
                  </div>
                  :field.componente === "Select"?
                  <div key={`SelectFieldDinamic_${index}`}>
                    <SelectFieldDinamic curretnField={field}  fields={fields} setfields={setfields} />
                  </div>
                  :field.componente === "Opciones"?
                  <div key={`CheckFieldDinamic_${index}`}>
                    <CheckFieldDinamic curretnField={field}  fields={fields} setfields={setfields} />
                  </div>
                  :field.componente === "Rating"?
                  <div key={`RatingFieldDinamic_${index}`}>
                    <RatingFieldDinamic curretnField={field}  fields={fields} setfields={setfields} />
                  </div>
                  :null
              )
            :
            <h1>Cree un nuevo campo para su formulario</h1>
          }
          <br></br>
          <br></br>
          {
            fields.length > 0 ? 
              <Button variant="contained" type="submit">
                Submit
              </Button>
            :
              null
          }
        </form>
      </Grid>
    </Grid>
  );
}
