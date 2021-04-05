import React from 'react'
import { StatusBar, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'
import Header from '../components/header'
import Hero from '../components/hero'
import Movies from '../components/Movies'
import { connect} from 'react-redux';


const api = [
	require('../assets/movie1.jpg'),
	require('../assets/movie2.jpg'),
	require('../assets/movie3.jpg'),
	require('../assets/movie4.jpg')
]

const Container = styled.ScrollView`
    flex: 1;
    background-color: #000;
`

const Poster = styled.ImageBackground`
    width: 100%;
    height:${(Dimensions.get('window').height * 81) / 100}px;
`

const Gradient = styled(LinearGradient)`
	height: 100%;
`

class Home extends React.Component {
	render(){	
	const {films} = this.props.films;
    return (
        <>
			<StatusBar
				translucent
				backgroundColor='transparent'
				barStyle='light-content'
			/>
			<Container>
				<Poster source={require('../assets/poster.jpg')}>
					<Gradient
						locations={[0, 0.2, 0.6, 0.93]}
						colors={[
							'rgba(0,0,0,0.5)',
							'rgba(0,0,0,0.0)',
							'rgba(0,0,0,0.0)',
							'rgba(0,0,0,1)'
						]}>
						<Header navigation={this.props.navigation} />
						<Hero />
					</Gradient>
				</Poster>
			<Movies label='Recommendations' item={films} />
				<Movies label='Top 10' item={films} />
			</Container>
		</>
    )
	}
}

const mapStateToProps = (state) => {
	const { films } = state
	return { films }
};
  
export default connect(mapStateToProps)(Home);