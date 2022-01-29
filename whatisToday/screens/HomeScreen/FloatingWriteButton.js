import React from 'react';
import {Platform, Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Ionicons } from '@expo/vector-icons';

function FloatingWriteButton(){
    return(
        <View style={style.wrapper}>
            <Pressable
                style={({pressed}) => [
                    styles.button,
                    Platform.OS === 'ios' && {
                        opacity: pressed? 0.6 : 1,
                    },
                ]}
                android_ripple={{color: 'white'}}>
                <Ionicons name="add" size={24} color="black" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        width: 56,
        height: 56,
        borderRadius: 28,

        shadowColor: '#4d4d4d',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,

        elevation: 5,
        overflow: Platform.select({android: 'hidden'}),
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#009688',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icons: {
        color: 'white',
    },
});

export default FloatingWriteButton;
