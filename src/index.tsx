import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContext } from './context/Authentication'

const Application: React.FC = () => (
  <AuthContext>
    <App />
  </AuthContext>
)

ReactDOM.render(<Application />, document.getElementById('root'));
