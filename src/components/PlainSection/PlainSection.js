import React from 'react';

const PlainSection = ({ hasSubtitle, titleText, buttonText }) => {
	//hasSubtitle = true;
		if (hasSubtitle){
			return(
				<div className="mv4 tc appSection">
				  	<h1 className="f1 fw6">{titleText}</h1>
				  	<h3 className="fw4">Huddle re-imagines the way we build communities. You have a </h3>
				  	<h3 className="fw4">voice, but so does your audience. Create connections with your </h3>
				  	<h3 className="fw4">users as you engage in genuine discussion.</h3>
					<a className="f5 fw6 grow no-underline br-pill ba bw1 ph3 pv3 mb2 dib white bg-hot-pink" 
					href="">{buttonText}</a>
				</div>)
		} else {
			return(
			<div className="mv4 tc appSection">
				<h1 className="f1 fw6">{titleText}</h1>
				<a className="f5 fw6 grow no-underline br-pill ba bw1 ph3 pv3 mb2 dib white bg-hot-pink" 
					href="">{buttonText}</a>
			</div>)
		}
}

export default PlainSection;