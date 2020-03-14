import React, { Component, Fragment } from 'react'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Demographic from '../survey'
import { Info } from '../layout'

class Survey extends Component {
  constructor(props){
    super(props);

  }

  render () {

    return (
      <Fragment>
        <Container className='feed-container'>
          <Info class='info-paper'>
            <h3>Welcome to the Mophilos user profile survey!</h3>
            <p>Fill out the modules below so that we can start connecting you with
               your personalized content.</p>
             <p>Don't worry, you will be able to choose what you make public and
             we only use the information to connect you with content that applies to you.</p>
          </Info>
        </Container>
        <Container className='feed-container'>
          <Demographic class='info-paper'/>
        </Container>
      </Fragment>
    )
  }
}

export default Survey
