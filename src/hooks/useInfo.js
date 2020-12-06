import {useState} from "react";
import useValidation from "./useValidation";

function useInfo(startValue, validations) {
    const [value, setValue] = useState(startValue)
    const valid = useValidation(value, validations)

    return {value, setValue, ...valid}
}

export default useInfo
