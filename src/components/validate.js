const validationEnum = {
  IS_EMPTY: 'isEmpty',
  MIN_LENGTH: 'minLength'
}

const validationStrategies = {
  [validationEnum.IS_EMPTY]: (value, _) => !value ? 'Поле не должно быть пустым!' : null,
  [validationEnum.MIN_LENGTH]: (value, validations) => value.length < validations[validationEnum.MIN_LENGTH] ? (
        `Минимальная длина поля - ${validations[validationEnum.MIN_LENGTH]} символов!`
  ) : null
}

export const validate = (value, validations) => {
  for (const stratKey in validationStrategies) {
    const err = validationStrategies[stratKey](value, validations)
    if (err !== null) {
      throw new Error(err)
    }
  }
}
