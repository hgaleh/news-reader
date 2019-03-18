import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SourceListItem extends Component {
	static propTypes = {
		title: PropTypes.array.isRequired,
		click: PropTypes.func.isRequired,
		isDefault: PropTypes.bool.isRequired
	}

	render() {
		const {title, click, isDefault} = this.props;
		return (
			<div>
				<a target="_blank" href={href} onClick={click()}>{title}</a>
			</div>
		);
	}
}

export default SourceListItem;