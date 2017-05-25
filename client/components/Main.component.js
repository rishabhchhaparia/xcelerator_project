import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Main extends React.Component{


    render(){
        return (
            <MuiThemeProvider>
        <div>
           
            {React.cloneElement(this.props.children,this.props)}
        </div>
        </MuiThemeProvider>
        )
    }
};


export default Main;