import BaseCard from "./Cards/BaseCard";

class EmployeeNotExist extends Error {
    constructor(empl) {
        super(`Card for employee '${empl}' doesn't exist`)
    }
}

const employeeCards = {
    warehouse: <BaseCard />,
    delivery: <BaseCard />,
    lawyer: <BaseCard />,
}

const employeeCardFactory = empl => {
    if (employeeCards[empl] === undefined) {
        throw new EmployeeNotExist(empl)
    }
    return employeeCards[empl]
}

export {
    employeeCardFactory
}