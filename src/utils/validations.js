export const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } 
  if (!values.date) {
    errors.date = 'Required'
  } 
  if (!values.status) {
    errors.status = 'Required'
  } 
  return errors
}
