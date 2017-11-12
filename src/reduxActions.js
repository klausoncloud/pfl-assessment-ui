import * as ACTION_TYPE from './reduxActionTypes';
import PFLService from './PFLService';

export const setProcessingStatus = (isProcessing) => {
	return {
    	type : ACTION_TYPE.SET_PROCESSING_STATUS,
    	isProcessing : isProcessing
	}
}

export const setProductList = (productList) => {
	return {
    	type : ACTION_TYPE.SET_PRODUCT_LIST,
    	productList : productList,
    	isProcessing : false
	}
}

export const setProduct = (product) => {
	return {
    	type : ACTION_TYPE.SET_PRODUCT,
    	product : product,
    	isProcessing : false
	}
}

export const setOrderID = (orderID) => {
	return {
    	type : ACTION_TYPE.SET_ORDER_ID,
    	orderID : orderID,
    	isProcessing : false
 	}
}

export function displayProductList() {
  return function (dispatch) {
  	dispatch(setProcessingStatus(true));
    return PFLService.getProductList().then( (productList) => {
    	dispatch(setProductList(productList))
    }).catch(error => { 
    	dispatch(setProcessingStatus(false));
    	console.log(error);
    });
  }
}

export function displayProduct(productID) {
  return function (dispatch) {
  	dispatch(setProcessingStatus(true));
    return PFLService.getProduct(productID).then( (product) => {
    	dispatch(setProduct(product))
    }).catch(error => { 
    	dispatch(setProcessingStatus(false));
    	console.log(error);
    });
  }
}

export function orderProduct(productOrder) {
  return function (dispatch) {
  	dispatch(setProcessingStatus(true));
    return PFLService.orderProduct(productOrder).then( (orderID) => {
    	dispatch(setOrderID(orderID))
    }).catch(error => {
    	dispatch(setProcessingStatus(false));
    	console.log(error);
    });
  }
}