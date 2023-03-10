import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";
import AddTodo from './containers/AddTodo'
import VisibleTodos from './containers/VisibleTodos'
import Heading from "./components/Heading";
class TodoApp extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Heading/>
                <AddTodo />

                <View>
                    <VisibleTodos />
                </View>
            </View>
        );
    }
}
export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20

    }
});