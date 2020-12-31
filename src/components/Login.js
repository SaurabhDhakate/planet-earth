import React, { Component } from 'react'

export class Login extends Component {
    renderHeading() {
        if (this.props.name === 'Login') {
            return (
                <div className='login-form-heading' style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}>
                    <a href="/login" style={{
                        textDecoration: 'none',
                        color: '#494e55',
                        width: '40%'
                    }}>
                        <div style={{ borderBottom: '2px grey solid' }}>
                            <h3 style={{ textAlign: 'center' }}>Login</h3>
                        </div>
                    </a>
                    <a href="/register" style={{
                        textDecoration: 'none',
                        color: 'grey',
                        width: '40%'
                    }}><div style={{paddingBottom:'2px'}}><h3 style={{ textAlign: 'center' }}>Register</h3></div></a>
                </div>
            )
        } else {
            return (
                <div className='login-form-heading' style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}>
                    <a href="/login" style={{
                        textDecoration: 'none',
                        color: 'grey',
                        width: '40%'
                    }}>
                        <div style={{paddingBottom:'2px'}}>
                            <h3 style={{ textAlign: 'center' }}>Login</h3>
                        </div>
                    </a>
                    <a href="/register" style={{
                        textDecoration: 'none',
                        color: '#494e55',
                        width: '40%'
                    }}>
                        <div style={{ borderBottom: '2px grey solid' }}>
                            <h3 style={{ textAlign: 'center' }}>Register</h3>
                        </div>
                    </a>
                </div>
            )
        }
    }

    render() {
        return (
            <div style={{
                width: '100%',
                height: '70%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                {this.renderHeading()}
                <div style={{
                    width: '100%',
                    height: '70%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}>
                    <input type="text" name="uname" id="uname" placeholder='Username'
                        style={{
                            width: '60%',
                            padding: ' 10px 5%',
                            border: 'none',
                            backgroundColor: '#f4f4f4'
                        }} />
                    <input type="password" name="password" id="password" placeholder='Password'
                        style={{
                            width: '60%',
                            padding: '10px 5%',
                            border: 'none',
                            backgroundColor: '#f4f4f4'
                        }} />
                    <button style={{
                        width: '70%',
                        padding: '10px',
                        border: 'none',
                        backgroundColor: '#494e55',
                        color: 'white'
                    }}>{this.props.name}</button>
                </div>
            </div>
        )
    }
}

export default Login
