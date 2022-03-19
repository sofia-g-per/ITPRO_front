import React from 'react'
import {useState} from 'react'
import TextInput from '../../components/Form/TextInput.jsx'
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
                <Formfield comment={formFields[0].comment}>
                    <FormSelect fieldData={formFields[0]}></FormSelect>
                </Formfield>
                <Formfield comment={formFields[1].comment}>
                    <TextInput fieldData={formFields[1]}></TextInput>
                </Formfield>
                <Formfield comment={formFields[2].comment}>
                    <TextInput fieldData={formFields[2]}></TextInput>
                </Formfield>
                <Formfield comment={formFields[3].comment}>
                    <TextInput fieldData={formFields[3]}></TextInput>
                </Formfield>
                <div>
                    <BasicButton title="Получить"></BasicButton>
                    <p className='text--small form__field__error-label'>Нажимая кнопку "Получить" Вы даёте согласие на обработку своих персональных данных.</p>
                </div>
            </div>
        </form>
    </div>
  )
}
