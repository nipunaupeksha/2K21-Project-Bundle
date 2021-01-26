import React from 'react';
import styled from 'styled-components/native';
import { glass_background } from '../constants/Images';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    return (
        <Container>
            <Wrapper>
                <TitleBar>
                    <IconCircle>
                        <Ionicons name="ios-arrow-back" size={24} color="#000" />
                    </IconCircle>
                    <IconCircle>
                        <Ionicons name="ellipsis-vertical" size={24} color="#000" />
                    </IconCircle>
                </TitleBar>
            </Wrapper>
        </Container>
    );
}

export default HomeScreen;

const Container = styled.View`
    flex:1;
    background-image:url(${glass_background});
    width:100%;
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
`;

const Wrapper = styled.View`
    height:100vh;
    width:100vw;
    background: rgba( 255, 255, 255, 0.25 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
`;
const Text = styled.Text``;

const IconCircle = styled.View`
    background:rgba(255,255,255,0.3);
    box-shadow:10px 5px 10px black;
    width:40;
    height:40;
    border-radius:20;
    align-items:center;
    justify-content:center
`;

const TitleBar = styled.View`
    flex-direction:row;
    justify-content: space-between;
    margin-top: 24;
    margin-horizontal: 16;
`;