import React, {Component} from 'react';
import {Modal,Text,View,StyleSheet,TouchableHighlight} from 'react-native';

export default class Goal extends Component {
state = {
    modalVisible: false,
}
toggleModal(visible){
    this.setState({ modalVisible: visible});
}


render() {
    return(
<View style={styles.container}>
    <Modal animationType={"slide"}  transparent={false}
    visible={this.state.modalVisible} onRequestClose={()=>{console.log("modal has been closed")}}>
        <View style= {styles.modal}>
            <Text style={styles.text}>
            Modal is open
            </Text>
            <TouchableHighlight onPress={()=>{this.toggleModal(!this.state.modalVisible)}}>
                <Text style={styles.text}>
                 Close Modal
                </Text>
             </TouchableHighlight>   
        </View>
    </Modal>
    <TouchableHighlight onPress={()=>{this.toggleModal(true)}}>
        <Text style={styles.text}>
            Open Modal
        </Text>
    </TouchableHighlight>
</View>     
    
    )
    }
 }



const styles = StyleSheet.create({
    container: {
      padding:100,
      backgroundColor: 'black',
      alignItems: 'center',
      
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 100
     },
    text:{
color: 'blue',
marginTop:10
    }
  })