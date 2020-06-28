import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Searchbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    timeOut = null;

    changeValue = (event) => {
        this.setState({ value: event.target.value })
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(() => { this.props.callback(this.state.value) }, 500)
    }

    render() {
        return (
            <div className='search-bar' >
                <FontAwesome className="search" name="search" />
                <input
                    className=''
                    type='search'
                    placeholder='Search for Movies..'
                    autoComplete='off'
                    onChange={this.changeValue}
                    value={this.state.value}
                />
            </div>
        );
    }
}

export default Searchbox;