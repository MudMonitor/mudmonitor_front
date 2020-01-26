import React from "react";
import {FlatList} from "react-native";
import Trail from "../trail/trail";

const TrailList = ({  trails }) => {
    return (
        <FlatList
            data={trails}
            renderItem={Trail}
        />
    );
};

export default TrailList;