import React from "react";

const ContentImg = ({ illustration, className, children }) => {
	return (
		<div className="flex-row-center content-img">
			<img src={illustration} alt="crypto-illustration" />
			<div className={`content-img__text flex-column-center ${className}`}>{children}</div>
		</div>
	);
};

export default ContentImg;
