import React from 'react';
import logo from './logo.svg';


const Navigation = () => {
	return (
		<header className="sans-serif black-80 pv4 avenir">
			<span className="fl ml4">
          		<img src={logo} className="App-logo" alt="logo" />
			</span>
			<span className="fr mr4">
				<a className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib hot-pink" href="">Try it free!</a>
			</span>
		</header>
		);
}

export default Navigation;