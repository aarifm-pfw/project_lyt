import { TextField, FormControl } from '@mui/material';
import { UserForm, UserErrorForm } from '../utils';

interface NameFormType {
    formValues: UserForm;
    errors: UserErrorForm;
    setFormValues: Function;
}

function NameForm(props: NameFormType) {
    const { formValues, setFormValues, errors } = props;

    return (
        <>
            <FormControl fullWidth margin="normal" error={!!errors.firstName}>
                <TextField
                    required
                    helperText={errors.firstName}
                    id="demo-helper-text-aligned"
                    label="First Name"
                    value={formValues.firstName}
                    onChange={(e) => setFormValues((prev: UserForm) => ({ ...prev, firstName: e.target.value }))}
                    error={!!errors.firstName}
                />
            </FormControl>

            <FormControl fullWidth margin="normal" error={!!errors.lastName}>
                <TextField
                    required
                    helperText={errors.lastName}
                    id="demo-helper-text-aligned"
                    label="Last Name"
                    value={formValues.lastName}
                    onChange={(e) => setFormValues((prev: UserForm) => ({ ...prev, lastName: e.target.value }))}
                    error={!!errors.lastName}
                />
            </FormControl>
        </>

    )
}

export { NameForm }
