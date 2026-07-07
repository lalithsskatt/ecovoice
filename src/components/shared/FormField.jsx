import TextInput from './TextInput'
import TextArea from './TextArea'

function FormField({ type = 'text', ...props }) {
  if (type === 'textarea') {
    return <TextArea {...props} />
  }

  return <TextInput type={type} {...props} />
}

export default FormField
