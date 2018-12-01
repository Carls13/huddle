import React from 'react';

import './Stat.css';

const Stat = ({ image, number, description }) => {
		return (
			<div className="w-50 flex flex-column">
				
				<img className="fl statimg" src={image} alt='statImage'/>
					<h1 className="tc statNumber">{number}</h1>
				<div className="tc statDesc">
					{description}
				</div>
			</div>);}

export default Stat;