import React from 'react';
import Header from './header';
// import Testimonial from './testimonial';
import Container from './container';
import './main.css';
import How from './how';
import steps from './steps/StepsIndex';

import Footer from './footer';
import { ThemeProvider } from 'styled-components';
const otherFontTheme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#6e48aa',
    headerFontColor: '#fff',
    headerFontSize: '16px',
    botBubbleColor: '#6E48AA',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };



export default class Index extends React.Component {
    state = {
        scrolling: false,
        chatOpen: false
    }
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = (event) => {
        if (window.scrollY === 0 && this.state.scrolling === true) {
            this.setState({ scrolling: false });
        }
        else if (window.scrollY !== 0 && this.state.scrolling !== true) {
            this.setState({ scrolling: true });
        }
    }
    toggleOpen = () => {
      const chatOpen = this.state.chatOpen;
      this.setState({chatOpen: !chatOpen})
    }
    render() {
        return (<div className="wrapper">
            <Header scrolling={this.state.scrolling} toggleChat={this.toggleOpen}/>
            <Container toggleChat={this.toggleOpen} />
            <How />

            <ThemeProvider theme={otherFontTheme}>

            </ThemeProvider>
            <Footer />
        </div>
        );
    }
}
