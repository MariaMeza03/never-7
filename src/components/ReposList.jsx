import React from "react";
import { Text, View, FlatList } from "react-native";
import repositories from "../../js/repositories";   
import { StyleSheet } from "react-native";
import StyleText from "../../css/TextStyle";


const ReposList= () =>{
    return(
        <FlatList 
            data={repositories} 
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: repo }) => (
                    <View key={repo.id} style={styles.container}>
                        <StyleText bold>ID: {repo.id}</StyleText>
                        <StyleText>NAME: {repo.name}</StyleText>
                        <StyleText>EMAIL: {repo.email}</StyleText>
                        <StyleText>BODY: {repo.body}</StyleText>
                    </View>
                
                )}

        />

    )
}
export default ReposList

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingTop:40,
    },

})
