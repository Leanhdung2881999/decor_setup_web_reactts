import React, { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { CgClose } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import "./styles.scss";

interface SignUp {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleClose: (e: React.MouseEvent) => void;
    switchLogIn: () => void;
}

const SignupForm: React.FC<SignUp> = ({
    onSubmit,
    handleClose,
    switchLogIn,
}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            <div className="d-flex justify-content-end">
                <CgClose className="my-0" onClick={(e) => handleClose(e)} />
            </div>
            <div className="d-flex justify-content-center">
                <Image
                    width={40}
                    height={40}
                    roundedCircle
                    src={require("../../assets/images/logo.png")}
                />
            </div>

            <h3 className="text-center py-2">Sign up to DecorSetup</h3>
            <div className="d-flex justify-content-center">
                <Form onSubmit={(e) => onSubmit(e)} className="form">
                    <Form.Group controlId="formBasicEmail">
                        <span className="title">Email</span>
                        <Form.Control
                            className="rounded-pill py-2"
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="py-2">
                        <span className="title">Password</span>
                        <Form.Control
                            className="rounded-pill py-2"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <div className="row mt-4 mb-2">
                        <Button
                            className="col rounded-pill mx-2"
                            variant="danger"
                            type="submit"
                        >
                            Sign Up
                        </Button>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="line"></div>
                        <div className="or">OR</div>
                        <div className="line"></div>
                    </div>
                    <div className="row mb-2">
                        <Button
                            className="col rounded-pill mx-2 d-flex d-flex justify-content-between align-items-center"
                            variant="outline-secondary"
                            type="submit"
                        >
                            <FcGoogle className="noneStyle" />
                            <span>Continue with Google</span>
                            <div />
                        </Button>
                    </div>
                    <div className="term pb-2">
                        By continuing, you agree to DecorSetup's{" "}
                        <span>
                            <a href="https://google.com">Terms of Service</a>
                        </span>{" "}
                        and acknowledge you've read our{" "}
                        <span>
                            <a href="https://google.com">Privacy Policy</a>
                        </span>
                        .
                    </div>
                    <div className="alreadyAMember">
                        Already a member?{" "}
                        <span onClick={switchLogIn}>Log in</span>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default SignupForm;
