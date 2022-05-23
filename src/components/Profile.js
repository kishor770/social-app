import React from 'react';
import Edit from './Edit';
import MyProfile from './MyProfile';

export default class UserDashboard extends React.Component {
    constructor(props){
        super(props);
        this.state={enableEdit:false}
       this.enableEditComponent=this.enableEditComponent.bind(this);

    }
    enableEditComponent(){
        this.setState({enableEdit:!this.state.enableEdit})
    }
    
   
    render(){
        if(this.state.enableEdit==false){
            return(
                <>
                <button onClick={this.enableEditComponent}>edit Profile</button>
                <MyProfile/>
                </>
            );
        }
        else{
            return(
                <>
                <button onClick={this.enableEditComponent}>view Profile</button>
                <Edit/>
                </>
            );

        }
        }
    }