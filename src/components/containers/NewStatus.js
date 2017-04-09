import { connect } from 'react-redux';
import NewStatus from '../ui/NewStatus';
import { addPublication } from '../../config/actions';

function mapStateToProps({ user }) {
    return {
        user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onNewPublication: ({ from, text }) => {
            dispatch(addPublication(from, text));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStatus);
