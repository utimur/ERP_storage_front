import React, { useRef } from 'react'
import LoginFormStore from './store'
import LoginForm from './component'

const LoginFormContainer = () => {
  const loginFormRef = useRef(new LoginFormStore())

  return <LoginForm formStore={loginFormRef.current} />
}

export default LoginFormContainer
