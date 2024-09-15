import { useState } from 'react'
import { Button, Box, Modal } from '@mui/material';
import { NameForm, AgeForm, Review, Footer } from '../components';
import { views } from '../constants';
import { UserForm, UserErrorForm } from '../utils';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function WorkflowModal() {
    const [open, setOpen] = useState(false);
    const [currentView, setCurrentView] = useState(views[0]);
    const [formValues, setFormValues] = useState<UserForm>({
        firstName: '',
        lastName: '',
        age: 0
    });
    const [errors, setErrors] = useState<UserErrorForm>({
        firstName: '',
        lastName: '',
        age: ''
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = () => {
        localStorage.setItem("User Data", JSON.stringify(formValues))
        handleClose();
    };

    const validate = () => {
        let valid = true;
        const newErrors: UserErrorForm = { firstName: '', lastName: '', age: '' };

        if (currentView == 'name') {
            // firstName validation
            if (!formValues.firstName) {
                newErrors.firstName = 'First name is required';
                valid = false;
            }

            // lastName validation
            if (!formValues.lastName) {
                newErrors.lastName = 'Last name is required';
                valid = false;
            }
        }

        if (currentView == 'age') {
            // age validation
            if (!formValues.age) {
                newErrors.age = 'Age is required';
                valid = false;
            }
        }

        setErrors(newErrors);
        return valid;
    };


    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {currentView == 'name' && <NameForm formValues={formValues} setFormValues={setFormValues} errors={errors} />}
                    {currentView == 'age' && <AgeForm age={formValues.age} setFormValues={setFormValues} errors={errors} />}
                    {currentView == 'review' && <Review formValues={formValues} />}
                    <Footer currentView={currentView} setCurrentView={setCurrentView} handleFinish={handleSubmit} validate={validate} />
                </Box>
            </Modal>

        </div>
    )
}

export default WorkflowModal;