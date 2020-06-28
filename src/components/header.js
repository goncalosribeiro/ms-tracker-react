import React from 'react';

const Header = (props) => {
    return (
        <div>
            <div className="bg-content"></div>
            <div className="top-section">
                <div className="top-left">
                    <div className="logo">
                    </div>
                    <div className="logo-text">
                        <p>Movies & Series</p>
                        <p>Tracker</p>
                    </div>
                </div>
                <div className="top-center">
                    <div className="ch-button active" onClick={props.mode}>
                        <p>Movies</p>
                    </div>
                    <div className="ch-button" onClick={props.mode}>
                        <p>Series</p>
                    </div>
                </div>
                <div className="top-right">
                    <div className="login-link">
                        <a href="/">
                            <p>LOGIN/REGISTER</p>
                        </a>
                    </div>
                    <div className="avatar">
                        <i className="fa fa-user-circle"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;