import React, { Component } from 'react';
import { Text, View,Image,StyleSheet,SafeAreaView,Platform,StatusBar } from 'react-native';

export default class Feed extends Component {
    render() {
        return (
            <View style={styles.feed}>
                <SafeAreaView style={styles.droidSafeArea/>

                
                <Text>Feeds</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    feed:{
        flex: 1,
        
    },
    droidSafeArea:{

    })
}