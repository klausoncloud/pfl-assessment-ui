import { connect } from 'react-redux';
import OrderStatus from './OrderStatus';

const mapStateToProps = state => {
	return ({
        errorMSG : state.errorMSG,
        order : state.order,
        isProcessing : state.isProcessing
	});
}

const OrderStatusContainer = connect (
  mapStateToProps,
)(OrderStatus);

export default OrderStatusContainer;