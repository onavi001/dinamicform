import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
const CheckFieldDinamic = ({curretnField,fields,setfields}) => {
    const opciones = curretnField.opciones.split(",")
    const handleChange = (e) => {
        e.preventDefault()
        setfields(
            fields.map(fie => {
                if(fie.label === curretnField.label){
                    fie.value = e.target.value;
                }
                return fie;
            })
        )
    }
    return (
        <Grid container spacing={2} style={{padding:"20px"}}>
            <Grid item xs={6}>
                <FormControl className="FieldComplex" >
                    <FormLabel id="demo-radio-buttons-group-label">{curretnField.label}</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue=""
                        name="radio-buttons-group"
                        onChange={handleChange}
                        value={curretnField.value}
                    >
                        {
                            opciones.map((op,index) => (
                                <FormControlLabel key={`CheckFieldDinamic_FormControlLabel_${index}`} value={op} control={<Radio />} label={op} />
                            ))
                        }
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <Button color="error" variant="contained" onClick={()=>{setfields( fields.filter(fie => fie.label !== curretnField.label) )}}>
                    Eliminar campo
                </Button>
            </Grid>
        </Grid>
    )
}

export default CheckFieldDinamic
