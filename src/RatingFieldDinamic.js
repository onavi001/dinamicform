import * as React from 'react';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function RatingFieldDinamic({curretnField,fields,setfields}) {
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
          <Rating
            name="highlight-selected-only"
            onChange={handleChange}
            value={parseInt(curretnField.value)}
            IconContainerComponent={IconContainer}
            highlightSelectedOnly
          />
        </Grid>
        <Grid item xs={6}>
            <Button color="error" variant="contained" onClick={()=>{setfields( fields.filter(fie => fie.label !== curretnField.label) )}}>
                Eliminar campo
            </Button>
        </Grid>
    </Grid>
  );
}