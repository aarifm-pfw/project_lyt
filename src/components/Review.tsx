import { UserForm } from '../utils';

interface ReviewType {
  formValues: UserForm;
}

function Review({formValues}: ReviewType) {
    const {firstName, lastName, age} = formValues;
  return (
    <div>
      {firstName}
      {lastName}
      <p>{age}</p>
    </div>
  )
}

export {Review}
