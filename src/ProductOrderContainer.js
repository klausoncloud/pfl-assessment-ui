import { connect } from 'react-redux';
import ProductOrder from './ProductOrder';
import { orderProduct } from './reduxActions';

const mapStateToProps = state => {
	return ({
        errorMSG : state.errorMSG,
        product : state.product,
        isProcessing : state.isProcessing
	});
}

const mapDispatchToProbs = dispatch => {
	return ({
		onProductOrder: productOrder => {
		    dispatch(orderProduct(productOrder));
		}
	});
}

const ProductOrderContainer = connect (
  mapStateToProps,
  mapDispatchToProbs
)(ProductOrder);

export default ProductOrderContainer;