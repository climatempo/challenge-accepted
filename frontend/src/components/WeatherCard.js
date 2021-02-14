import { Typography, Box, Card, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import getDayName from '../functions/getDayName'

function WeatherCard({ data, isCelcius, isMilimeters }) {
    const classes = useStyles()
    
    return (
        <Grid item xs={12} sm={3} md={1} className={classes.colWrapper}>
            <Card className={classes.weatherCard}>
                <Box className={classes.cardHeader}>
                    <Typography variant="body1" style={{ color: '#fff', fontWeight: 'bold' }}>
                        {getDayName(data.date)}
                    </Typography>
                    <Typography variant="caption" style={{ color: '#fff' }}>
                        {data.date}
                    </Typography>
                </Box>
                <Box className={classes.cardContainer}>
                    <Box mt={2}>
                        <img className={classes.weatherIcon} src={`/weatherIcons/${data.text}.svg`} />
                    </Box>
                    <Box>
                        <Typography variant="caption" className={classes.label}>Temperatura</Typography>
                        <Box mt={2} className={classes.temperatureWrapper}>
                            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <img className={classes.maxMinIcon} src='/icons/download.png' />
                                <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <Typography className={classes.iconBlue} variant="subtitle1"> {isCelcius ? data.minTemperatureC : data.minTemperatureF}</Typography>
                                    <Typography variant="caption" style={{ marginBottom: 5, marginLeft: 2 }}>{isCelcius ? 'ºC' : 'ºF'}</Typography>
                                </Box>
                            </Box>
                            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <img className={classes.maxMinIcon} src='/icons/download.png' style={{ transform: 'rotate(180deg)' }} />
                                <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <Typography className={classes.iconRed} variant="subtitle1"> {isCelcius ? data.maxTemperatureC : data.maxTemperatureF}</Typography>
                                    <Typography variant="caption" style={{ marginBottom: 5, marginLeft: 2 }}>{isCelcius ? 'ºC' : 'ºF'}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant="caption" className={classes.label}>Chuva</Typography>
                        <Box my={2} className={classes.rainWrapper}>
                            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <img style={{ opacity: 0.75 }} height={15} src='/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png' />
                                <Typography variant="subtitle1" className={classes.rainLabel} style={{ marginLeft: 5 }}> {data.rainProbability}%</Typography>
                            </Box>
                            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <img style={{ opacity: 0.75 }} height={13} src='/icons/raindrop-close-up.png' />
                                <Typography variant="subtitle1" style={{ marginLeft: 3 }}> {isMilimeters ? `${data.rainPrecipitationMM} mm` : `${data.rainPrecipitationInch} inch`}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Card>
        </Grid>
    )
}

export default WeatherCard

const useStyles = makeStyles(theme => ({
    colWrapper: {
        minWidth: 'calc(100% / 7)',
    },
    weatherCard: {
        backgroundColor: theme.palette.background.white,
    },
    cardHeader: {
        width: '100%',
        height: 'auto',
        padding: 10,
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        }
    },
    cardContainer: {
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',

        [theme.breakpoints.down(600)]: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingTop: 5,

            [theme.breakpoints.down(450)]: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 5,

                [theme.breakpoints.down(350)]: {
                    flexDirection: 'column',
                    alignItems: 'center',

                    paddingTop: 0,
                    paddingBottom: 10,
                },
            },
        }
    },
    weatherIcon: {
        [theme.breakpoints.down('xs')]: {
            height: 30,
        }
    },
    temperatureWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'row',
            justifyContent: 'center',
            margin: 0,
        }
    },
    rainWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'row',
            justifyContent: 'center',
            margin: 0,
        }
    },
    iconBlue: {
        marginLeft: 5,
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.palette.icon.blue,
        [theme.breakpoints.down('xs')]: {
            fontSize: 19,
            marginRight: 5,
        }
    },
    iconRed: {
        marginLeft: 5,
        fontSize: 24,
        color: theme.palette.icon.red,
        [theme.breakpoints.down('xs')]: {
            fontSize: 19,
        }
    },
    label: {
        fontSize: 8,
        textTransform: 'uppercase',
        opacity: 0.75,
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    rainLabel: {
        marginLeft: 5,
        [theme.breakpoints.down('xs')]: {
            marginRight: 5,
        }
    },
    maxMinIcon: {
        height: 17,
        [theme.breakpoints.down('xs')]: {
            height: 15,
        }
    },
}))
