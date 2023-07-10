import React from "react";
import { Container, Image, Button, Card, Figure } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FiShare2, FiLink2, FiMenu } from "react-icons/fi";
import "./styles.scss";
import HomePage from "../HomePage/HomePage";

const DetailPost: React.FC = () => {
    const params = useParams();
    return (
        <div>
            <Container>
                <div className="row post shadow rounded">
                    <div className="col patial m-0 p-0">
                        <Image
                            className="image_detail"
                            alt={params.postId}
                            src={require(`../../assets/images/photo${params.postId}.jpg`)}
                            rounded
                        />
                    </div>
                    <div className="col patial p-4 p-0 overflow-scroll">
                        <div className="d-flex justify-content-between mb-4">
                            <div>
                                <FiMenu />
                                <FiShare2 />
                                <FiLink2 />
                            </div>
                            <div>
                                <Button
                                    variant="danger"
                                    className="rounded-pill"
                                >
                                    Save
                                </Button>
                            </div>
                        </div>
                        <h2>Travelious - Travel Website | Web Design</h2>
                        <p>
                            ✦ MADE TO ORDER AND NOT SHIP READY. Please be aware
                            of the estimated arrival date, located within the
                            listing, before purchasing. There are no expedited
                            or rush shipping available. We do our best to ship
                            as quickly as possible, however, we cannot ship
                            immediately as the panel is made to order. Please
                            ensure your shipping address is correct, as this is
                            where your order will be shipped to via USPS with a
                            tracking number. ✦ x1 Digitally printed 100% cotton
                            small fabric panel for quilting / sewing p
                        </p>
                        <Card.Subtitle>
                            The items shown in this picture (2):
                        </Card.Subtitle>
                        <div className="row items gap-2 mt-4 d-flex justify-content-center">
                            {Array.from(Array(15).keys()).map(
                                (value, index) => {
                                    return (
                                        <a
                                            href="https://google.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="col-md-4 col-xxl-3"
                                        >
                                            <Figure>
                                                <Figure.Image
                                                    className="item_image"
                                                    alt={params.postId}
                                                    src={require(`../../assets/images/photo${params.postId}.jpg`)}
                                                    rounded
                                                />
                                                <Figure.Caption>
                                                    The items {index + 1}
                                                </Figure.Caption>
                                            </Figure>
                                        </a>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
                {/* <div className="test">Hello</div> */}
            </Container>
            <div className="mt-5">
                <h4 className="text-center">More like this</h4>
                <div>
                    <HomePage />
                </div>
            </div>
        </div>
    );
};

export default DetailPost;
