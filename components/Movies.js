import React from 'react'
import {Dimensions} from 'react-native'
import styled from 'styled-components/native'
import { MOCK_DATA } from '../src/ducks/filmsReducer'

const Container = styled.View`
	padding: 20px 0;
`

const Label = styled.Text`
	color: #fff;
	font-size: 16px;
	margin: 0 0 5px 10px;
`
const MovieScroll = styled.ScrollView`
	padding-left: 10px;
`

const MoviePoster = styled.Image`
	width: ${Math.round((Dimensions.get('window').width * 28) / 100)}px;
	height: 150px;
`

const MovieCard = styled.View`
	padding-right: 9px;
`

const Movies = ({ label, item }) => {
    return (
        <Container>
			<Label>{label}</Label>
			<MovieScroll horizontal>
				{item.map((movie, index) => {
					return (
						<MovieCard key={String(index)}>
							<MoviePoster resizeMode='cover' source={{uri: movie.image}} />
						</MovieCard>
					)
				})}
			</MovieScroll>
		</Container>
    )
}

export default Movies