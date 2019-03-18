import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './source-list-item.css';

class SourceListItem extends Component {
	static propTypes = {
		item: PropTypes.object.isRequired,
		click: PropTypes.func.isRequired,
		isSelected: PropTypes.bool
	}

	render() {
		const {item, click, isSelected} = this.props;
		return (
			<div style={{border: isSelected? 'solid': 'none'}} onClick={click}>
				<div className="tooltip"> <div>{item.name}</div>
					<i className="tooltiptext">{item.description}</i>
				</div>
			</div>
		);
	}
}

export default SourceListItem;