import React, { useState, useEffect } from 'react'
import {
    Typography,
    Toolbar,
    AppBar,
    Box,
    OutlinedInput,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Card,
    Grid,
    ButtonGroup,
    Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Search, Close } from '@material-ui/icons'
import { useQuery, useLazyQuery } from '@apollo/client'

import { GET_LOCALES, GET_FORECAST } from '../graphql'
import WeatherCard from '../components/WeatherCard'

export default function Home() {
    const [search, setSearch] = useState('')
    const [selected, setSelected] = useState(null)
    const [showResults, setShowResults] = useState(false)
    const [isCelcius, setIsCelcius] = useState(true)
    const [isMilimeters, setIsMilimeters] = useState(true)
    const [forecastData, setForecastData] = useState(null)

    const classes = useStyles()

    const { data, loading } = useQuery(GET_LOCALES)

    const [getForecast, { data: fData }] = useLazyQuery(GET_FORECAST)

    useEffect(() => {
        if (fData) {
            if (fData.forecast.message) {
                alert(fData.forecast.message)
            } else {
                setForecastData(fData.forecast)
            }
        }
    }, [fData])

    const handleSearch = (e) => {
        setSearch(e.target.value)
        setShowResults(e.target.value !== '')
    }

    const handleSelected = (id, name, state) => {
        setSelected({ id, name, state })
        setSearch(name)
        setShowResults(false)
        getForecast({
            variables: {
                locale: name
            }
        })
    }

    const handleResults = () => {
        return (<List component="nav">
            {data.locales.filter(val => {
                if (search == '') return null
                else if (val.name.toLowerCase().includes(search.toLowerCase())) return val
            }).map(d =>
                <ListItem key={d.id} button onClick={() => handleSelected(d.id, d.name, d.state)}>
                    <ListItemText primary={`${d.state} - ${d.name}`} style={{ color: '#fff' }} />
                </ListItem>
            )}
        </List>)
    }

    return (
        <React.Fragment>
            <AppBar className={classes.root} position="relative">
                <Toolbar className={classes.toolBar}>
                    <img className={classes.logo} src="/logo-white.png" />
                </Toolbar>
            </AppBar>
            <div className={classes.heroContent}>
                <OutlinedInput
                    className={classes.searchContainer}
                    value={search}
                    onChange={handleSearch}
                    placeholder="Busque por uma cidade..."
                    endAdornment={<>
                        {search !== '' && <IconButton
                            onClick={() => {
                                setSearch('')
                                setForecastData(null)
                                setSelected(null)
                                setShowResults(false)
                            }}
                            onMouseDown={(event) => event.preventDefault()}
                            edge="end"
                        >
                            <Close />
                        </IconButton>}
                        <IconButton
                            onClick={() => {
                                setShowResults(false)
                                getForecast({
                                    variables: {
                                        locale: search
                                    }
                                })
                            }}
                            onMouseDown={(event) => event.preventDefault()}
                            edge="end"
                        >
                            <Search />
                        </IconButton>
                    </>}
                    labelWidth={0}
                />
                {!loading && <Box className={classes.resultsContainer}>
                    {showResults && handleResults()}
                </Box>}
            </div>
            <Box className={classes.resultWrapper}>
                {selected && forecastData && !forecastData.message && <>
                    <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Typography variant="h5">Tempo em {selected.name} - {selected.state}</Typography>
                        <Typography className={classes.period} variant="body1">{forecastData.period.begin} a {forecastData.period.end}</Typography>
                    </Box>
                    <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10 }}>
                        <Box>
                            <ButtonGroup disableElevation variant="contained" color="primary">
                                <Button onClick={() => setIsCelcius(!isCelcius)} size="small" color="inherit" disabled={isCelcius}>ºC</Button>
                                <Button onClick={() => setIsCelcius(!isCelcius)} size="small" color="inherit" disabled={!isCelcius}>ºF</Button>
                            </ButtonGroup>
                        </Box>
                        <Box style={{ marginLeft: 10 }}>
                            <ButtonGroup disableElevation variant="contained" color="primary">
                                <Button onClick={() => setIsMilimeters(!isMilimeters)} size="small" color="inherit" disabled={isMilimeters} style={{ textTransform: 'lowercase' }}>mm</Button>
                                <Button onClick={() => setIsMilimeters(!isMilimeters)} size="small" color="inherit" disabled={!isMilimeters} style={{ textTransform: 'lowercase' }}>inch</Button>
                            </ButtonGroup>
                        </Box>
                        <IconButton
                            onClick={() => {
                                setSelected(null)
                                setSearch('')
                            }}
                            disableElevation
                            size="small"
                            variant="contained"
                            style={{ marginLeft: 10, backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: 5 }}>
                            <Close color="#d21d1d" />
                        </IconButton>
                    </Box>
                </>}
                <Grid container spacing={2}>
                    {selected && forecastData && !forecastData.message && forecastData.weather.map(f =>
                        <WeatherCard data={f} isCelcius={isCelcius} isMilimeters={isMilimeters} />
                    )}
                </Grid>
            </Box>
        </React.Fragment>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1
    },
    toolBar: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 20
    },
    heroContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 40,
        paddingTop: 15,
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.down('xs')]: {
            padding: 15,
        }
    },
    searchContainer: {
        width: '100%',
    },
    resultsContainer: {
        backgroundColor: theme.palette.text.primary,
        marginTop: 5,
        borderRadius: 5,
    },
    resultWrapper: {
        flex: 1,
        padding: 40,
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.down('xs')]: {
            padding: 15,
        }
    },
    period: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    }
}))
