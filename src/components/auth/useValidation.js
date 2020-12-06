import {useEffect, useState} from "react";


const IS_EMPTY = "isEmpty"
const MIN_LENGTH = "minLength"

function useValidation(value, validations) {
    const [isEmpty, setIsEmpty] = useState(false)
    const [isMinLengthCorrect, setIsMinLengthCorrect] = useState(false)
    const [error, setError] = useState("")
    const errors = {
        [IS_EMPTY]: "Поле не должно быть пустым!",
        [MIN_LENGTH]: `Минимальная длина поля - ${validations[MIN_LENGTH]} символов!`
    }

    useEffect(() => {
        setError("")
        circleExit: for (const validation in validations) {
            switch (validation) {
                case IS_EMPTY : {
                    if (!value) {
                        setIsEmpty(true)
                        setError(errors[validation])
                        break circleExit
                    }
                    setIsEmpty(false)
                    break
                }
                case MIN_LENGTH: {
                    if (value.length < validations[validation]) {
                        setIsMinLengthCorrect(true)
                        setError(errors[validation])
                        break
                    }
                    setIsMinLengthCorrect(false)
                    break
                }
            }
        }
    }, [value])
    return {isValid: isEmpty || isMinLengthCorrect, error}
}

export default useValidation
