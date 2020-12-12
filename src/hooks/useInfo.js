import { useState } from 'react'
import useValidation from './useValidation'

function useInfo (startValue, validations) {
  const [value, setValue] = useState(startValue)
  const [isActive, setIsActive] = useState(false)
  const valid = useValidation(value, validations)

  return { value, setValue, isActive, setIsActive, ...valid }
}

export default useInfo
