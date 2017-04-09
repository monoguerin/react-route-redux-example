import Main from '../ui/Main';
import { connect } from 'react-redux';

function mapStateToProps({ publications }) {
    return {
        publications,
        childrenText: "THIS IS A CHILDREN homeee"
	};
}

export default connect(mapStateToProps)(Main);
