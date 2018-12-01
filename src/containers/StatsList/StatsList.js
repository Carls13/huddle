import React from 'react';
import Stat from './../../components/Stat/Stat.js';
import iconMessages from './icon-messages.svg';
import iconCommunities from './icon-communities.svg';


const StatsList = () => {
		return (
			<div className="flex ph2-ns appSection">
				<Stat 
				image={iconCommunities}
				number={'1.4k+'}
				description={'Communities Formed'}/>
				<Stat 
				image={iconMessages}
				number={'2.7m+'}
				description={'Messages Sent'}/>
			</div>);}

export default StatsList;