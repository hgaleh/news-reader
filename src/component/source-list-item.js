import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SourceListItem extends Component {
	static propTypes = {
		item: PropTypes.object.isRequired,
		click: PropTypes.func.isRequired,
		isDefault: PropTypes.bool.isRequired
	}

	render() {
		const {item, click, isDefault} = this.props;
		return (
			<div>
				ListItem
			</div>
		);
	}
}

export default SourceListItem;