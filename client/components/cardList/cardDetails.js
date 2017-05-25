import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Badge from 'material-ui/Badge';
import { hashHistory } from 'react-router';
import cookie from 'react-cookie';

class CardDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: this.props.card,
            likes: 0 | this.props.likedPosts.get(this.props.card.id),
            dislikes: 0 | this.props.dislikedPosts.get(this.props.card.id),
            bookmarked: false | this.props.bookmarkedPosts.get(this.props.card.id),
        }
    }
    update(text, event) {
        event.stopPropagation();
        if (text === "like") {
            this.props.likes(this.props.card.id, this.state.likes + 1);
            this.setState({ likes: this.state.likes + 1 });
        }
        else if (text === 'dislike') {
            this.props.dislikes(this.props.card.id, this.state.dislikes + 1);
            this.setState({ dislikes: this.state.dislikes + 1 });
        }
        else if (text === 'bookmark') {
            this.props.bookmarked(this.props.card.id, !this.state.bookmarked);
            this.setState({ bookmarked: !this.state.bookmarked });
        }
    }
    details() {
        this.props.currentCard(this.props.card);
        cookie.save('currentCard', this.props.card);
        hashHistory.push(`/details/${this.props.card.id}`);
    }
    truncate(str) {
        return str.slice(0, 256) + "....";
    }
    render() {
        var description;
        let flag;
        let bm_flag;
        if(this.state.bookmarked)
        bm_flag=1;
        else
        bm_flag=0;
        if (this.props.card.body.length > 256) {
            flag = 1
            description = this.truncate(this.props.card.body);
        }
        else {
            flag = 0;
            description = this.props.card.body;
        }

        const styles = {
            bookmark: {
                marginBottom: 16,
                marginLeft: 15
            },
            card: {
                overflow: 'auto',
                height: 580,
                position: 'relative'
            },
            cardAction: {
                marginTop: '15px',
                position: 'absolute',
                bottom: '10px'
            },
            marked: {
                color: 'yellow'
            },
            unmarked: {
                color: 'black'
            }
        };
        return (
            <div className="col-xs-12">
                <Card
                    style={styles.card}
                    onClick={this.details.bind(this)}>
                    <h2>{this.state.card.title}</h2>
                    <img src={this.props.card.thumbnailUrl} width="50px" height="200px" className="cardImg col-xs-11" />
                    {(flag) ?
                        <CardText expandable={false} className="col-xs-12">
                            {description}
                            <a onClick={this.details.bind(this)}>Read More</a>
                        </CardText>
                        :
                        <CardText expandable={false} onClick={this.details.bind(this)} className="col-md-8 col-xs-12 col-sm-8 pull-right">
                            {description}
                        </CardText>
                    }
                    <CardActions style={styles.cardAction} className="cardAction">
                        <span>
                            <RaisedButton label="Like" primary={true} onClick={this.update.bind(this, "like")} />
                            <Badge
                                badgeContent={this.state.likes}
                                primary={true}
                            >
                            </Badge>
                        </span>
                        <span>
                            <RaisedButton label="Dislike" secondary={true} onClick={this.update.bind(this, "dislike")} />
                            <Badge
                                badgeContent={this.state.dislikes}
                                secondary={true}
                            >
                            </Badge>
                        </span>
                        <span>
                            {(bm_flag) ? <FlatButton label="Bookmark" onClick={this.update.bind(this, "bookmark")}><span className="glyphicon glyphicon-bookmark pull-right" style={styles.marked}></span></FlatButton>
                            :
                            <FlatButton label="Bookmark" onClick={this.update.bind(this, "bookmark")}><span className="glyphicon glyphicon-bookmark pull-right" style={styles.unmarked}></span></FlatButton>
                            }
                        </span>
                    </CardActions>


                </Card>
                <br />
            </div>)
    }
}

export default CardDetails;