import React, { Component } from 'react'
import Login from './Login'
import { BrowserRouter, Route, Redirect } from "react-router-dom";

export class Welcome extends Component {

    render() {
        return (
            <div className='main-div-welcome'>
                <div className='brand-info'>
                    <h1>Planet Earth</h1>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/44/44536.svg" alt="img-brand-info"
                        style={{
                            height: '50%',
                            filter: 'invert(1) drop-shadow(2px 4px 6px black)'
                        }} />
                </div>
                <div className='login-form'>
                    <div className='login-brand-info'>
                        <h1>Planet Earth</h1>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/44/44536.svg" alt="img-logon-form"
                            style={{
                                height: '30%',
                                marginLeft:'20px'
                            }} />
                    </div>
                    <BrowserRouter>
                        <Route path='/' exact ><Redirect to='/login' /></Route>
                        <Route path='/login' exact ><Login name='Login' /></Route>
                        <Route path='/register' exact><Login name='Register' /></Route>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

export default Welcome
