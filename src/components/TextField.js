import React, { useState } from 'react'
import { TextField as MUITextField } from '@material-ui/core'

const TextField = props => {
  const [focused, setFocused] = useState(false)
  props = { ...props, error: Boolean(props.error) && focused, helperText: props.error }

  return (
    <MUITextField
      {...props}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  )
}

export default TextField
