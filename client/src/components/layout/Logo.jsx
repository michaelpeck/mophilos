import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../../assets/mophilos.png'

const Wrapper = styled.a.attrs({
  className: 'navbar-brand',
})``

class Logo extends Component {
  render() {
    return (
      <Wrapper href="https://sambarros.com">
        <img src={logo} width="140" height="33" alt="sambarros.com" />
      </Wrapper>
    )
  }
}

export default Logo
