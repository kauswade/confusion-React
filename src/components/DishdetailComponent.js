import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            )
        }
    }

    renderComments(comments) {
        if (comments != null) {
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        <li>
                            {comments.map((comment) => {
                                return (
                                    <div>
                                        {comment.comment}<br /><br />
                                        -- {comment.author}, {comment.date}
                                        <br /><br />
                                    </div>
                                );
                            })}
                        </li>
                    </ul>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">{this.renderDish(this.props.dish)}</div>
                <div className="col-12 col-md-5 m-1">{this.renderComments(this.props.dish.comments)}</div>
            </div>
        );
    }
}

export default DishDetail;