import React, { useRef } from 'react'
import RegistrationFormStore from './store'
import RegistrationForm from './component'

const RegistrationFormContainer = () => {
  const regFormRef = useRef(new RegistrationFormStore())

  return <RegistrationForm formStore={regFormRef.current} />
}

export default RegistrationFormContainer
