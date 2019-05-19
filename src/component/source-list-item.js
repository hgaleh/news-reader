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
			<a style={{border: isSelected? 'solid': 'none'}} onClick={click}>
				<div>{item.name}</div>
			</a>
		);
	}
}

export default SourceListItem;