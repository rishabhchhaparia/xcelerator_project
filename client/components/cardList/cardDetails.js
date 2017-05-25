import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
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
    change(message, event) {
        event.stopPropagation();
        if (message === "like") {
            this.props.likes(this.props.card.id, this.state.likes + 1);
            this.setState({ likes: this.state.likes + 1 });
        }
        else if (message === 'dislike') {
            this.props.dislikes(this.props.card.id, this.state.dislikes + 1);
            this.setState({ dislikes: this.state.dislikes + 1 });
        }
        else if (message === 'bookmark') {
            this.props.bookmarked(this.props.card.id, !this.state.bookmarked);
            this.setState({ bookmarked: !this.state.bookmarked });
        }
    }
    details() {
        this.props.currentCard(this.props.card);
        cookie.save('currentCard',this.props.card);
        hashHistory.push(`/details/${this.props.card.id}`);
    }
    truncate(str) {
        return str.slice(0, 256) + "....";
    }
    render() {
        var description;
        let flag;
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
                marginLeft:15
            },
            card:{
                overflow:'auto',
                height:580,
                position:'relative'
            },
            cardAction:{
                marginTop:'15px',
                position:'absolute',
                bottom:'10px'
            }
        };
        return (
            <div className="col-xs-12">
                <Card
                    style={styles.card}
                    onClick={this.details.bind(this)}>
                    <CardHeader
                        onClick={this.details.bind(this)}
                        title={this.state.card.title}
                        actAsExpander={false}
                        showExpandableButton={false}
                    />
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
                        <FlatButton label="Like" primary={true} onClick={this.change.bind(this, "like")} />
                        <Badge
                            badgeContent={this.state.likes}
                            primary={true}
                        >
                        </Badge>
                        </span>
                        <span>
                        <FlatButton label="Dislike" secondary={true} onClick={this.change.bind(this, "dislike")} />
                        <Badge
                            badgeContent={this.state.dislikes}
                            secondary={true}
                        >
                        </Badge>
                        </span>
                    </CardActions>


                </Card>
                <br />
            </div>)
    }
}

export default CardDetails;