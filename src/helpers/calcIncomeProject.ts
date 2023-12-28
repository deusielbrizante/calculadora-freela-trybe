import { FormProjectDataType } from "../@types/types";

export const formatCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

export function calcIncomeProject({ monthlyNetSalaryProject, workHoursPerDayProject, workDaysInProject, discount }: FormProjectDataType) {
    const projectValue = monthlyNetSalaryProject * workHoursPerDayProject * workDaysInProject;
    const projectValueWithAdjustment = projectValue * ((0.01 * discount) + 1);
    const adjustment = projectValueWithAdjustment - projectValue;

    return { projectValue, projectValueWithAdjustment, adjustment };
}