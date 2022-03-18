import React from 'react'
import { useState } from 'react'

import TextInput from './Form/TextInput.jsx'
import Formfield from './Form/Formfield.jsx'
import FormSelect from './Form/FormSelect.jsx'
import FileInput from './Form/FileInput.jsx'
import BasicButton from './UI/BasicButton.jsx'
import '../css/form.css'


export default function OrderForm({containerClass, buttonClass}) {
    const [formFields, updateFormFields] = useState(   
        [
            {
                title: 'Имя',
                value: '',
                comment: '',
                error: false,
            },
            {
                title: 'Почта',
                value: '',
                comment: '',
                error: false,

            },
            {
                title: 'Технология',
                value: '',
                comment: '',
                error: false,
                options: [
                    {
                        title: 'AR',
                    },
                    {
                        title: 'VR',
                    },
                    {
                        title: '360',
                    },
                ]
            },
            {
                title: 'Название проекта',
                value: '',
                comment: '',
                error: false,
            },
            {
                title: 'Загрузить описание проекта',
                value: '',
                comment: 'Поддерживаемые форматы: PDF, DOCX, PNG, JPEG ',
                error: false,
            },
        ] 
    );
    const [formErrors, updateFormErrors] = useState([]);

    const handleChange = (e) => {
        let updatedFormFields = formFields;

        let fieldIndex = updatedFormFields.findIndex(field=> field.title === e.target.name);
        updatedFormFields[fieldIndex].value = e.target.value;
        updateFormFields(updatedFormFields);

        validateFilled(fieldIndex);
    }

    const validateFilled = (fieldIndex) => {
        const {value, title, error} = formFields[fieldIndex];
        let errorIndex = formErrors.findIndex(errorName => errorName === title);
        let updatedFormFields = formFields;
        if (errorIndex === -1){
            if( value.trim() === ''){
                updateFormErrors([...formErrors , title]);

                updatedFormFields[fieldIndex].error = true; 
                updateFormFields(updatedFormFields);
            }else {
                const updatedFormErrors = formErrors.splice(errorIndex, 1);
                updateFormErrors(updatedFormErrors);

                updatedFormFields[fieldIndex].error = false; 
                updateFormFields(updatedFormFields);
            }
        }
    }

  return (
    <form className={`${containerClass} form`}>
        <Formfield comment={formFields[0].comment}>
            <TextInput 
                fieldData={formFields[0]}
                onChange={handleChange}
            ></TextInput>
        </Formfield>
        <Formfield comment={formFields[1].comment}>
            <TextInput 
                fieldData={formFields[1]}
                onChange={handleChange}
            ></TextInput>
        </Formfield>
        <Formfield comment={formFields[2].comment}>
            <FormSelect 
                fieldData={formFields[2]}
                onChange={handleChange}
            ></FormSelect>
        </Formfield>
        <Formfield comment={formFields[3].comment}>
            <TextInput 
                fieldData={formFields[3]}
                onChange={handleChange}
            ></TextInput>
        </Formfield>
        <Formfield comment={formFields[4].comment}>
            <FileInput fieldData={formFields[4]}></FileInput>
        </Formfield>
        <div>
            <BasicButton title="Отправить" buttonClass={buttonClass}></BasicButton>
            <p className='text--small form__field__error-label'>Нажимая кнопку “Отправить” Вы даёте согласие на обработку своих персональных данных.</p>
        </div>
    </form>
  )
}
