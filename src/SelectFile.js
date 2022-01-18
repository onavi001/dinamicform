import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Swal from 'sweetalert2'
const SelectFile = ({fields,setfields}) => {
    const [selectValue,setselectValue] = useState("Text");
    const [nombreCampo,setNombreCampo] = useState("")
    const [opciones,setopciones] = useState("")
    const addFile = (e) => {
        e.preventDefault();
        if(fields.find(field => field.label === nombreCampo)){
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Ya hay un campo con ese nombre',
                showConfirmButton: false,
                timer: 1500
            })
        }else{
            setfields([...fields,{componente:selectValue,label:nombreCampo,opciones:opciones,value:""}])
            setNombreCampo("");
        setopciones("");
        }
    }
    const handleChange = (e) => {
        e.preventDefault();
        setselectValue(e.target.value);
        setNombreCampo("");
        setopciones("");
    }
    return (
        <div>
            <InputLabel id="demo-simple-select-standard-label">Componente</InputLabel>
            <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={selectValue}
                onChange={handleChange}
                label="Component"
                variant="standard"
                className="FieldComplex"
            >
                <MenuItem value="Text">Text</MenuItem>
                <MenuItem value="Select">Select</MenuItem>
                <MenuItem value="Opciones">Opciones</MenuItem>
                <MenuItem value="Rating">Rating</MenuItem>
            </Select>
            {
                selectValue === "Text" ?
                    (
                        <>
                            <p>texto</p>
                            <TextField
                                onChange={(e)=>{setNombreCampo(e.target.value)}}
                                value={nombreCampo}
                                id="standard-basic"
                                label="Nombre del campo"
                                variant="standard"
                                className="FieldComplex"
                            />
                        </>
                    )
                :
                    selectValue === "Select" ?
                        (
                            <>
                                <p>Select</p>
                                <TextField
                                    onChange={(e)=>{setNombreCampo(e.target.value)}}
                                    value={nombreCampo}
                                    id="standard-basic"
                                    label="Nombre del campo"
                                    variant="standard"
                                    className="FieldComplex"
                                />
                                <br></br><br></br>
                                <label>
                                    Separe las opciones con comas
                                </label>
                                <br></br>
                                <TextField
                                    onChange={(e)=>{setopciones(e.target.value)}}
                                    value={opciones}
                                    id="standard-basic"
                                    label="Opciones"
                                    variant="standard"
                                    className="FieldComplex"
                                />
                                
                            </>
                        )
                    :
                        selectValue === "Opciones" ?
                            (
                                <>
                                    <p>Opciones</p>
                                    <TextField
                                        onChange={(e)=>{setNombreCampo(e.target.value)}}
                                        value={nombreCampo}
                                        id="standard-basic"
                                        label="Nombre del campo"
                                        variant="standard"
                                        className="FieldComplex"
                                    />
                                    <br></br><br></br>
                                    <label>
                                        Separe las opciones con comas
                                    </label>
                                    <br></br>
                                    <TextField
                                        onChange={(e)=>{setopciones(e.target.value)}}
                                        value={opciones}
                                        id="standard-basic"
                                        label="Opciones"
                                        variant="standard"
                                        className="FieldComplex"
                                    />
                                    
                                </>
                            )
                        :
                            selectValue === "Rating" ?
                            <>
                                <p>texto</p>
                                <TextField
                                    onChange={(e)=>{setNombreCampo(e.target.value)}}
                                    value={nombreCampo}
                                    id="standard-basic"
                                    label="Nombre del campo"
                                    variant="standard"
                                    className="FieldComplex"
                                />
                            </>
                        :null
            }
            <br></br><br></br>
            <Button variant="contained" onClick={addFile}>
                Agregar
            </Button>
        </div>
    )
}
export default SelectFile;
