import { Container, Button } from "react-bootstrap";
import "../../stylesheets/devices.scss";
import * as authService from "../../services/auth.service";

const Devices = () => {
      const handleLogout = async (values) => {
        try {
          authService.logout();
          window.location.reload();
        } catch (error) {}
      };

    return (
        <Container className="text-center bg-orange min-vh-100 d-flex align-items-center" fluid>

            <div className="bottom-nav text-center bg-primary bg-opacity-25 py-3">
                <Button
                    variant="light"
                    className="rounded-1 px-5 mx-2"
                >
                    <small>NOTIFY</small>
                </Button>
                <Button
                    variant="primary"
                    className="rounded-1 px-5 mx-2"
                    onClick={handleLogout}
                >
                    <small>LOG OUT</small>
                </Button>
            </div>

        </Container>
    );
}

export default Devices;
