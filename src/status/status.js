import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text
} from 'react-native';

const open ='https://i7.pngguru.com/preview/185/414/451/thumb-signal-outline-computer-icons-clip-art-thumb-up.jpg';
const closed = 'http://images.clipartpanda.com/stop-sign-clipart-119498958977780800stop_sign_right_font_mig_.svg.med.png';

class TrailStatus extends Component {
    
    state = {
        status: this.props.status,
        image_link:''
    };
    

    

    render () {
        const link = getVal(this.state.status);
        console.log(link)
        return (
            <View style = {styles.row}>
                <Image style={styles.rowIcon} source={link}/>
                <Text style= {styles.rowDataText}>{this.state.status}</Text> 
            </View>
            
        );
    }
}

function getVal (status) {
    if(status === "closed") {
        return closed
    }
    else {
        return open
    }
}

const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      marginBottom: 5,
      backgroundColor: "white",
    },
    rowIcon: {
      width: 64,
      height: 64,
      marginRight: 20,
    },
    rowData: {
      flex: 1
    },
    rowDataText: {
      fontSize: 15,
      textTransform: "capitalize",
      color: "#4b4b4b"
    },
    rowDataSubText: {
      fontSize: 13,
      opacity: 0.8,
      color: "#a8a689",
      marginTop: 4
    }
  });


export default TrailStatus;