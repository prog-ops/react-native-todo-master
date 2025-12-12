
import React, { useState, useEffect } from 'react';
import { View, TouchableHighlight, Text, TextInput } from 'react-native';
import styles from '../styles/styles';

const ToDoEdit = ({ route, navigation }) => {
    const { item, id, update } = route.params || {};
    const [txt, setTxt] = useState(item ? item.txt : '');
    const [complete, setComplete] = useState(item ? item.complete : false);

    const onUpdate = () => {
        if (txt) {
            update({ txt, complete }, id);
            navigation.goBack();
        }
    };

    useEffect(() => {
        navigation.setOptions({ title: item ? 'Edit Item' : 'New Item' });
    }, [navigation, item]);

    return (
        <View style={styles.todo}>
            <Text style={{fontSize: 16, marginBottom: 5, fontWeight: 'bold'}}>To-Do Item</Text>
            <TextInput
                style={styles.input}
                value={txt}
                onChangeText={setTxt}
                placeholder="enter a to do item here"
                autoFocus={true}
            />
            
            <TouchableHighlight
                style={[styles.button, styles.saveButton]}
                onPress={onUpdate}
                underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableHighlight>
        </View>
    );
};

export default ToDoEdit;
