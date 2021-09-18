import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Loader from "../../components/loader";
import "../../stylesheets/devices.scss";
import * as devicesApi from "../../apis/devices-api";
import * as notifyApi from "../../apis/notify-api";
import * as authService from "../../services/auth.service";

const Devices = () => {

    const [numberOfDevices, setNumberOfDevices] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const apiCallScheduler = setInterval(fetchDevicesList, 5000);

        return () => {
            clearInterval(apiCallScheduler);
        }
    });

    /**
   * Has effect on init
   */
    useEffect(() => {
        fetchDevicesList();
    }, []);

    const fetchDevicesList = async () => {

        try {
            setLoading(true);
            const response = await devicesApi.getDevices();
            const devicesList = response.data.devices;
            setNumberOfDevices(devicesList.length);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    const handleNotify = async () => {
        try {
            setLoading(true);
            await notifyApi.notify();
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            authService.logout();
            window.location.reload();
        } catch (error) { }
    };

    return (
        <Container className="text-center bg-orange min-vh-100 container-fluid d-flex justify-content-center align-content-center flex-wrap" fluid>
            <div className="text-center">
                <h1 className="text-white">{numberOfDevices}</h1>
                <p className="text-white fw-bold mb-0">DEVICES</p>
                <p className="text-white fw-bold">ONLINE</p>
            </div>

            <div className="bottom-nav text-center bg-primary bg-opacity-25 py-3">
                <Button
                    variant="light"
                    className="rounded-1 px-5 mx-2"
                    onClick={handleNotify}
                    disabled={loading}
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
