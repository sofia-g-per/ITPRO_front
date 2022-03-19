import React from 'react'
import {useState} from 'react'
import TextInput from '../Form/TextInput.jsx'
import Formfield from '../../components/Form/Formfield.jsx'
import FormSelect from '../../components/Form/FormSelect.jsx'
import FileInput from '../../components/Form/FileInput.jsx'
import BasicButton from '../../components/UI/BasicButton.jsx'
import '../../css/form.css'
import '../../css/popups/test-request-popup.css'

export default function TestRequestPopup() {
    const [formFields, updateFormFields] = useState(   
        [
            {
                title: 'Проект',
                value: '',
                comment: '',
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
                title: 'Имя',
                value: '',
                comment: '',
            },
            {
                title: 'Почта',
                value: '',
                comment: '',
            },
 
            {
                title: 'Цели тестирования',
                value: '',
                comment: '',
            },
        ] 
    );
    const [formErrors, updateFormErrors] = useState([]);
    
    const checkError = (fieldIndex) => {
        const {value, fieldName} = formFields[fieldIndex];
        let errorIndex = formErrors.findIndex(errorName => errorName === fieldName);
        if (errorIndex === -1){
            return true
        }
        return false
    }

    const addError = (fieldIndex) => {
        let {value, fieldName} = formFields[fieldIndex];
        let updatedFormFields = formFields;
        if (checkError(fieldIndex)){
            updateFormErrors([...formErrors , fieldName]);
            updatedFormFields[fieldIndex].error = true; 
            updateFormFields(updatedFormFields);
        }
    }

    const removeError = (fieldIndex) => {
        const {value, fieldName} = formFields[fieldIndex];
        let updatedFormFields = formFields;
        if (!checkError(fieldIndex)){
            let errorIndex = formErrors.findIndex(errorName => errorName === fieldName);
            const updatedFormErrors = formErrors.splice(errorIndex, 1);
            updateFormErrors(updatedFormErrors);
            updatedFormFields[fieldIndex].error = false; 
            updateFormFields(updatedFormFields);
        }
    }

    const validateFilled = (fieldIndex) => {
        const {value, fieldName, error} = formFields[fieldIndex];
        let updatedFormFields = formFields;
        if (checkError(fieldIndex)){
            if( value.trim() === ''){
                addError(fieldIndex);
            }else {
                removeError(fieldIndex);
            }
        }

    }

    const validateEmail = (fieldIndex) => {
        
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

    }
  return (
    <div className='test-request-popup'>
        <div className='test-request-popup__text'>
            <h2 className='popup-heading'>
                Вместе, мы сможем превратить идею в реальность!
            </h2>
            <a className='popup-text--small' href="mailto:info@itpro.moscow ">
                info@itpro.moscow 
            </a>
        </div>
        <form className='test-request-popup__form'>
            <div className='form' enctype="multipart/form-data">
                <Formfield formField={formFields[0]}>
                    <FormSelect 
                        fieldData={formFields[0]}
                        onChange={handleChange}
                    ></FormSelect>
                </Formfield>
                <Formfield formField={formFields[1]} onChange={handleChange}>
                    <TextInput fieldData={formFields[1]}></TextInput>
                </Formfield>
                <Formfield formField={formFields[2]} onChange={handleChange}>
                    <TextInput fieldData={formFields[2]}></TextInput>
                </Formfield>
                <Formfield formField={formFields[3]} onChange={handleChange}>
                    <TextInput fieldData={formFields[3]}></TextInput>
                </Formfield>
                <div>
                    <BasicButton title="Получить" buttonClass="basic-button--purple"></BasicButton>
                    <p className='text--small form__field__error-label'>Нажимая кнопку "Получить" Вы даёте согласие на обработку своих персональных данных.</p>
                </div>
            </div>
        </form>
    </div>
  )
}
