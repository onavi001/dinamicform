import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import Button from "@mui/material/Button";
const SelectFieldDinamic = ({curretnField,fields,setfields}) => {
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
                <InputLabel id="demo-simple-select-standard-label">{curretnField.label}</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    onChange={handleChange}
                    value={curretnField.value}
                    label={curretnField.label}
                    variant="standard"
                    className="FieldComplex"
                >
                    {
                        opciones.map((op,index) => (
                            <MenuItem key={`SelectFieldDinamic_MenuItem_${index}`} value={op}>{op}</MenuItem>
                        ))
                    }
                </Select>
            </Grid>
            <Grid item xs={6}>
                <Button color="error" variant="contained" onClick={()=>{setfields( fields.filter(fie => fie.label !== curretnField.label) )}}>
                    Eliminar campo
                </Button>
            </Grid>
        </Grid>
    );
  };
  export default SelectFieldDinamic;