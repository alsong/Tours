import React, { Component } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

export default class Tour extends Component {
    state = {
        showInfo: false
    }
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    render() {
        const { id, city, img, name, info } = this.props.tour;
        const { removeTour } = this.props;
        return (
            <article className="tour" data-test="tourComponent">
                <div className="img-container" data-test="conComponent">
                    <img src={img} alt="" data-test="imgComponent" />
                    <span className="close-btn" onClick={() => removeTour(id)} data-test="closeBtnComponent">
                        <i className="fas fa-window-close" data-test="fasComponent" />
                    </span>
                </div>
                <div className="tour-info" data-test="tourInfoComponent">
                    <h3 data-test="cityComponent">{city}</h3>
                    <h4 data-test="nameComponent">{name}</h4>
                    <h5 data-test="infoComponent">info {" "} <span onClick={this.handleInfo} data-test="infoBtnComponent">
                        <i className="fas fa-caret-square-down" data-test="squareComponent" />
                    </span></h5>
                    {this.state.showInfo && <p data-test="pInfoComponent">{info}</p>}
                </div>
            </article>
        )
    }
}

Tour.propTypes = {
    tour: PropTypes.shape({
        id: PropTypes.number,
        city: PropTypes.string,
        img: PropTypes.string,
        name: PropTypes.string,
        info: PropTypes.string
    }),
    removeTour: PropTypes.func
}