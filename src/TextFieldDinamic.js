import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const TextFieldDinamic = ({curretnField,fields,setfields}) => {
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
                <TextField
                    onChange={handleChange}
                    value={curretnField.value}
                    id="standard-basic"
                    label={curretnField.label}
                    variant="standard"
                    className="FieldComplex"
                />
            </Grid>
            <Grid item xs={6}>
                <Button color="error" variant="contained" onClick={()=>{setfields( fields.filter(fie => fie.label !== curretnField.label) )}}>
                    Eliminar campo
                </Button>
            </Grid>
        </Grid>
    );
  };
export default TextFieldDinamic;