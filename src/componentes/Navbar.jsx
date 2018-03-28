import React from 'react';
import { AppBar, Menu, MenuItem, Avatar } from 'material-ui';
import Search from './Search';

export default class Navbar extends React.Component {
    render() {
        return (
            <AppBar
                title={
                    <Menu>
                        <MenuItem primaryText="Minha Lista" style={{float: 'left', position:'relative'}}/>
                    </Menu>
                }
                style={{backgroundColor:'black', position: "fixed" }}
                //a
                iconElementLeft={
                    <img src='http://blog.queimadiaria.com/wp-content/uploads/2017/11/logo_queimadiaria_branca.png' className="App-logo" alt="logo" />}
            >
                <Search />
                <Avatar
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                />
            </AppBar>
        )
    }
}