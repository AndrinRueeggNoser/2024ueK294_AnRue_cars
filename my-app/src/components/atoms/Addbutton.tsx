import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const AddButton = () => {
    return (
        <>
            <Button
                component={Link}
                to={`/add/`}
                onClick={() => console.log('Button clicked!')}
                style={{ position: 'fixed', top: 0 }}
            >
                Add
            </Button>
        </>
    );
};

export default AddButton;
