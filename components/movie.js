import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const Movie = ({movie}) => {

    return (
        <View style={styles.movie}>
            <Text>{movie.title}</Text>
        </View>  
    )
}

const styles = StyleSheet.create({
    movie: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    }
})