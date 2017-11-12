import { connect } from 'react-redux';
import ProductList from './ProductList';
import { displayProduct, displayProductList } from './reduxActions';

const mapStateToProps = state => {
	return ({
        errorMSG : state.errorMSG,
        isProcessing : state.isProcessing,
        productList : state.productList
	});
}

const mapDispatchToProbs = dispatch => {
	return ({
		onDisplayList: () => {
		    dispatch(displayProductList());
		},
		onProductSelect: productID => {
		    dispatch(displayProduct(productID));
		}
	});
}

const ProductListContainer = connect (
  mapStateToProps,
  mapDispatchToProbs
)(ProductList);

export default ProductListContainer;