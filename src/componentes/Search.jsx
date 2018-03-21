import React from 'react';
import { TextField } from 'material-ui';
import ActionSearch from 'material-ui/svg-icons/action/search';

export default class Search extends React.Component {
    render() {
        return (
            <div>
            <div style={{borderColor: 'white', borderStyle: 'solid'}}>
                <ActionSearch style={iconStyles} color={'white'} />
                <TextField
                    hintText="Titulos, pessoas, gêneros"
                    underlineShow={false}
                />
            </div>
            </div>
        )
    }
}

const iconStyles = {
    width: 57,
    paddingTop: 12,
    height: 20
};
