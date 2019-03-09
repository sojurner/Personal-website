import React from 'react';
import Navigation from '../Navigation/Navigation';
import Audio from '../Audio/Audio';
import './Header.css';

class Header extends React.Component {
  state = {
    previous: 0,
    current: 0,
    navDisplay: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
    setTimeout(() => {
      this.setState({ navDisplay: true });
    }, 2000);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  handleScroll = event => {
    const { className } = event.target;
    if (className === 'root-show' || className === 'root-hide') {
      const { scrollTop } = event.srcElement;
      this.setState(prevState => {
        if (prevState.current !== scrollTop) {
          return {
            previous: prevState.current,
            current: scrollTop
          };
        }
      });
    }
  };

  render() {
    const { current, previous } = this.state;
    return (
      <header
        className={current > previous ? 'nav-header-hide' : 'nav-header-show'}
      >
        <img
          alt="Paul Kim Signature"
          height="60"
          className={current > previous ? 'logo-hide' : 'logo-show'}
          width="240"
          src={require(`../../assets/Images/Paul-kim-logo.png`)}
        />
        <Audio />

        <Navigation {...this.state} />
      </header>
    );
  }
}

export default Header;
