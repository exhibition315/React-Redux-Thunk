import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from './actions';
import { selectToken, selectState } from './selector';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.login('Test123456');
    }

    render() {
        const { token, state } = this.props;
        const p1 = `Token: ${token}`;
        const p2 = `State: ${state}`;
        return (
            <div>
                <button onClick={this.onClick}>Click</button>
                <p>{p1}</p>
                <p>{p2}</p>
            </div>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func,
    token: PropTypes.string,
    state: PropTypes.string
};

Login.defaultProps = {
    login: undefined,
    token: '',
    state: ''
};

const mapStateToProps = (state) => {
    const props = {
        token: selectToken(state),
        state: selectState(state)
    };
    return props;
};

const mapDispatchToProps = (dispatch) => {
    const dispatches = {
        login: (text) => dispatch(login(text)),
    };
    return dispatches;
};

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default LoginContainer;
