import React from 'react';
import './ImageSection.css';


const ImageSection = ({ image, title, subtitle, imagePosition, top, bottom }) => {
		
		let topImage='';
		let bottomImage='';
		let body='';
		let className='cf ph2-ns';

		if (top){
			topImage = <img className="top" src={top} alt='top'/>;
			className='cf back ph2-ns';
		}
		if (bottom){
			bottomImage = <img className="bottom" src={bottom} alt='bottom'/>;
		}
		if (imagePosition =='left'){
			body = <div className={className}> 
							<div className="fl w-100 w-50-ns pa2">
								<img src={image} className="center inside" alt="componentImage"/>
							</div> 
							<div className="fl w-50-ns pa2"> 
								<div className="tc pv4">
									<h1 className="fw6 tl">{title}</h1>
									<h3 className="fw4 tl">{subtitle}</h3>
								</div> 
							</div> 
						</div>

		} else if (imagePosition =='right') {
			body = <div className={className}> 
							<div className="fl w-50-ns pa2"> 
								<div className="tc pv4">
									<h1 className=" tl">{title}</h1>
									<h3 className="fw4 tl">{subtitle}</h3>
								</div> 
							</div> 
							<div className="fl w-100 w-50-ns pa2">
								<img src={image} className="center inside" alt="componentImage"/>
							</div> 
						</div>
		}

		if (top && bottom){
			return (
				<div className="mw9 center ph3-ns my5 by5 appSection">
					{topImage}
					{body}
					{bottomImage}
				</div> 
				);
		} else {
			return (
			<div className="mw9 center ph3-ns my5 by5 appSection">
				
				{body}
				
			</div> 
			);
		}
	}

export default ImageSection;