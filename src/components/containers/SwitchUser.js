import { connect } from 'react-redux';
import SwitchUser from '../ui/SwitchUser';
import { switchUser } from '../../config/actions';

function mapDispatchToProps(dispatch) {
    return {
        onSwitchUser: (newUser) => {
            dispatch(switchUser(newUser));
        }
    };
}

export default connect(false, mapDispatchToProps)(SwitchUser);
