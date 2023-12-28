import { FormDataType } from "../@types/types";

export const formatCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

export function calcIncome({ monthlyExpenses, monthlyNetSalary, vacationWeeksPerYear, workDaysPerWeek, workHoursPerDay }: FormDataType) {
    const weeksPerYear = 52 - vacationWeeksPerYear;
    const workDaysPerYear = weeksPerYear * workDaysPerWeek;

    const productiveHoursPerYear = workDaysPerYear * workHoursPerDay * 0.9;

    const annualNetSalary = monthlyNetSalary * 12;
    const annualExpenses = monthlyExpenses * 12;

    const annualTaxes = 70 * 12;

    const annualGrossIncome = annualNetSalary + annualExpenses + annualTaxes;
    const hourlyRate = annualGrossIncome / productiveHoursPerYear;
    const monthlyGrossIncome = annualGrossIncome / 12;

    return { hourlyRate, monthlyGrossIncome };
}