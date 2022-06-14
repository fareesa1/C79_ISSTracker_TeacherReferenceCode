import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import axios from "axios";

export default class MeteorScreen extends Component {
  
    render() {
        
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text>Meteor Screen!</Text>
                </View>
            )
        }
    }
}
