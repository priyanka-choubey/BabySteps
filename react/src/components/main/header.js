import React from 'react';
import './header.css';
import SheSafe from'./Babys.png';

export default class Header extends React.Component {
    state = {
        mobileMenu: false
    }
    toggleMenu = () => {
        const mobileMenu = this.state.mobileMenu;
        this.setState({mobileMenu: !mobileMenu})
    }

    render() {
        const active = this.state.mobileMenu ? "active" : "";
        const scrolled = this.props.scrolling ? "scrolled" : "";
        return (
            <header className={`header ${scrolled}`}>
                <div className="shell">
                    <div className="headerInner">
                        <div className="headerLogo">
                            <a href="/" className="logo">
                                <img src={SheSafe} alt="Logo image 4245a2e3582a2c23b2366c15c6c5628ca2e187e86b2176a34e33156f3d1367da" />

                                BabySteps
                </a>
                        </div>

                        <div className={`headerMenu ${active}`}>
                            <nav className="nav">
                                <ul>
                                    <li>
                                        <a href="#">ChatBot</a>
                                    </li>

                                    <li>
                                        <a href="#">Portal</a>
                                    </li>

                                    <li>
                                        <a href="#">Developer Api</a>
                                    </li>

                                    <li>
                                        <a href="#">App</a>
                                    </li>
                                </ul>
                            </nav>

                            <div className="header__actions">
                                <a
                                className="btn btn--transparent" onClick={this.props.toggleChat}>
                                    Let's chat
                    </a>
                            </div>
                        </div>

                        <a className="nav-trigger" onClick={this.toggleMenu}>
                            <span></span>

                            <span></span>

                            <span></span>
                        </a>
                    </div>
                </div>
            </header>
        )
    }
}
