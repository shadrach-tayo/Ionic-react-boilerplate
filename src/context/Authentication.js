import React, { Component, createContext } from 'react'


// interface authProps {
//   isLoggedIn: Boolean
// }

const { Provider, Consumer } = React.createContext({ isLoggedIn: false })

class AuthContext extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: true
    }
  }

  componentWillMount() {
    /**
     * write login logic
     * check if user is currently loggedIn
     */
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { AuthContext, Consumer as AuthConsumer }