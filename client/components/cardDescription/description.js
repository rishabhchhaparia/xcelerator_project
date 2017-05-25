import React from 'react';
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Badge from 'material-ui/Badge';
import cookie from 'react-cookie';

class CardDescription extends React.Component {
    constructor(props) {
        super(props);
        var currCard= cookie.load('currentCard');
        this.state = {
            card: currCard,
            likes: 0 | this.props.likedPosts.get(currCard.id),
            dislikes: 0 | this.props.dislikedPosts.get(currCard.id),
            bookmarked: false | this.props.bookmarkedPosts.get(currCard.id)
        }
    }

    change(message) {
        if (message === "like") {
            this.props.likes(this.state.card.id, this.state.likes + 1);
            this.setState({ likes: this.state.likes + 1 });
        }
        else if (message === 'dislike') {
            this.props.dislikes(this.state.card.id, this.state.dislikes + 1);
            this.setState({ dislikes: this.state.dislikes + 1 });
        }
        else if (message === 'bookmark') {
            this.props.bookmarked(this.state.card.id, !this.state.bookmarked);
            this.setState({ bookmarked: !this.state.bookmarked });
        }
    }
    render() {
        const styles = {
            overflow: 'auto',
            height: 500,
            margin: 20,
            padding: 20,
            textAlign: 'center',
            position: 'relative',
        };

        return (
            <div className="container">
                <h3>{this.state.card.title}</h3>
                    <img src={this.state.card.thumbnailUrl} width="150" height="250" className="col-xs-12 col-sm-4" alt="" />
                    <p className="cardDescription col-xs-12 col-sm-8">
                        {this.state.card.body}
                    </p>
                    <CardActions className="col-md-offset-6 cardAction">
                        <FlatButton label="Like" primary={true} onClick={this.change.bind(this, "like")} />
                        <Badge
                            badgeContent={this.state.likes}
                            primary={true}
                        >
                        </Badge>

                        <FlatButton label="Dislike" secondary={true} onClick={this.change.bind(this, "dislike")} />
                        <Badge
                            badgeContent={this.state.dislikes}
                            secondary={true}
                        >
                        </Badge>

                    </CardActions>
            </div>
        );
    }
}

export default CardDescription;