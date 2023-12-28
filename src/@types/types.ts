export type InputField = {
    id: string
    label: string
    inputInfo: string
}

export type FormDataType = {
    monthlyNetSalary: number,
    workHoursPerDay: number,
    workDaysPerWeek: number,
    vacationWeeksPerYear: number,
    monthlyExpenses: number
}

export type SalaryDetailsType = {
    hourlyRate: string,
    monthlyGrossIncome: string
}

export type FormProjectDataType = {
    monthlyNetSalaryProject: number,
    workHoursPerDayProject: number,
    workDaysInProject: number,
    discount: number
}

export type SalaryDetailsTypeProject = {
    projectCost: string,
    discountedProjectCost: string,
    adjustment: string
}