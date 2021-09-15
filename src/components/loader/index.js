import { Spinner } from "react-bootstrap";  

/**
 * Show a loading spinner during during ongoing aynchronous operation
 *
 */

const Loader = (props) => {

    const { size } = props;
    return (
        <>
            <Spinner animation="border" role="status" size={size}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </>
    );
}

export default Loader;
