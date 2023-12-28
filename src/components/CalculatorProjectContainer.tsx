import './ContainerProject.css';
import React, { useState } from 'react';
import { FormProjectDataType, InputField, SalaryDetailsTypeProject } from '../@types/types.ts';
import FormSection from './FormSection.tsx';
import ResultCardProject from './ResultCardProject.tsx';
import { formatCurrency, calcIncomeProject } from '../helpers/calcIncomeProject.ts';

const inputFields: InputField[] = [
    {
        id: 'monthlyNetSalaryProject',
        label: 'Qual o valor da sua hora de trabalho?',
        inputInfo: 'R$/hora'
    },
    {
        id: 'workHoursPerDayProject',
        label: 'Quantas horas por dia você vai trabalhar no projeto?',
        inputInfo: 'horas/dia'
    },
    {
        id: 'workDaysInProject',
        label: 'Quantas dias você vai trabalhar no projeto?',
        inputInfo: 'dias'
    },
    {
        id: 'discount',
        label: 'Você vai dar um desconto? O quer inserir um adicional de complexidade?',
        inputInfo: '%'
    }
];

function CalculatorProjectContainer() {
    var [colorAdjustment, setColorAdjustment] = useState(0);
    const [formData, setFormData] = useState({} as FormProjectDataType);
    const [salaryDetails, setSalaryDetails] = useState({} as SalaryDetailsTypeProject);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: Number(value)
        });
    };

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formResult = calcIncomeProject(formData);
        setSalaryDetails({
            projectCost: formatCurrency.format(formResult.projectValue),
            discountedProjectCost: formatCurrency.format(formResult.projectValueWithAdjustment),
            adjustment: formatCurrency.format(formResult.adjustment)
        });

        setColorAdjustment(formResult.adjustment);
    };

    return (
        <div className="calculator_project_container">
            <div className="container">
                <FormSection inputFields={inputFields} onChange={handleInputChange} onSubmit={handleSubmit} />
                <ResultCardProject>
                    <p>O custo do projeto é:</p>
                    <h2>{salaryDetails.projectCost}</h2>
                    <p>O custo do projeto com desconto ou com adicional de complexidade é:</p>
                    <h2>{salaryDetails.discountedProjectCost}</h2>
                    <p>O valor do adicional de complexidade ou desconto é:</p>
                    <h2 style={{ color: colorAdjustment < 0 ? 'red' : '' }}>{salaryDetails.adjustment}</h2>
                </ResultCardProject>
            </div>
        </div>
    );
}

export default CalculatorProjectContainer;