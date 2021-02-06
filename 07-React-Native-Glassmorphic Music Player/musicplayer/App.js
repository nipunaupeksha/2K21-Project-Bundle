import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Slider from '@react-native-community/slider';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

import SongIcon from './assets/1.jpg';
import BackgroundImage from './assets/2.jpg';
import { useBackButton } from '@react-navigation/native';

const gray = '#696969';

export default function App() {
  const GlassMorph = () => {
    return (
      <View></View>
    );
  };
  return (

    <Container {...BackgroundImage}>
      <Wrapper>

        <MenuBar>
          <ButtonWrapper>
            <Button>
              <AntDesign name="arrowleft" size={20} color={gray} />
            </Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button>
              <Entypo name="menu" size={24} color={gray} />
            </Button>
          </ButtonWrapper>
        </MenuBar>

        <TextWrapper>
          <PlayingText>PLAYING NOW</PlayingText>
        </TextWrapper>



        <TrackContainer>
          <ImageWrapper>
            <SongImage  {...SongIcon}></SongImage>
          </ImageWrapper>
        </TrackContainer>

        <TextWrapper>
          <MusicText>Wild Ones - Bahari</MusicText>
        </TextWrapper>

        <SongContainer>
          <TimeContainer>
            <TimeText>1.21</TimeText>
            <TimeText>3.46</TimeText>
          </TimeContainer>
          <Slider style={{ marginTop: -15, marginRight: 15, marginLeft: 15 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor='#8aaaff'
            maximumTrackTintColor='#dae6f4'
            thumbTintColor='#7b98ff' />
        </SongContainer>

        <MenuBar>
          <ButtonWrapper>
            <Button>
              <AntDesign name="fastbackward" size={24} color={gray} />
            </Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button>
              <Ionicons name='ios-pause' size={24} color={gray} />
            </Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button>
              <AntDesign name="fastforward" size={24} color={gray} />
            </Button>
          </ButtonWrapper>
        </MenuBar>


      </Wrapper>
    </Container>

  );
}

const SongContainer = styled.View`
  margin-top:32,
  margin-bottom:64
`;

const Container = styled.View`
  flex:1;
  background-image:url(${BackgroundImage});
  background-repeat:no-repeat;
  background-size:cover;
  overflow:hidden;
  alignItems:'center';
`;

const TimeText = styled.Text`
  font-size:10;
  color:#fff;
  font-weight:700;
`;

const TrackContainer = styled.View`
  margin-top:20px;
  height:200px;
  width:100%;
  flex-direction:row;
  justify-content:center;
  align-items:center;
`;

const SongImage = styled.View`
  width:150px;
  height:150px;
  border-radius:50%;
  background-image:url(${SongIcon});
  background-repeat:no-repeat;
  background-size:cover;
  overflow:hidden;
  align-items:center;
`;

const Wrapper = styled.View`
  flex:1;
  background: rgba( 255, 255, 255,0.2);
  backdrop-filter: blur( 2px );
  -webkit-backdrop-filter: blur( 2px );
`;
const MenuBar = styled.View`
  flex-direction:row;
  justify-content:space-between;
`;
const Button = styled.View`
  width: 50px;
  height: 50px;  
  background: rgba( 255, 255, 255,0.7);
  shadow-color: #000;
  shadow-offset: {width: 0, height: 12};
  shadow-opacity: 0.2;
  shadow-radius:16;
  backdrop-filter: blur( 2px );
  border-radius:25px;
  justify-content:center;
  align-items:center;
  -webkit-backdrop-filter: blur( 2px );
`;


const ButtonWrapper = styled.View`
  width:60px;
  height:60px;
  margin:10px 10px;
  border-radius:50%;
  background: rgba( 0, 0, 0,0.1);
  justify-content:center;
  align-items:center;
`;

const ImageWrapper = styled.View`
  width:160px;
  height:160px;
  margin:10px 10px;
  border-radius:50%;
  background: rgba( 0, 0, 0,0.1);
  justify-content:center;
  align-items:center;
`;

const InnerWrapper = styled.View`
  

`;

const TextWrapper = styled.View`
  flex-direction:row;
  justify-content:center;
  align-items:center;
`;
const PlayingText = styled.Text`
  color:rgba( 255, 255, 255,0.7);;
  font-weight:800;
`;

const MusicText = styled.Text`
  padding-top:15px;
  color:rgba( 255, 255, 255,0.7);;
  font-weight:600;
`;

const TimeContainer = styled.View`
margin:30px 30px;
flex-direction:row;
justify-content:space-between;
`;

//box-shadow: 0px 2px 1px ;
