import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SourceListItem from './source-list-item';
import './source-list.css';
class SourceList extends Component {
	static propTypes = {
		selectedSource: PropTypes.string, 
		sourceList: PropTypes.array.isRequired,
		click: PropTypes.func.isRequired
	}

	makeList(sourceList, click, selectedSource) {
		return sourceList.map(listItem => {
			return (<SourceListItem 
				item={listItem} click={() => {click(listItem.id)}} 
				isSelected={listItem.id === selectedSource}>
			</SourceListItem>)
		});
	}

	render() {
		const {selectedSource, sourceList, click} = this.props;
		const listItems = this.makeList(sourceList, click, selectedSource)
		return (
			<div className="scroll-source-list">
				{listItems}
			</div>
		);
	}
}

export default SourceList;