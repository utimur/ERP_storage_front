import React from 'react'
import RegistrationFormStore from '../components/RegistrationForm/store'
import DependenciesContainer from './DependenciesContainer'
import { RegistrationFormContext } from '../contexts'

const RegistrationFormContainer = ({ children }) => (
  <DependenciesContainer
    context={RegistrationFormContext}
    factory={() => ({
      formStore: new RegistrationFormStore()
    })}
  >
    {children}
  </DependenciesContainer>
)

export default RegistrationFormContainer
