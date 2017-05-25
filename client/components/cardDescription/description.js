import React from 'react';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Badge from 'material-ui/Badge';
import cookie from 'react-cookie';

class CardDescription extends React.Component {
    constructor(props) {
        super(props);
        var currCard = cookie.load('currentCard');
        this.state = {
            card: currCard,
            likes: 0 | this.props.likedPosts.get(currCard.id),
            dislikes: 0 | this.props.dislikedPosts.get(currCard.id),
            bookmarked: false | this.props.bookmarkedPosts.get(currCard.id),
        }
    }

    update(text) {
        if (text === "like") {
            this.props.likes(this.state.card.id, this.state.likes + 1);
            this.setState({ likes: this.state.likes + 1 });
        }
        else if (text === 'dislike') {
            this.props.dislikes(this.state.card.id, this.state.dislikes + 1);
            this.setState({ dislikes: this.state.dislikes + 1 });
        }
        else if (text === 'bookmark') {
            this.props.bookmarked(this.state.card.id, !this.state.bookmarked);
            this.setState({ bookmarked: !this.state.bookmarked });
        }
    }
    render() {
        let bm_flag;
        if(this.state.bookmarked)
        bm_flag=1;
        else
        bm_flag=0;
        const styles = {
            marginTop: -50,
            marked: {
                color: 'yellow'
            },
            unmarked: {
                color: 'black'
            }
        };

        return (
            <div className="container">
                <h1>{this.state.card.title}</h1>
                <img src={this.state.card.thumbnailUrl} width="150" height="250" className="col-xs-12 col-sm-4" alt="" />
                <p className="cardDescription col-xs-12 col-sm-8">
                    {this.state.card.body}
                </p>
                <CardActions className="col-md-offset-6 cardAction">
                    <RaisedButton label="Like" primary={true} onClick={this.update.bind(this, "like")} />
                    <Badge
                        badgeContent={this.state.likes}
                        primary={true}
                    >
                    </Badge>

                    <RaisedButton label="Dislike" secondary={true} onClick={this.update.bind(this, "dislike")} />
                    <Badge
                        badgeContent={this.state.dislikes}
                        secondary={true}
                    >
                    </Badge>
                   {(bm_flag) ? <FlatButton label="Bookmarked" onClick={this.update.bind(this, "bookmark")}><span className="glyphicon glyphicon-bookmark pull-right" style={styles.marked}></span></FlatButton>
                            :
                            <FlatButton label="Bookmark" onClick={this.update.bind(this, "bookmark")}><span className="glyphicon glyphicon-bookmark pull-right" style={styles.unmarked}></span></FlatButton>
                            }
                </CardActions>
            </div>
        );
    }
}

export default CardDescription;