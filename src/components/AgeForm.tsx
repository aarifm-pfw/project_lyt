import { FormControl, TextField } from '@mui/material'
import { UserForm, UserErrorForm } from '../utils';

interface AgeType {
    age: number,
    errors: UserErrorForm;
    setFormValues: Function,
}

function AgeForm(props: AgeType) {
    const { age, setFormValues, errors } = props;
    return (
        <FormControl fullWidth margin="normal" error={!!errors.age}>
            <TextField
                required
                helperText={errors.age}
                id="demo-helper-text-aligned"
                label="Age Name"
                type="number"
                value={age}
                onChange={(e) => setFormValues((prev: UserForm) => ({ ...prev, age: e.target.value }))}
                error={!!errors.age}
            />
        </FormControl>
    )
}

export {AgeForm}
