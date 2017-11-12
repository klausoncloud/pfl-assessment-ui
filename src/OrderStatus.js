import React, { Component } from 'react';

class OrderStatus extends Component {
	render() {
		if (this.props.isProcessing) {
			return(
				<div>
			    	<p> Fetching data from the PFL server. Just a moment... </p>
				</div>
			);
		} 
		if (this.props.order !== null) {
			return(
				<div>
					<h4>Order received</h4>
					<p>Please take note of the order id: { this.props.order.orderNumber }</p>
				</div>
			);
		} else {
			return(
				<div>
					<h4>Error - no order has been placed</h4>
			    	<p> We have encountereed an internal error. Please try again later or contact our support. </p>
				</div>
			);
		}
	}
}

export default OrderStatus;