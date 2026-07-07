import { useState } from 'react'

function validateField(value, rules) {
  if (!rules) return ''
  if (rules.required && !value.trim()) {
    return 'This field is required.'
  }
  if (rules.email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (value && !pattern.test(value)) {
      return 'Enter a valid email address.'
    }
  }
  if (rules.minLength && value.length < rules.minLength) {
    return `Must be at least ${rules.minLength} characters.`
  }
  return ''
}

function useFormValidation(initialValues, validationRules) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(Object.keys(initialValues).reduce((acc, key) => ({ ...acc, [key]: '' }), {}))

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: validateField(value, validationRules[name]) }))
  }

  const handleSubmit = (submitFn) => (event) => {
    event.preventDefault()
    const nextErrors = Object.keys(values).reduce((acc, key) => ({
      ...acc,
      [key]: validateField(values[key], validationRules[key]),
    }), {})
    setErrors(nextErrors)

    const hasError = Object.values(nextErrors).some(Boolean)
    if (!hasError) {
      submitFn(values)
    }
  }

  return [values, errors, handleChange, handleSubmit]
}

export default useFormValidation
