import { UserForm } from '../utils';

interface ReviewType {
  formValues: UserForm;
}

function Review({formValues}: ReviewType) {
    const {firstName, lastName, age} = formValues;
  return (
    <div>
      <p>First Name:  {firstName} </p> <br/>
      <p>Last Name: {lastName}</p> <br/>
      <p>Age: {age}</p><br/>
    </div>
  )
}

export {Review}
