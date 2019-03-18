import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NewsListItem extends Component {
	static propTypes = {
		href: PropTypes.string.isRequired, 
		title: PropTypes.array.isRequired,
	}

	render() {
		const {href, title} = this.props;
		return (
			<div>
				<a target="_blank" href={href} onClick={click()}>{title}</a>
			</div>
		);
	}
}

export default NewsListItem;