import React, { Component } from 'react';
import { ROUTE_PRODUCT_DETAIL } from './routeNames';

class ProductList extends Component {

	componentDidMount() {
		return this.props.onDisplayList();
	}

	orderRequest(productID) {
		this.props.onProductSelect(productID);
		this.props.history.push(ROUTE_PRODUCT_DETAIL);
	}

	listItems(productList) {
		let list = productList.map((lineItem) => {
				return(
					<div className="col-sm-3" key={ lineItem.productID }>
						<div className="card" >
							<img className="card-img-top" src={ lineItem.imageURL } alt="Product"></img>
							<div className="card-body">
								<h4 className="card-title">
									{ lineItem.name } ({ lineItem.productID })
								</h4>
								<button type="button" className="btn btn-primary"
									onClick = { ()=>this.orderRequest(lineItem.productID) } >
										Order
								</button>
							</div>
						</div>
					</div>
				);
			});

		return(			
			list
		);
	}

	render() {
		if (this.props.isProcessing) {
			return(
				<div>
			    	<p> Fetching product list. Just a moment, please.</p>
				</div>
			);
		}

		if (this.props.productList !== null) {
			return(
				<div className="container">
					<div className="row">
				    	{ this.listItems(this.props.productList) }
				    </div>
				</div>
			);
		}

		return(
			<div>
			    <p> We have encountered a problem problem. </p>
			</div>
		);
	}
}

export default ProductList;