import React from 'react';
import {View, Button} from 'react-native';

function HomeScreen({navigation}) {
    return (
      <View>
        <Button 
            title="Detail열기"
            onPress={() => navigation.push('Detail')}
        />
      </View>
    );
}

export default HomeScreen;