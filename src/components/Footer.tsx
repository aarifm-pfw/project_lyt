import Button from '@mui/material/Button';
import { views } from '../constants';

type SetCurrentView = (view: string | ((prevView: string) => string)) => void;

interface FooterType {
    currentView: string,
    setCurrentView: SetCurrentView,
    handleFinish: () => void;
    validate: () => Boolean
}

function Footer(props: FooterType) {
    const { currentView, setCurrentView, handleFinish, validate } = props;
    const handleNext = () => {
        if(validate()){
            setCurrentView(prev => views[views.indexOf(prev) + 1])
        }
    }

    const handleBack = () => {
        setCurrentView(prev => views[views.indexOf(prev) - 1])
    }

    return (
        <>
            <Button variant="contained" onClick={handleBack} disabled={currentView == 'name'}>
                Back
            </Button>
            {currentView !== 'review' &&
                <Button onClick={handleNext}>
                    Next
                </Button>
            }
            {currentView == 'review' && <Button onClick={handleFinish}>
                Finish
            </Button>}
        </>
    )
}

export {Footer}
