import { ErrorMessage, Field } from 'formik'
import React from 'react'
import renderError from '../../../utils/renderError'

const Input2 = () => {
  return (
    <div>
      <h2>Input2</h2>
      <Field type="text" name="apellido" />
      <ErrorMessage name="apellido" render={renderError} />
    </div>
  )
}

export default Input2