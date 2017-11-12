import React, { Component } from 'react';
import { ROUTE_ORDER_STATUS } from './routeNames';

class ProductOrder extends Component {
	constructor(props) {
		super(props);
		this.shippingMethod = "";
	}
	
	handleOrderButtonPressed() {
		this.props.onProductOrder(this.createOrderObject());
		this.props.history.push(ROUTE_ORDER_STATUS);
	}

	getValueFromField(fieldID) {
		let field = document.getElementById(fieldID);

		return field.value;
	}

	createOrderObject() {
		let orderJson = {
			//partnerOrderReference: "MyReferenceNumber",
    		orderCustomer: {  
        		firstName: this.getValueFromField("inputFirstName"),
        		lastName: this.getValueFromField("inputLastName"), 
        		companyName: "ACME",  
        		address1: this.getValueFromField("inputAddress"),
        		address2: this.getValueFromField("inputAddress2"),
        		city: this.getValueFromField("inputCity"),
        		state: this.getValueFromField("inputState"),
        		postalCode: this.getValueFromField("inputZipCode"),
        		countryCode: this.getValueFromField("inputCountry"),
        		email: this.getValueFromField("inputEmail"),
        		phone: this.getValueFromField("inputPhone")
    		},  
    		items: [  
        		{  
            		itemSequenceNumber: 1,  
            		productID: this.props.match.params.id,
            		quantity: this.getValueFromField("inputQuantity"),
            		partnerItemReference: "MyItemReferenceID",
            		itemFile: "http://www.balloonfiesta.com/assets/images/fiestaballoon2.png"  
        		}  
    		],  
    		shipments: [  
        		{  
            		shipmentSequenceNumber: 1,  
            		firstName: this.getValueFromField("inputFirstName"),
            		lastName: this.getValueFromField("inputLastName"), 
            		companyName: "ACME",  
            		address1: this.getValueFromField("inputAddress"),
            		address2: this.getValueFromField("inputAddress2"),
            		city: this.getValueFromField("inputCity"),
            		state: this.getValueFromField("inputState"),
            		postalCode: this.getValueFromField("inputZipCode"),
            		countryCode: this.getValueFromField("inputCountry"),
            		phone: this.getValueFromField("inputPhone"),
            		shippingMethod: this.shippingMethod   
        		}  
    		]  
		};

		return orderJson;
	}

	testOrderObject() {
		let orderJson = {
			//partnerOrderReference: "MyReferenceNumber",
    		orderCustomer: {  
        		firstName: "John",  
        		lastName: "Doe",  
        		companyName: "ACME",  
        		address1: "1 Acme Way",  
        		address2: "",  
        		city: "Livingston",  
        		state: "MT",  
        		postalCode: "59047",  
        		countryCode: "US",  
        		email: "jdoe@acme.com",  
        		phone: "1234567890"  
    		},  
    		items: [  
        		{  
            		itemSequenceNumber: 1,  
            		productID: 1234,  
            		quantity: 1000,   
            		partnerItemReference: "MyItemReferenceID",
            		itemFile: "http://www.balloonfiesta.com/assets/images/fiestaballoon2.png"  
        		}  
    		],  
    		shipments: [  
        		{  
            		shipmentSequenceNumber: 1,  
            		firstName: "John",  
            		lastName: "Doe",  
            		companyName: "ACME",  
            		address1: "1 Acme Way",  
            		address2: "",  
            		city: "Livingston",  
            		state: "MT",  
            		postalCode: "59047",  
            		countryCode: "US",  
            		phone: "1234567890",  
            		shippingMethod: "FDXG"   
        		}  
    		]  
		};

		return orderJson;
	}

	setSelectedShipmentCode(value) {
		this.shippingMethod = value;
	}

