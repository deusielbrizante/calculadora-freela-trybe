import { InputField } from '../@types/types';
import './FormSection.css';

type FormSectionProps = {
    inputFields: InputField[]
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void
}

function FormSection({ inputFields, onChange, onSubmit }: FormSectionProps) {
    return (
        <form onSubmit={onSubmit}>
            {inputFields.map((InputField) => (
                <div key={InputField.id} className='input__group'>
                    <label htmlFor={InputField.id}>{InputField.label}</label>
                    <div className="input__container">
                        <span>{InputField.inputInfo}</span>
                        <input type="text" id={InputField.id} name={InputField.id} onChange={onChange} />
                    </div>
                </div>
            ))}
            <button type='submit'>Calculate</button>
        </form>
    );
}

export default FormSection;