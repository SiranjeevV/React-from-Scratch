import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: "xxxxxxxxx",
                id: "00000",
                avatar_url: "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
            }
        }
    }
    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/siranjeevv');
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
    }
    componentDidUpdate() {
        console.log('updated');
    }
    render() {
        const { login, id, avatar_url } = this.state.userInfo;
        return (<div className="userCard">
            <img src={avatar_url} style={{
                width: "100px",
                height: "100px"
            }} />

            <h3>name: {login}</h3>
            <h4>id: {id}</h4>


        </div>)
    }
}
export default UserClass;