import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
    TextField,
    CircularProgress,
    CssBaseline,
    AppBar,
    Toolbar,
    Paper,
    Link,
    Typography,
    Table,
    TableCell,
    TableRow,
    TableContainer,
    TableHead,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    LinearProgress,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Logo from './images/logo.png';
import Min from './images/icons/download.png';
import Max from './images/icons/upload.png';
import Precipitation from './images/icons/raindrop-close-up.png';
import Probability from './images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png';
import axios from 'axios';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link
                color="inherit"
                href="https://www.linkedin.com/in/elvis-moraes/"
            >
                Elvis Moraes
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        fontFamily: 'Arial, Helvetica, sans-serif;',
        fontSize: '2rem',
    },
    wheatherText: { backgroundColor: 'white', alignItems: 'center' },
    tempMin: {
        color: '#31B1FF',
        fontSize: '2rem',
        padding: '0px 0px 0px 10px',
    },
    tempMax: {
        color: '#FF3B29',
        fontSize: '2rem',
        padding: '0px 0px 0px 10px',
    },
    rainProbability: { fontSize: '2rem', padding: '0px 0px 0px 10px' },
    rainPrecipitation: { fontSize: '2rem', padding: '0px 0px 0px 10px' },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    heading: {
        color: 'black',
        fontSize: theme.typography.pxToRem(20),
        fontWeight: 700,
        flexBasis: '33.33%',
        flexShrink: 0,
    },
}));

export default function Challenge() {
    const classes = useStyles();
    const [cidades, setCidades] = useState([]);
    const [weather, setWeather] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAccordion, setIsAccordion] = useState(false);
    const [isLoadingWeather, setIsLoadingWeather] = useState(false);

    const getCidades = async () => {
        setIsLoading(true);
        const { data } = await axios('http://localhost:9000/api/locales', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        setCidades(data);
        setIsLoading(false);
    };

    function previsao(localeId) {
        if (localeId === null) return;

        const loadWeather = async () => {
            setIsLoadingWeather(true);
            const { data } = await axios(
                'http://localhost:9000/api/weather/' + localeId.id,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );
            setWeather(data);
            setIsAccordion(true);
            setIsLoadingWeather(false);
        };

        loadWeather();
    }

    useEffect(() => {
        getCidades();
    }, []);

    function dateBr(n) {
        const newDate = n.split('-');
        return `${newDate[2]}/${newDate[1]}/${newDate[0]}`;
    }

    return (
        <>
            <CssBaseline />
            <AppBar
                position="absolute"
                color="default"
                className={classes.appBar}
            >
                <Toolbar>
                    <a href="/">
                        <img width="120" src={Logo} alt="ClimaTempo" />
                    </a>
                </Toolbar>
            </AppBar>

            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    {isLoading ? (
                        <center>
                            Loading
                            <CircularProgress />
                        </center>
                    ) : (
                        <form>
                            <Autocomplete
                                onChange={(e, value) => previsao(value)}
                                options={cidades}
                                getOptionLabel={(option) => option.name}
                                style={{ width: '100%' }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Busque por uma cidade"
                                        variant="outlined"
                                        value={params.id}
                                    />
                                )}
                            />
                        </form>
                    )}
                </Paper>
                {isLoadingWeather && <LinearProgress />}

                {isAccordion && (
                    <div>
                        Previsão para:
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                        >
                            {weather[0].locale.name} - {weather[0].locale.state}
                        </Typography>
                    </div>
                )}
                <br />
                {isAccordion && (
                    <Paper>
                        {weather.map((item) => (
                            <React.Fragment>
                                {item.weather.map((item2, index) => (
                                    <React.Fragment>
                                        <Accordion key={item.locale.id}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography
                                                    className={classes.heading}
                                                >
                                                    {dateBr(item2.date)}
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <TableContainer
                                                    component={Paper}
                                                >
                                                    <Table width="100%">
                                                        <TableHead>
                                                            <TableRow
                                                                className={
                                                                    classes.wheatherText
                                                                }
                                                            >
                                                                <TableCell
                                                                    colSpan={2}
                                                                >
                                                                    <Typography>
                                                                        {
                                                                            item2.text
                                                                        }
                                                                    </Typography>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>
                                                                    <img
                                                                        src={
                                                                            Min
                                                                        }
                                                                        alt="Miníma"
                                                                    />
                                                                    <span
                                                                        className={
                                                                            classes.tempMin
                                                                        }
                                                                    >
                                                                        {
                                                                            item2
                                                                                .temperature[
                                                                                'min'
                                                                            ]
                                                                        }
                                                                        {'ºC'}
                                                                    </span>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <img
                                                                        src={
                                                                            Max
                                                                        }
                                                                        alt="Máxima"
                                                                    />
                                                                    <span
                                                                        className={
                                                                            classes.tempMax
                                                                        }
                                                                    >
                                                                        {
                                                                            item2
                                                                                .temperature[
                                                                                'max'
                                                                            ]
                                                                        }
                                                                        {'ºC'}
                                                                    </span>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>
                                                                    <img
                                                                        src={
                                                                            Precipitation
                                                                        }
                                                                        alt="Preciptacao"
                                                                    />
                                                                    <span
                                                                        className={
                                                                            classes.rainPrecipitation
                                                                        }
                                                                    >
                                                                        {
                                                                            item2
                                                                                .rain[
                                                                                'precipitation'
                                                                            ]
                                                                        }
                                                                        {'mm'}
                                                                    </span>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <img
                                                                        src={
                                                                            Probability
                                                                        }
                                                                        alt="Probabilidade"
                                                                    />
                                                                    <span
                                                                        className={
                                                                            classes.rainProbability
                                                                        }
                                                                    >
                                                                        {
                                                                            item2
                                                                                .rain[
                                                                                'probability'
                                                                            ]
                                                                        }
                                                                        {'%'}
                                                                    </span>
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                    </Table>
                                                </TableContainer>
                                            </AccordionDetails>
                                        </Accordion>
                                    </React.Fragment>
                                ))}
                            </React.Fragment>
                        ))}
                    </Paper>
                )}
                <Copyright />
            </main>
        </>
    );
}
