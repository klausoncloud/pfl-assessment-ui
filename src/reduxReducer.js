import * as ACTION_TYPE from './reduxActionTypes'

const initialState = {
	isProcessing : true,
	productList : null,
	product : null,
	productOrder : null,
	order : null,
	errorMSG : null
}

const reduxReducer = ( state = initialState, action ) => {
	switch (action.type) {
		case ACTION_TYPE.SET_PROCESSING_STATUS:
		return (
                Object.assign({}, state, 
                    {
                        isProcessing : action.isProcessing
                    })
            );

		case ACTION_TYPE.SET_PRODUCT_LIST:
		return (
                Object.assign({}, state, 
                    {
                        productList : action.productList,
                        isProcessing : action.isProcessing
                    })
            );

		case ACTION_TYPE.SET_PRODUCT:
		return (
                Object.assign({}, state, 
                    {
                        product : action.product,
                        isProcessing : action.isProcessing
                    })
            );

	default:
            return state;
	}
}

export default reduxReducer;