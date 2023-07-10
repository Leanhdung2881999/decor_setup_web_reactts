import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Button, Container, Image, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../SignupForm/SignupForm";

const Header: React.FC = () => {
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    const navigateHome = () => {
        navigate("/");
    };

    const handleShowLogin = () => setShowLogin(!showLogin);
    const handleShowSignUp = () => setShowSignUp(!showSignUp);

    const switchFeature = () => {
        handleShowLogin();
        handleShowSignUp();
    };

    const onLoginFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleShowLogin();
    };

    const onSignUpFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleShowSignUp();
    };

    return (
        <div className="header row p-4">
            <div className="col d-flex gap-4">
                <Image
                    width={50}
                    height={50}
                    roundedCircle
                    src={require("../../assets/images/logo.png")}
                />
                <Button
                    variant="dark"
                    className="rounded-pill px-4"
                    onClick={navigateHome}
                >
                    Home
                </Button>
            </div>
            <SearchBar className="col" />
            <div className="col">
                <div className="d-flex justify-content-end">
                    <Button
                        variant="danger"
                        className="rounded-pill"
                        onClick={handleShowLogin}
                    >
                        Log in
                    </Button>
                    <Button
                        className="signUp rounded-pill"
                        onClick={handleShowSignUp}
                    >
                        Sign up
                    </Button>
                    <Image
                        className="avatar"
                        alt="avatar"
                        src={require(`../../assets/images/avatar1.png`)}
                        rounded
                    />
                </div>
            </div>
            <Modal
                show={showLogin}
                onHide={handleShowLogin}
                contentClassName="custom_modal"
            >
                <Modal.Body>
                    <LoginForm
                        onSubmit={onLoginFormSubmit}
                        handleClose={handleShowLogin}
                        switchSignUp={switchFeature}
                    />
                </Modal.Body>
            </Modal>

            <Modal
                show={showSignUp}
                onHide={handleShowSignUp}
                contentClassName="custom_modal"
            >
                <Modal.Body>
                    <SignupForm
                        onSubmit={onSignUpFormSubmit}
                        handleClose={handleShowSignUp}
                        switchLogIn={switchFeature}
                    />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Header;
