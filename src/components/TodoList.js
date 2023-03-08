import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Ionicons } from '@expo/vector-icons'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
    <View style={{ marginHorizontal: 20 }}>
        {todos.map(todo =>
            <View style={{
                flexDirection: 'row',
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 10
            }}>
                <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                    <Text style={{
                            fontSize: 20,
                            height: 40,
                            padding: 5,
                            textDecorationLine: todo.completed ? 'line-through' : 'none'
                    }}>{todo.text}</Text>
                </TouchableOpacity>
                <Ionicons.Button 
                     name="md-trash" 
                     style={{ color: '#ff5733'}}
                     onPress={() => deleteTodo(todo.id)}
                /> 
            </View>
        )}
    </View>
)
export default TodoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});