import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListItem from './list-item';

class SourceList extends Component {
	static propTypes = {
		selectedSource: PropTypes.string.isRequired, 
		sourceList: PropTypes.array.isRequired,
		click: PropTypes.func.isRequired
	}

	makeList(sourceList, click) {
		sourceList.map(listItem => {
			return <ListItem href={listItem.href} title={listItem.title} click={click}></ListItem>
		});
	}

	render() {
		const {selectedSource, sourceList, click} = this.props;
		return (
			<div>
				{makeList(sourceList, click)}
			</div>
		);
	}
}

export default SourceList;