import React from 'react'
import Dropzone from 'react-dropzone-uploader'

export default function fileInput({fieldData}) {

    const {title, onChange} = fieldData;
    return (
        <Dropzone
          // getUploadParams={getUploadParams}
          onChangeStatus={()=>{onChange()}}
          aria-label={title}
          inputContent={title}
          inputWithFilesContent='Файл прикреплён'
          // onSubmit={onSubmit}
          accept="image/*"
        />
    )
  
}