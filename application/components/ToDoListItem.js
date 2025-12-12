
import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from '../styles/styles';

const ToDoListItem = ({ item, onPress, onLongPress }) => {
    return (
        <View>
            <TouchableHighlight
                onPress={onPress}
                onLongPress={onLongPress}
                underlayColor="#DDDDDD"
            >
                <View style={[styles.container, {flexDirection: 'row', alignItems: 'center', height: 60}]}>
                    <Text style={[styles.txt, item.complete && styles.completed]}>
                        {item.txt}
                    </Text>
                </View>
            </TouchableHighlight>
            <View style={styles.hr}/>
        </View>
    );
};

export default ToDoListItem;
