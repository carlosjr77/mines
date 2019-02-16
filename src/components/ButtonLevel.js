import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default props => {
    return (
        <TouchableOpacity 
            style={[
                styles.button, props.bgEasy,
                props.bgEasy ? styles.bgEasy : null,
                props.bgNormal ? styles.bgNormal : null,
                props.bgHard ? styles.bgHard : null,
            ]}
            onPress={props.levelSelected}>
            <Text style={styles.buttonLabel}>{props.titleLevel}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },
    bgEasy: {
        backgroundColor: '#49b65d'
    },
    bgNormal: {
        backgroundColor: '#2765F7'
    },
    bgHard: {
        backgroundColor: '#F26337'
    }
})

