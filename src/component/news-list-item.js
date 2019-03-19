import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NewsListItem extends Component {
	static propTypes = {
		item: PropTypes.object.isRequired
	}

	render() {
		const {item} = this.props;
		return (
			<div className="card" style={{width:'250px', maxHeight: '400px', display: 'inline-block', marginRight: '10px'}}>
				<img className="card-img-top" src={item.urlToImage} alt={item.title} style={{width:'100%'}}/>
				<div className="card-body">
					<h4 className="card-title">{item.author}</h4>
					<p className="card-text">{item.description}</p>
					<a href={item.url} target="_blank" class="btn btn-primary">Open</a>
				</div>
			</div>
		);
	}
}

export default NewsListItem;