import {useState} from "react";
import useValidation from "./useValidation";

function useInput(startValue, validations) {
    const [value, setValue] = useState(startValue)
    const valid = useValidation(value, validations)

    return {value, setValue, ...valid}
}

export default useInput
