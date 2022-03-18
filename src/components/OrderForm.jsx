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
            },
            {
                title: 'Почта',
                value: '',
                comment: '',
            },
            {
                title: 'Технология',
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
                title: 'Название проекта',
                value: '',
                comment: '',
            },
            {
                title: 'Загрузить описание проекта',
                value: '',
                comment: 'Поддерживаемые форматы: PDF, DOCX, PNG, JPEG '
            },
        ] 
    );
  return (
    <form className={`${containerClass} form`}>
        <Formfield comment={formFields[0].comment}>
            <TextInput fieldData={formFields[0]}></TextInput>
        </Formfield>
        <Formfield comment={formFields[1].comment}>
            <TextInput fieldData={formFields[1]}></TextInput>
        </Formfield>
        <Formfield comment={formFields[2].comment}>
            <FormSelect fieldData={formFields[2]}></FormSelect>
        </Formfield>
        <Formfield comment={formFields[3].comment}>
            <TextInput fieldData={formFields[3]}></TextInput>
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
