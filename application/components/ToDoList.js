
import React from 'react';
import { FlatList } from 'react-native';
import styles from '../styles/styles';
import ToDoListItem from './ToDoListItem';

const ToDoList = ({ items, onPressItem, onLongPressItem }) => {
    return (
        <FlatList
            style={styles.listView}
            data={items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <ToDoListItem
                    item={item}
                    onPress={() => onPressItem(item, index)}
                    onLongPress={() => onLongPressItem(item, index)}
                />
            )}
        />
    );
};

export default ToDoList;
