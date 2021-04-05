import React from 'react'
import styled from 'styled-components/native'

import { Feather, Ionicons } from '@expo/vector-icons'

const Container = styled.View`
	position: absolute;
	width: 100%;
	align-items: center;
	bottom: 8px;
`

const Banner = styled.Image`
	height: 100px;
`

const Tags = styled.View`
	justify-content: center;
	margin-top: 20px;
	flex-direction: row;
`

const MenuTag = styled.Text`
	color: #fff;
	padding: 0 8px;
	font-size: 13px;
`

const Separator = styled.View`
	width: 3px;
	height: 3px;
	background-color: #e8e8e8;
	margin: 6px 0;
	border-radius: 3px;
`

const MenuHero = styled.View`
	width: 90%;
	margin-top: 15px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

const Button = styled.TouchableOpacity`
	align-items: center;
`

const TextButton = styled.Text`
	color: #fff;
	font-size: 13px;
	margin-top: 3px;
	margin-left: 15px;
	margin-right: 10px;
	
`

const Play = styled.TouchableOpacity`
	flex-direction: row;
	background-color: #fff;
	width: 142px;
	height: 32px;
	border-radius: 2px;
	align-items: center;
	justify-content: center;
`

const TextButtonPlay = styled.Text`
	font-size: 15px;
	font-weight: bold;
	padding-left: 5px;
`

const Hero = () => {
    return (
        <Container>
			<Banner resizeMode='contain' source={require('../assets/banner.png')} />
			<Tags>
				<MenuTag>SwoonWorthy</MenuTag>
				<Separator />
				<MenuTag>Charming</MenuTag>
				<Separator />
				<MenuTag>Feel-good</MenuTag>
			</Tags>
			<MenuHero>
				<Button>
					<Feather name='plus' size={26} color='#FFF' />
					<TextButton>My List</TextButton>
				</Button>

				<Play>
					<Ionicons name='ios-play' size={26} />
					<TextButtonPlay>Play</TextButtonPlay>
				</Play>

				<Button>
					<Feather name='info' size={22} color='#FFF' />
					<TextButton>Info</TextButton>
				</Button>
			</MenuHero>
		</Container>
    )
}

export default Hero