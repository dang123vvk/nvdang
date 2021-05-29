import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { exeGetPartFivesAction } from '../../../redux/action/partFiveAction';
import { FormControlLabel, Radio, RadioGroup, Button, FormControl, FormHelperText, InputLabel, Select, MenuItem, useMediaQuery } from '@material-ui/core';
import { checkAnswer, checkAnswers, displayTime } from '../../../helpers/handleQuestion';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        marginTop: theme.spacing(4),
        // backgroundColor: '#eceff1',
    },
    paper: {
        // marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        minHeight: '80%',
        backgroundColor: '#eceff1',
        borderRadius: 10
    },
    paperMobile: {
        // marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#eceff1',
        borderRadius: 10,
        paddingBottom: theme.spacing(3)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
}));

export default function PartFive() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [listAnswers, setListAnswers] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [isStarted, setIsStarted] = useState(false)
    const [counter, setCounter] = useState(60);
    const [timer, setTimer] = useState(60);
    const [sizeQuestions, setSizeQuestions] = useState(5);
    const partFives = useSelector(state => state.partFiveReducer.list)
    const theme = useTheme()
    const sm = useMediaQuery(theme.breakpoints.down("xs"));
    const xs = useMediaQuery(theme.breakpoints.down("md"));
    useEffect(() => {
        dispatch(exeGetPartFivesAction())
    }, [])
    const handleChange = (e, data) => {
        setListAnswers({ ...listAnswers, [data.id]: e.target.value })
    }
    const onSubmit = () => {
        setIsSubmit(true)
    }
    const clearAll = () => {
        setIsSubmit(false);
        setListAnswers({});
    }
    useEffect(() => {
        if (isStarted) {
            let timerId 
            if (counter === 0) {
                // clearInterval(timerId)
                setIsSubmit(true)
            } else {
                setTimeout(() => setCounter(counter - 1), 1000)
            }
        }
    }, [counter, isStarted]);
    //   if(!isStarted) {
    //     return null;
    //   }
    const start = () => {
        setIsStarted(true)
    }

    return (
        <Container component="main" className={classes.root}>
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="p" variant="body1" color='primary' style={{ fontWeight: 'bold', margin: 30 }}>
                    TOEIC® READING part 5: Incomplete sentences - Test 1
                </Typography>
                <div style={{ display: 'flex', flexDirection: sm || xs ? 'column' : 'row', paddingBottom: 20 }}>
                    <div>
                        <FormControl className={classes.formControl} size={'small'} fullWidth disabled={isStarted}>
                            <InputLabel id="demo-simple-select-outlined" >Number of questions: </InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="numbers"
                                value={sizeQuestions}
                                onChange={e => setSizeQuestions(e.target.value)}
                            >
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={40}>40</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div style={{ paddingLeft: sm || xs ? 0 : 20 }}>
                        <FormControl className={classes.formControl} size={'small'} fullWidth disabled={isStarted}>
                            <InputLabel id="demo-time-select-outlined">Timer:</InputLabel>
                            <Select
                                labelId="demo-time-select-outlined-label"
                                id="demo-time-select-outlined"
                                label="times"
                                value={timer}
                                onChange={e => {
                                    setCounter(e.target.value);
                                    setTimer(e.target.value)
                                }}
                            >
                                <MenuItem value={60}>1 minutes</MenuItem>
                                <MenuItem value={30}>30s</MenuItem>
                                <MenuItem value={10}>10s</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div style={{ paddingLeft: sm || xs ? 10 : 30 }} className='d-flex align-items-center'>
                        <Button variant="contained" color="primary" style={{ marginRight: 30 }} onClick={start} disabled={isStarted} >Start</Button>
                    </div>
                    <div style={{ paddingLeft: sm || xs ? 10 : 30, paddingTop: sm || xs ? 20 : 0, fontSize: 30, fontWeight: 'bold', color: counter < 60 ? 'red' : '' }} className='d-flex align-items-center'>
                        {displayTime(counter)}
                    </div>
                    {counter === 0 || isSubmit ?
                        <div style={{ paddingLeft: sm || xs ? 10 : 30, paddingTop: sm || xs ? 20 : 0, fontSize: 30, fontWeight: 'bold', color: counter < 60 ? 'red' : '' }} className='d-flex align-items-center'>
                            {checkAnswers(sizeQuestions, listAnswers, partFives)}
                        </div>
                        :''
                    }
                </div>
                {isStarted && <div style={{ width: '80%' }}>
                    <Grid container direction="column" style={{ width: '100%' }} >
                        {partFives && partFives.length > 0 &&
                            partFives.slice(0, sizeQuestions).map((question, index) =>
                                <Grid item xs key={index} >
                                    <Typography variant="subtitle1" component="p" style={{ fontWeight: 'bold' }}>
                                        {`${index + 1}.${question.title}`}
                                    </Typography>
                                    <FormControl component="fieldset" error={!checkAnswer(isSubmit, listAnswers[question.id], question.answer)} >
                                        <RadioGroup aria-label="gender" name="gender1" style={{ marginLeft: 30 }} value={listAnswers[question.id] || ''} onChange={e => handleChange(e, question)}>
                                            <FormControlLabel value="optionA" control={<Radio />} label={question.optionA} />
                                            <FormControlLabel value="optionB" control={<Radio />} label={question.optionB} />
                                            <FormControlLabel value="optionC" control={<Radio />} label={question.optionC} />
                                            <FormControlLabel value="optionD" control={<Radio />} label={question.optionD} />
                                        </RadioGroup>
                                        <FormHelperText style={{ marginLeft: 30, marginBottom: isSubmit ? 15 : 0, fontSize: 20, fontWeight: 'bold' }}>{!isSubmit ? '' : (
                                            checkAnswer(isSubmit, listAnswers[question.id], question.answer) ? <span style={{ color: "#090" }}>Correct</span> : <span>That is not correct</span>)}
                                        </FormHelperText>
                                    </FormControl>
                                    {isSubmit && (
                                        <div style={{ minHeight: 150, backgroundColor: '#e6fff2', borderRadius: 4, padding: 15 }}>
                                            <div><span>{question.translateTitle}</span></div>
                                            <div style={{ marginLeft: 15, color: checkAnswer(isSubmit, 'optionA', question.answer) ? '#f06292' : '' }}><span>{`A. ${question.translateA}`}</span></div>
                                            <div style={{ marginLeft: 15, color: checkAnswer(isSubmit, 'optionB', question.answer) ? '#f06292' : '' }}><span>{`B. ${question.translateB}`}</span></div>
                                            <div style={{ marginLeft: 15, color: checkAnswer(isSubmit, 'optionC', question.answer) ? '#f06292' : '' }}><span>{`C. ${question.translateC}`}</span></div>
                                            <div style={{ marginLeft: 15, color: checkAnswer(isSubmit, 'optionD', question.answer) ? '#f06292' : '' }}><span>{`D. ${question.translateD}`}</span></div>
                                        </div>
                                    )}
                                </Grid>
                            )
                        }
                    </Grid>
                </div>}
                {isStarted &&
                    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
                        <Grid container >
                            <Button variant="contained" color="primary" style={{ marginRight: 30 }} onClick={clearAll} disabled={!(Object.keys(listAnswers).length === sizeQuestions) || isSubmit}>Clear All</Button>
                            <Button variant="contained" color="secondary" onClick={onSubmit} disabled={!(Object.keys(listAnswers).length === sizeQuestions) || isSubmit}>Submit</Button>
                        </Grid>
                    </div>}
            </div>
        </Container>
    );
}