	renderPriceOptions(product) {
		let list = product.deliveredPrices.map((lineItem) => {
			let id = "priceRadio-" + lineItem.deliveryMethodCode;
			let value = lineItem.deliveryMethodCode;
			let price = lineItem.price;
			return(
				<label className="form-check-label container row">
					<input className="form-check-input" type="radio" name="priceRadios" id={ id } value={ value }
						onClick={ () => { this.setSelectedShipmentCode(value) } } >
					</input>
					<div className="container row">
						<div className="col">
							{ price }
						</div>
						<div className="col">
							{ lineItem.deliveryMethodCode }
						</div>
						<div className="col">
							{ lineItem.description }
						</div>
					</div>
				</label>
			);
		});

		return(list);
	}

	renderSimpleLabelAndInput(labelClass, labelText, inputType, inputClass, inputId) {
		return(
			<div className="form-group row">
				<label className={ labelClass } htmlFor={ inputId }>{ labelText }</label>
				<div className={ inputClass }>
					<input type={ inputType} className="form-contol" id={ inputId } placeholder={ labelText }></input>
				</div>
			</div>
		);
	}

	renderOrderDataEntry(product) {
		let labelClass = "col-3 col-form-label";
		let legendClass = "col-3 col-form-legend";
		let inputClass = "col-9"
		return(
			<form>
				{ this.renderSimpleLabelAndInput(labelClass, "Quantity", "text", inputClass, "inputQuantity") }
				
				<div className="form-group row">
					<legend className={ legendClass }>Price & Delivery</legend>
					<div className={ inputClass }>
						<div className="form-check container">
							{ this.renderPriceOptions(product) }
						</div>
					</div>
				</div>

				{ this.renderSimpleLabelAndInput(labelClass, "Art Work", "file", inputClass, "inputFile") }

				{ this.renderSimpleLabelAndInput(labelClass, "First Name", "text", inputClass, "inputFirstName") }
				{ this.renderSimpleLabelAndInput(labelClass, "Last Name", "text", inputClass, "inputLastName") }
				{ this.renderSimpleLabelAndInput(labelClass, "Address", "text", inputClass, "inputAddress") }
				{ this.renderSimpleLabelAndInput(labelClass, "Address2", "text", inputClass, "inputAddress2") }
				{ this.renderSimpleLabelAndInput(labelClass, "City", "text", inputClass, "inputCity") }
				{ this.renderSimpleLabelAndInput(labelClass, "State", "text", inputClass, "inputState") }
				{ this.renderSimpleLabelAndInput(labelClass, "Zip Code", "text", inputClass, "inputZipCode") }
				{ this.renderSimpleLabelAndInput(labelClass, "Country", "text", inputClass, "inputCountry") }
				{ this.renderSimpleLabelAndInput(labelClass, "Email", "email", inputClass, "inputEmail") }
				{ this.renderSimpleLabelAndInput(labelClass, "Phone", "text", inputClass, "inputPhone") }
			</form>
		);
	}

	renderProductInformation(product) {
		return(
			<div className="card" >
				<img className="card-img-top" src={ product.imageURL } alt="Product"></img>
				<div className="card-body">
					<h4 className="card-title">
						{ product.name } ({ product.id })
					</h4>
				</div>
			</div>
		);
	}

	render() {
		if (this.props.product !== null) {
			return(
				<div className="container">
					<div className="row">
						<div className="col-5">
							{ this.renderProductInformation(this.props.product) }
						</div>
						<div className="col-7">
							{ this.renderOrderDataEntry(this.props.product) }
							<button 
								type="submit" className="btn btn-primary"
								onClick={ () => { this.handleOrderButtonPressed() } }>
									Order
							</button>
						</div>
					</div>
				</div>
			);
		}

		if (this.props.isProcessing) {
			return(
				<div>
			    	<p> Fetching data from the PFL server. Just a moment... </p>
				</div>
			);
		} else {
			return(
				<div>
			    	<p> Problem: I don't have a product to display. </p>
				</div>
			);
		}
	}
}

export default ProductOrder;