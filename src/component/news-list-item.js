import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NewsListItem extends Component {
	static propTypes = {
		item: PropTypes.object.isRequired
	}

	render() {
		const {item} = this.props;
		return (
			<div className="card" style={{width: '20rem', display: 'inline-block', marginRight: '10px'}}>
				<img className="card-img-top" src={item.urlToImage} alt={item.title} style={{width:'100%', height: '10rem'}}/>
				<div className="card-body">
					<h4 className="card-title" style={{whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'}}>{item.author}</h4>
					<p className="card-text" style={{overflow: 'hidden', display: '-webkit-box', webkitLineClamp: '4', webkitBoxOrient: 'vertical'}}>{item.description}</p>
					<a href={item.url} target="_blank" class="btn btn-primary">Open</a>
				</div>
			</div>
		);
	}
}

export default NewsListItem;