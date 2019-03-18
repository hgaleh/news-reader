import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
	static propTypes = {
		href: PropTypes.string.isRequired, 
		title: PropTypes.array.isRequired,
		click: PropTypes.func.isRequired,
		isDefault: PropTypes.bool.isRequired
	}

	render() {
		const {href, title, click} = this.props;
		return (
			<div>
				<a target="_blank" href={href} onClick={click()}>{title}</a>
			</div>
		);
	}
}

export default ListItem;