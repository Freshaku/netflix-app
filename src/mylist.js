import React from 'react'
import {Dimensions, Text, Button,TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import Header from '../components/header'
import Movies from '../components/Movies'
import Movie from '../components/movie'
import { connect} from 'react-redux';

const api = [
    require('../assets/film1.jpg'),
	require('../assets/movie1.jpg'),
	require('../assets/serial1.jpg'),
	require('../assets/film4.jpg')
]

const Container = styled.ScrollView`
    flex: 1;
    background-color: #000;
    height: 100%;
`

const Poster = styled.ImageBackground`
    width: 100%;
    height:${(Dimensions.get('window').height * 110) / 100}px;
`

class MyList extends React.Component {
	onRemove(id){
		films(prev => prev.filter(films => films.id !== id))
	}
	
	onOpen(){

	}

	render(){	
	const {films} = this.props.films;
    return (
        <>
			<Container>
				<Poster>
					<Header navigation={this.props.navigation}/>
					<TouchableOpacity activeOpacity={0.5} onPress = {()=> this.onOpen(films.description)} onLongPress={this.onRemove.bind(null, films.id)}>
						<Movies label='My films' item={films} />
					</TouchableOpacity>
				</Poster>
			</Container>
		</>
    )
	}
}

const mapStateToProps = (state) => {
	const { films } = state
	return { films }
};
  
export default connect(mapStateToProps)(MyList);

// const MyList = (movie, onRemove) => {
//     return (
//         <>
// 			<Container>
// 				<Poster>
// 					<Header navigation={this.props.navigation}/>
//                     {/* <Movies label='Recommendations' item={api} />
// 				    <Movies label='Top 10' item={api} />
//                     <Movies label='Popular' item={api} /> */}
//                     <Text>{movie.title}</Text>
//                     <Button title='Delete' onRemove={onRemove}/>
// 				</Poster>
// 			</Container>
// 		</>
//     )
// }

// export default MyList