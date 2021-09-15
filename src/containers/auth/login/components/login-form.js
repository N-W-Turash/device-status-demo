import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Alert } from 'react-bootstrap';
import Loader from "../../../../components/loader";
import { validationSchema, initialFormValues } from "../../../../forms/login";

const LoginForm = (props) => {

    const { loading, handleLogin, fieldError } = props;

    return (
        <>
            <Formik
                initialValues={initialFormValues}
                validationSchema={validationSchema}
                onSubmit={values => {
                    handleLogin(values);
                }}
            >
                {() => (
                    <Form className="mt-4">
                        <div className="form-floating mb-2">
                            <Field
                                type="email"
                                id="email"
                                className="form-control bg-light"
                                name="email"
                                placeholder="Email Address"
                            />
                            <label for="email">Email</label>
                            <ErrorMessage
                                name="email"
                                render={msg => <p className="text-start mt-2 text-danger">{msg}</p>}
                            />
                        </div>
                        <div className="form-floating mb-4">
                            <Field
                                type="password"
                                id="password"
                                className="form-control bg-light"
                                name="password"
                                placeholder="password"
                            />
                            <label for="password">Password</label>
                            <ErrorMessage
                                name="password"
                                render={msg => <p className="text-start mt-2 text-danger">{msg}</p>}
                            />
                        </div>
                        <div className="mb-4">
                            <Button
                                type="submit"
                                variant="secondary"
                                className="rounded-1 px-5 py-3"
                                disabled={loading}
                            >
                                {loading ? <Loader size="sm" /> : <small>LOG IN</small>}
                            </Button>
                        </div>

                    </Form>
                )}
            </Formik>
            {
                fieldError && (<Alert variant={"danger"}>
                    {fieldError}
                </Alert>)
            }
        </>
    );
}

export default LoginForm;
