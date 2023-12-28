import './CalculatorContainer.css';
import { useState } from 'react';
import { FormDataType, InputField, SalaryDetailsType } from '../@types/types.ts';
import FormSection from './FormSection.tsx';
import ResultCard from './ResultCard.tsx';
import { calcIncome, formatCurrency } from '../helpers/calcIncome.ts';

const inputFields: InputField[] = [
    {
        id: 'monthlyNetSalary',
        label: 'Quanto você quer ganhar por mês ? (líquido)',
        inputInfo: 'R$/mês'
    },
    {
        id: 'workHoursPerDay',
        label: 'Quantas horas você quer trabalhar por dia ?',
        inputInfo: 'horas/dia'
    },
    {
        id: 'workDaysPerWeek',
        label: 'Quantos dias você quer trabalhar por semana ?',
        inputInfo: 'dias/semana'
    },
    {
        id: 'vacationWeeksPerYear',
        label: 'Quantas semanas por ano você quer gostaria de tirar férias ?',
        inputInfo: 'semana/ano'
    },
    {
        id: 'monthlyExpenses',
        label: 'Qual os seus custos mensais relacionados ao trabalho? Custo de licenças e sistemas, internet, luz, celular, entre outros',
        inputInfo: 'R$/mês'
    }
];

function CalculatorContainer() {

    const [formData, setFormData] = useState({} as FormDataType);
    const [salaryDetails, setSalaryDetails] = useState({} as SalaryDetailsType);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: Number(value)
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formResult = calcIncome(formData);

        setSalaryDetails({
            hourlyRate: formatCurrency.format(formResult.hourlyRate),
            monthlyGrossIncome: formatCurrency.format(formResult.monthlyGrossIncome)
        });
    }

    return (
        <div className="calculator__container">
            <div className="container">
                <FormSection inputFields={inputFields} onChange={handleInputChange} onSubmit={handleSubmit} />
                <ResultCard>
                    <p>O valor mínimo para sua hora de trabalho é:</p>
                    <h2>{salaryDetails.hourlyRate}<span>/hora</span></h2>
                    <p>O valor médio bruto que você precisa faturar é:</p>
                    <h2>{salaryDetails.monthlyGrossIncome}<span>/mês</span></h2>
                </ResultCard>
            </div>
        </div>
    );
}

export default CalculatorContainer;