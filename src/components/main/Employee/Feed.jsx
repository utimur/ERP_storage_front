import React from "react"
import {employeeCardFactory} from "./employeeCardFactory";


const Feed = ({ employee }) => {
    const card = employeeCardFactory(employee)

    return card
}

export default Feed
