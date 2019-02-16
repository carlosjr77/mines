import React from 'react'
import { View, StyleSheet, TouchableOpacity, Modal, Text} from 'react-native'
import ButtonLevel from '../components/ButtonLevel'

export default props => {
    return (
        <Modal onRequestClose={props.onCancel} visible={props.visible}
            animationType='slide' transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nível</Text>
                    <ButtonLevel titleLevel='Fácil' levelSelected={() => props.onLevelSelected(0.1)} bgEasy/>
                    <ButtonLevel titleLevel='Intermediário' levelSelected={() => props.onLevelSelected(0.2)} bgNormal/>
                    <ButtonLevel titleLevel='Difícil' levelSelected={() => props.onLevelSelected(0.3)} bgHard/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    }
})