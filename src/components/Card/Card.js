import React, { Component } from 'react';
import {connect} from 'react-redux'
import img1 from '../../images/icons/download.png';
import img2 from '../../images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png';
import img3 from '../../images/icons/raindrop-close-up.png';
import img4 from '../../images/icons/upload.png';

class Card extends Component {

    constructor(props) {
        super(props);
    }

    dateFormat(date) {
        return `${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(0, 4)}`
    }

    render() {
        const { weathers} = this.props;
        return (
            <div>
                {weathers.weather ? <div>
                    {weathers.weather.map((weather, index) => {
                        let newDate = this.dateFormat(weather.date);
                        return (<div key={index} className="card card-clima" >
                            <div className="card-body m-0 pl-3 pr-3 pt-1 pb-0">
                                <h5 className="card-title">{newDate}</h5>
                                <p className="small">{weather.text}</p>
                            </div>
                            <div className="card-header background-card">
                                <div className="row row-card">
                                    <div className="col-2">
                                        <img src={img4} />
                                    </div>
                                    <div className="col-4">
                                        <h4 className="text-primary">{weather.temperature.max}°C</h4>
                                    </div>
                                    <div className="col-2">
                                        <img src={img1} />
                                    </div>
                                    <div className="col-4">
                                        <h4 className="text-danger">{weather.temperature.min}°C</h4>
                                    </div>
                                </div>
                                <div className="row row-card">
                                    <div className="col-2">
                                        <img src={img3}  />
                                    </div>
                                    <div className="col-4">
                                        <h4>{weather.temperature.min}mm</h4>
                                    </div>
                                    <div className="col-2">
                                        <img src={img2} />
                                    </div>
                                    <div className="col-4">
                                        <h4>{weather.temperature.min}%</h4>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })}
                </div> : null}

            </div>


        );
    }
}

const mapStateToProps = state => {
    return {
        weathers: state.weathers
    }
}

export default connect(mapStateToProps)(Card);

