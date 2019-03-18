import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SourceListItem from './source-list-item';

class SourceList extends Component {
	static propTypes = {
		selectedSource: PropTypes.string.isRequired, 
		sourceList: PropTypes.array.isRequired,
		click: PropTypes.func.isRequired
	}

	makeList(sourceList, click, selectedSource) {
		sourceList.map(listItem => {
			return <SourceListItem 
				item={listItem} click={() => {click(listItem.id)}} 
				isSelected={listItem.id === selectedSource}>
			</SourceListItem>
		});
	}

	render() {
		const {selectedSource, sourceList, click} = this.props;
		return (
			<div>
				{this.makeList(sourceList, click, selectedSource)}
			</div>
		);
	}
}

export default SourceList;