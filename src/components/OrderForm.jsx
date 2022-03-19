import React from 'react'
import { useState } from 'react'

import TextInput from './Form/TextInput.jsx'
import Formfield from './Form/Formfield.jsx'
import FormSelect from './Form/FormSelect.jsx'
import FileInput from './Form/FileInput.jsx'
import BasicButton from './UI/BasicButton.jsx'
import '../css/form.css'
import axios from 'axios'

export default function OrderForm({containerClass, buttonClass}) {  
    const [formFields, updateFormFields] = useState(   
        [
            {
                title: 'Имя',
                fieldName: 'client_name',
                value: '',
                comment: '',
                error: false,
            },
            {
                title: 'Почта',
                fieldName: 'email',
                value: '',
                comment: '',
                error: false,

            },
            {
                title: 'Технология',
                fieldName: 'technology_id',
                value: '',
                comment: '',
                error: false,
                options: [
                    {
                        title: 'AR',
                        value: '1',
                    },
                    {
                        title: 'VR',
                        value: '2',

                    },
                    {
                        title: '360',
                        value: '3',

                    },
                ]
            },
            {
                title: 'Название проекта',
                fieldName: 'project_title',
                value: '',
                comment: '',
                error: false,
            },
            {
                title: 'Загрузить описание проекта',
                fieldName: 'file',
                value: '',
                comment: 'Поддерживаемые форматы: PDF, DOCX, PNG, JPEG ',
                error: false,
            },
        ] 
    );
    const [formErrors, updateFormErrors] = useState([]);
    
    const addError = (fieldIndex) => {
        let {value, fieldName} = formFields[fieldIndex];
        let errorIndex = formErrors.findIndex(errorName => errorName === fieldName);
        let updatedFormFields = formFields;
        if (errorIndex === -1){
            updateFormErrors([...formErrors , fieldName]);
            updatedFormFields[fieldIndex].error = true; 
            updateFormFields(updatedFormFields);
        }
    }

    const removeError = (fieldIndex) => {
        const {value, fieldName} = formFields[fieldIndex];
        let errorIndex = formErrors.findIndex(errorName => errorName === fieldName);
        let updatedFormFields = formFields;
        if (errorIndex === -1){
            const updatedFormErrors = formErrors.splice(errorIndex, 1);
            updateFormErrors(updatedFormErrors);
            updatedFormFields[fieldIndex].error = false; 
            updateFormFields(updatedFormFields);
        }
    }

    const validateFilled = (fieldIndex) => {
        const {value, fieldName, error} = formFields[fieldIndex];
        let errorIndex = formErrors.findIndex(errorName => errorName === fieldName);
        let updatedFormFields = formFields;
        if (errorIndex === -1){
            if( value.trim() === ''){
                updateFormErrors([...formErrors , fieldName]);

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

    const validateEmail = (fieldIndex) => {
        
    }

    const validateFile = (fieldIndex, file) => {
        const types = ["image/jpeg", "image/png", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf","application/msword"];
        if(!types.includes(file.type)) {
            addError(fieldIndex);
        }else{
            removeError(fieldIndex);
        }
    }

    const handleChange = (e) => {
        let updatedFormFields = formFields;
        let fieldIndex = updatedFormFields.findIndex(field=> field.fieldName === e.target.name);
        updatedFormFields[fieldIndex].value = e.target.value;
        updateFormFields(updatedFormFields);
        validateFilled(fieldIndex);
        if(!formFields[fieldIndex].error & formFields.fieldName === 'email'){
            validateEmail(fieldIndex);
        }
        if (formFields[fieldIndex].fieldName === 'file'){
            validateFile(fieldIndex, e.target.files[0]);
            if(!formFields[fieldIndex].error){
                formFields[fieldIndex].value = e.target.files[0];
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        let submittedData = new FormData;
        formFields.forEach((formField) => {
            if(formField.fieldName != 'file'){
                submittedData.append(formField.fieldName, formField.value.trim());
            }else{
                submittedData.append(formField.fieldName, formField.value);
            }
            console.log(formField, submittedData)
        });
        console.log(submittedData.entries());
        axios({
            method: 'post',
            url: 'http://itpro/send-order', 
            data: submittedData,
            headers: {"Content-Type": "multipart/form-data"}
        })
        .then( response =>
        {
            console.log(response);

        })
        .catch(response => 
        { 
            console.log(response.message);
        });
        console.log(submittedData)
    }


  return (
    <form 
        className={`${containerClass} form`} 
        onSubmit={handleSubmit} 
        encType="multipart/form-data"
        method='post'
        >
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
            <FileInput fieldData={formFields[4]}
                onChange={handleChange}
            ></FileInput>
        </Formfield>
        <div>
            <BasicButton title="Отправить" type="submit" buttonClass={buttonClass}></BasicButton>
            <p className='text--small form__field__error-label'>Нажимая кнопку “Отправить” Вы даёте согласие на обработку своих персональных данных.</p>
        </div>
    </form>
  )
}
