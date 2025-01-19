import React from "react";
import {Link} from "react-router-dom";
import './BreadCrumbs.css'
import PropTypes from "prop-types";


const breadcrumbsPropTypes = PropTypes.arrayOf(
	PropTypes.shape({
		label: PropTypes.string.isRequired,
		path: PropTypes.string.isRequired,
	})
);
export const BreadCrumbs = ({ breadcrumbs }) => {

	return (
		<nav aria-label="Breadcrumb">
			<ol className="breadcrumb">
				{breadcrumbs.map((breadcrumb, index) => (
					<li key={index} className="breadcrumb-item">
						<Link to={breadcrumb.path}>{breadcrumb.label}</Link>
					</li>
				))}
			</ol>
		</nav>
	);
};

BreadCrumbs.propTypes = {
	breadcrumbs: breadcrumbsPropTypes.isRequired,
};
