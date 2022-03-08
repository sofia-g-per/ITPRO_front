import { useState } from 'react'

import TextInput from './Form/TextInput.jsx'
import Formfield from './Form/Formfield.jsx'
import FormSelect from './Form/FormSelect.jsx'
import FileInput from './Form/FileInput.jsx'
import BasicButton from './UI/BasicButton.jsx'
import '../css/form.css'
import '../css/contact-us.css'

function ContactUs() {
    // технологии должны выводится из api

    const [formFields, updateFormFields] = useState(   
        [
            {
                title: 'Имя',
                value: '',
            },
            {
                title: 'Почта',
                value: '',
            },
            {
                title: 'Технология',
                value: '',
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
            },
            {
                title: 'Загрузить описание проекта',
                value: '',
                comment: 'Поддерживаемые форматы: PDF, DOCX, PNG, JPEG '
            },
        ] 
    );
    return(
        <section className="split-middle-flex contact-us">
            <div className='contact-us__text-container align-last-to-bottom'>
                <h2 className='secondary-heading'>Вместе, мы сможем превратить идею в реальность!</h2>
                <a href="mailto:info@itpro.moscow">info@itpro.moscow</a>
            </div>
            <form className='contact-us__form form'>
                <Formfield>
                    <TextInput fieldData={formFields[0]}></TextInput>
                </Formfield>
                <Formfield>
                    <TextInput fieldData={formFields[1]}></TextInput>
                </Formfield>
                <Formfield>
                    <FormSelect fieldData={formFields[2]}></FormSelect>
                </Formfield>
                <Formfield>
                    <TextInput fieldData={formFields[3]}></TextInput>
                </Formfield>
                <Formfield>
                    <FileInput fieldData={formFields[4]}></FileInput>
                </Formfield>
                <BasicButton title="Отправить"></BasicButton>
            </form>
        </section>
    );
}

export default ContactUs;