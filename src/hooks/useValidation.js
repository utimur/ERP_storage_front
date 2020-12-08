import { useEffect, useState } from 'react'

const IS_EMPTY = 'isEmpty'
const MIN_LENGTH = 'minLength'

function useValidation (value, validations) {
  const [error, setError] = useState(null)

  const validationStrategies = {
    [IS_EMPTY]: () => !value ? 'Поле не должно быть пустым!' : null,
    [MIN_LENGTH]: () => value.length < validations[MIN_LENGTH] ? (
      `Минимальная длина поля - ${validations[MIN_LENGTH]} символов!`
    ) : null
  }

  useEffect(() => {
    for (const stratKey in validationStrategies) {
      const err = validationStrategies[stratKey]()
      if (err !== null) {
        setError(err)
        return
      }
    }
    setError(null)
  }, [value])
  return { isValid: error === null, error }
}

export default useValidation
