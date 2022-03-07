
import React, {Component} from 'react';
import TextInput from './Form/TextInput.jsx'
import Formfield from './Form/Formfield.jsx'
import FormSelect from './Form/FormSelect.jsx'
import '../css/form.css'

class contactUs extends Component{
    // технологии должны выводится из api
    constructor(){
        super();
        this.state = {
            formFields: [
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
        }
    }
  
    render() {
        const {formFields} = this.state;
        return(
            <section className="split-middle-flex contact-us">
                <div className='contact-us__text'>
                    <h2 className=''>Вместе, мы сможем превратить идею в реальность!</h2>
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

                </form>
            </section>
        );
  }
}

export default contactUs;