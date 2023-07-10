import React from "react";
import StackGrid, { transitions, easings } from "react-stack-grid";
import "./styles.scss";
import { Card, Figure, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const transition = transitions.scaleDown;

const HomePage: React.FC = () => {
    return (
        <StackGrid
            monitorImagesLoaded
            columnWidth={300}
            duration={600}
            gutterWidth={15}
            gutterHeight={15}
            easing={easings.cubicOut}
            appearDelay={60}
            appear={transition.appear}
            appeared={transition.appeared}
            enter={transition.enter}
            entered={transition.entered}
            leaved={transition.leaved}
        >
            {Array.from(Array(21).keys()).map((index, key) => (
                <Link to={`/post/${index + 1}`} key={key} className="item_post">
                    <Figure className="figure">
                        <Figure.Image
                            className="image"
                            alt={key.toString()}
                            src={require(`../../assets/images/photo${
                                index + 1
                            }.jpg`)}
                            rounded
                        />
                        <Card.Subtitle>
                            Travelious - Travel Website | Web Design
                        </Card.Subtitle>
                        <div className="d-flex align-items-center gap-2 mt-2 mb-4">
                            <Image
                                width={32}
                                height={32}
                                src={require(`../../assets/images/photo${
                                    index + 1
                                }.jpg`)}
                                roundedCircle
                            />
                            <Card.Text>✨ThetaCursed🎭</Card.Text>
                        </div>
                    </Figure>
                </Link>
            ))}
        </StackGrid>
    );
};

export default HomePage;
