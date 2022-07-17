import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactLoginMS from 'react-ms-login';
import GithubLogin from 'react-github-login';

class App extends Component {
    render() {

        const onSuccessGithub = (response) => {
            console.log(response.code);
        }

        return (
            <div className="App" align='center'>
                <h1>LOGIN WITH MICROSOFT AND GITHUB</h1>
                
                <GithubLogin 
                    clientId='15f9cc86c96d14536717'
                    onSucess={onSuccessGithub}
                    buttonText='LOGIN WITH GITHUB'
                    className='git-login'
                    valid={true}
                    redirectUri='https://medium.com/zestgeek/login-with-github-and-microsoft-in-reactjs-e33ffbcd933'
                    />

                <br />
                <bt />

                <ReactLoginMS
                    clientId='ef6d8c0c-4968-4c20-866e-ac765ee9ea15'
                    redirectUri='https://medium.com/zestgeek/login-with-github-and-microsoft-in-reactjs-e33ffbcd933'
                    cssClass='ms-login'
                    btnContent='LOGIN WITH MICROSOFT'
                    responseType='token'
                    handleLogin={data => console.log(data)}
                    />

            </div>
        );
    }
}

export default App;
