import React from "react";
import {
    ScrollView,
    ActivityIndicator,
    StyleSheet
} from "react-native";
import TrailList from "./trail_list/trail-list";

class Home extends React.Component {
    state = {
        trails: [],
        loading: true
    };

    componentDidMount() {
        this.getTrails();
    }

    async getTrails()
    {
        console.log('here')
        fetch("http://localhost:5000/api/v1/tweets/")
        .then(response=>response.json())
        .then(data=>{this.setState({ trails: [...data], loading: false });});
        
    }

    render() {
        return (
            <ScrollView
            noSpacer={true}
            noScroll={true}

            style={styles.container}
            >
                {this.state.loading ? (
                    <ActivityIndicator
                    style={[styles.centering, styles.gray]}
                    color="blue" 
                    size="large"
                    />
                ):(
                    <TrailList trails = {this.state.trails} />
                )}
            </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: "whitesmoke"
    },

    centering: {
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        height: '110vh'
    },
});

export default Home;