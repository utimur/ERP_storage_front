import React from 'react'
import LoginFormStore from '../components/LoginForm/store'
import DependenciesContainer from './DependenciesContainer'
import { LoginFormContext } from '../contexts'

const LoginFormContainer = ({ children }) => (
  <DependenciesContainer
    context={LoginFormContext}
    factory={() => ({
      formStore: new LoginFormStore()
    })}
  >
    {children}
  </DependenciesContainer>
)

export default LoginFormContainer
