import React from "react";
import { ScrollView, Text, View } from "react-native";

const CourseDocument =({navigation,route}) =>{

    const { section } = route.params;
    return (
        <ScrollView>
            <Text>{section.Document}</Text>
        </ScrollView>
      );
};

export default CourseDocument;