import React from "react";
import { View, Text, StyleSheet} from "react-native";
import TrailStatus from '../status/status';

const Trail = ({item: trail}) => {
    console.log(trail)
    console.log(trail.status)
    return (
        <View style= {styles.row}>
            <View style={styles.RowData}>
                <Text style={styles.rowDataText}>{`${trail.name}`}</Text>
                <TrailStatus style={styles.rowData} status={trail.status}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        marginBottom: 5,
        backgroundColor: "white",
        borderBottomWidt: StyleSheet.hairlineWidth,
        borderBottonColor: "gray"
    },
    rowData: {
        flex: 1
    },
    rowDataText: {
        fontSize:15,
        textTransform: "capitalize",
        color: "navy"
    },
    rowDataSubText: {
        fontSize: 13,
        opacity: 0.8,
        color: "gray",
        marginTop: 4
    }
});

export default Trail;