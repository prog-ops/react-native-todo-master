
import React, { useState } from 'react';
import { Text, View, TouchableHighlight, Alert } from 'react-native';
import styles from '../styles/styles';
import ToDoList from './ToDoList';

const ToDoContainer = ({ navigation }) => {
    const [items, setItems] = useState([
        {txt: 'Learn react native', complete: false},
        {txt: 'Make a to-do app', complete: true}
    ]);

    const deleteItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    const updateItem = (item, index) => {
        const newItems = [...items];
        if (typeof index !== 'undefined' && index !== null) {
            newItems[index] = item;
        }
        else {
            newItems.push(item);
        }
        setItems(newItems);
    };

    const openItem = (rowData, rowID) => {
        navigation.navigate('Edit', {
            item: rowData,
            id: rowID,
            update: updateItem
        });
    };

    const alertMenu = (rowData, rowID) => {
        Alert.alert(
            'Quick Menu',
            null,
            [
                {text: 'Delete', onPress: () => deleteItem(rowID)},
                {text: 'Edit', onPress: () => openItem(rowData, rowID)},
                {text: 'Cancel', style: 'cancel'}
            ]
        );
    };

    return (
        <View style={{flex:1, backgroundColor: 'white'}}>
            <ToDoList
                items={items}
                onPressItem={openItem}
                onLongPressItem={alertMenu}/>
            <TouchableHighlight
                style={[styles.button, styles.newButton]}
                underlayColor='#99d9f4'
                onPress={() => openItem(null, null)}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableHighlight>
        </View>
    );
};

export default ToDoContainer;
