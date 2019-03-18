import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SourceListItem extends Component {
	static propTypes = {
		item: PropTypes.object.isRequired,
		click: PropTypes.func.isRequired,
		isSelected: PropTypes.bool
	}

	render() {
		const {item, click, isSelected} = this.props;
		return (
			<div style={isSelected? 'border: solid': 'border: none'}>
				<b>{item.name}</b>
				<i>{item.description}</i>
			</div>
		);
	}
}

export default SourceListItem;