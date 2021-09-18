import { Spinner } from "react-bootstrap"; 
import PropTypes from 'prop-types';

/**
 * Show a loading spinner during during ongoing aynchronous operation
 *
 */

const Loader = (props) => {

    const { size, variant } = props;
    return (
        <>
            <Spinner animation="border" role="status" size={size} variant={variant}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </>
    );
}

Loader.propTypes = {
    size: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired
};

export default Loader;

