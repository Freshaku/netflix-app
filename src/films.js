import React from 'react'
import {Dimensions } from 'react-native'
import styled from 'styled-components/native'
import Header from '../components/header'
import Movies from '../components/Movies'
import { connect} from 'react-redux';

const api = [
	require('../assets/film1.jpg'),
	require('../assets/film2.jpg'),
	require('../assets/film3.jpg'),
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

class Films extends React.Component {
	render(){	
	const {films} = this.props.films;
    return (
        <>
			<Container>
				<Poster>
					<Header navigation={this.props.navigation}/>
                    <Movies label='Recommendations film' item={films} />
				    <Movies label='Top 10' item={films} />
                    <Movies label='Popular' item={films} />
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
  
export default connect(mapStateToProps)(Films);