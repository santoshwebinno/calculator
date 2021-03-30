import React, { useState } from 'react';
import { Button, TextField, Container, Grid } from '@material-ui/core';
import axios from 'axios';
import './App.css';

const Sum = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [sum, setSum] = useState('');
  const mystyle = {
    width: '100%',
    color: '#FFFFFF',
    background: '#C10708 0% 0% no-repeat padding-box'
  };
  const paddng = {
    padding: '20px'
  };
  const handlesubmit = (ev: any) => {
    ev.preventDefault();
    if (number1 ==='' || number2 === '') {
        //
    } else {
        const values = {
            number1: number1,
            number2: number2
        };
        axios.post(`http://localhost:8081/sum`, { values })
        .then(res => {
            setSum(res.data.sum)
        })
    }
      
  }
  const handlenumber1 = (ev: any) => {
    setNumber1(ev.target.value);
  }
  const handlenumber2 = (ev: any) => {
    setNumber2(ev.target.value);
  }
  return (
    <Container maxWidth="sm">
     <Grid container spacing={1}>
        <div className="form_main">
            <div className="form_hd">Calculator</div>
            <div className="inner_form">
                <div className="top_sumform">
                    <form className="sumform"> 
                        <div className="label_hd">Enter the numbers</div>
                        <Grid container item xs={12} spacing={3} style={paddng}>
                        <TextField id="number1" type="number" label="Number 1" variant="outlined" value={number1} onChange={(ev) => handlenumber1(ev)}/>
                        </Grid>
                        <Grid container item xs={12} spacing={3} style={paddng}>
                            <TextField id="number2" type="number" label="Number 2" variant="outlined" value={number2} onChange={(ev) => handlenumber2(ev)}/>
                        </Grid>
                        <Grid container item xs={12} spacing={3} style={paddng}>
                            <Button variant="contained" style={mystyle} onClick={(ev) => handlesubmit(ev) }>Sum</Button>
                        </Grid>
                    </form>
                    <hr className="line"/>
                    <div className="result">
                        <div className="label_hd">Results</div>
                        <Grid container item xs={12} spacing={3} style={paddng}>
                            <TextField id="sum" type="number" label="" variant="outlined" value={sum} disabled/>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
      </Grid>
    </Container>
  )
}

export default Sum;