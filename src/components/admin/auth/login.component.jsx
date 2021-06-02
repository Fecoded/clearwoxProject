import { useState } from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { login } from '../../../redux/user/user.action'
import { selectLoading } from '../../../redux/user/user.selector'
import PropTypes from 'prop-types'


const Login = ({ login }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault();
        login({
            username,
            password,
            setLoading
        })
    }

    return (
        
        <div className="card-control">

            <div className="form-container">
    
                <div className="form-wrapper">
             <div id="logo">
                <img className="logo mb-3" src="assets/media/image/favicon.png" alt="img"/>
             </div>
    
            <h5 className='mb-2'>Sign in</h5>
    
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input 
                        type="text" 
                        name='username'
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control" 
                        placeholder="Username or email" 
                        required 
                        autoFocus
                        />
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        name='password'
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control" 
                        placeholder="Password" 
                        required
                        />
                </div>
                <div className="form-group d-flex justify-content-between">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" defaultChecked id="customCheck1"/>
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                    <a href="recover-password.html">Reset password</a>
                </div>
                {loading ? (
                     <button type="button" className="btn btn-primary btn-block" disabled>
                     <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                         Loading...
                    </button>
                ) : (
                    <button className="btn btn-primary btn-block">Sign in</button>
                )}
               
            </form>
    
        </div>
                </div>
         

        </div>

    
    )
}

Login.propTypes = {
    login: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
    login: (formData) => dispatch(login(formData))
})

const mapStateToProps = createStructuredSelector({
    loading: selectLoading
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)