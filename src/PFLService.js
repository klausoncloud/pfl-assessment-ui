import fetch from 'isomorphic-fetch';

const BASE_URL_PRODUCTS = "pflservice/rest/products";
const BASE_URL_ORDERS = "pflservice/rest/orders";
const QUERY_PARM_PRODUCT_ID = "id";

class PFLService {

	static orderProduct(orderJson) {
		let url = BASE_URL_ORDERS;

		let payload = {
			method: 'POST',
			headers: {
				"Content-Type" : "application/json"
			},
			body: JSON.stringify(orderJson)
		}

		return fetch(url, payload)
			.then((response) => {
				if (response.status >= 400) {
					throw new Error ("Error retrieving: " + response.status);
				}

				return response.json();
			})
			.then((responseJson) => {
				return responseJson.results.data
			})
			.catch((error) => { throw error });
	}

	static getOrder(orderID) {
		let url = BASE_URL_ORDERS + "/" + orderID;

		return(this._getPFLData(url));
	}

	static getProduct(productID) {
		let url = BASE_URL_PRODUCTS + "?" + QUERY_PARM_PRODUCT_ID + "=" + productID;

		return(this._getPFLData(url));
	}

	static getProductList() {
		let url = BASE_URL_PRODUCTS;

		return(this._getPFLData(url));
	}

	static _getPFLData(url) {

		let payload = {
			method: 'GET',
			headers: {
				"Content-Type" : "application/json"
			}
		}

		return fetch(url, payload)
			.then((response) => {
				console.log(response.status);
				if (response.status >= 400) {
					throw new Error ("Error retrieving: " + response.status);
				}

				return response.json();
			})
			.then((responseJson) => {
				return responseJson.results.data;
			})
			.catch((error) => { throw error; });
	}
}

export default PFLService;