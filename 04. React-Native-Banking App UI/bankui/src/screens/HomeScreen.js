import React from 'react';
import styled from 'styled-components/native';
import TextStyle from '../components/Text';
import {FontAwesome} from '@expo/vector-icons';

const HomeScreen = ()=>{
    return(
        <Container>
            <Header>
                <ProfilePhoto source={require('../../assets/1.jpg')}/>
                <Welcome>
                    <TextStyle heavy medium>Welcome</TextStyle>
                    <TextStyle>Nipuna Upeksha</TextStyle>
                </Welcome>
                <FontAwesome name="cog" size={24} color="#565656"/>
            </Header>
            <TextStyle center title black>$9,184.56</TextStyle>
            <TextStyle center heavy color="#727479">Current Balance</TextStyle>
            <StatusBar barStyle="light-content"/>
        </Container>
    );
};

const Container = styled.View`
    flex:1;
    background-color:#1e1e1e;
`;

const Header = styled.View`
    flex-direction:row;
    align-items:center;
    margin:16px 16px 32px 16px;
`;

const ProfilePhoto = styled.Image`
    width:40px;
    height:40px;
    border-radius:20px;
`;

const Welcome = styled.View`
    flex:1;
    padding:0 16px;
`;



const StatusBar = styled.StatusBar``;




export default HomeScreen;