import { connect } from 'react-redux';
import NewComment from '../ui/NewComment';
import { addComment } from '../../config/actions';

function mapStateToProps({ user }, { parentKey }) {
    return {
        user,
        parentKey
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onNewComment: (idx, { from, text }) => {
            dispatch(addComment(idx, from, text));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewComment);
