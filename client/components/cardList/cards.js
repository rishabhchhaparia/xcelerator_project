import React from 'react';
import ReactDOM from 'react-dom';
import CardDetails from '../../components/cardList/cardDetails';
import * as posts from '../../data/index';

class Cards extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getCards(posts.getData);
        console.log("getCards ",this.props.getCards(posts.getData));
    }
    render() {
        var data;
            data = this.props.getData.map((item, index) => {
                return <CardDetails card={item} key={Math.random() * index} {...this.props}></CardDetails>
            })
        if (this.props.pageload)
            return (
                <h1>Loading...</h1>
            )
        else return (
            <div className="container">
                {data}
            </div>
        )
    }

}

export default Cards;
