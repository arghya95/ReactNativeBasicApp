import React from 'react';
import { Text, View, Vibration, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { 
        headerContentStyle, 
        headerTitleStyle, 
        thumbnailStyle, 
        thumbanilContainerStyle, 
        ImageStyle 
    } = styles;
    return ( 
        <Card>
            <CardSection>
                <View style={thumbanilContainerStyle}>
                    <Image style={thumbnailStyle} source={{uri: thumbnail_image}} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTitleStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={ImageStyle} source={{ uri: image }} />
            </CardSection>
            <CardSection>
                <Button onPress={()=> Linking.openURL(url)}>
                Buy Now!
                </Button>
            </CardSection>    
        </Card>
     )
}
const styles = {
    headerContentStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    headerTitleStyle: {
        fontSize: 18,
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbanilContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    ImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}
export default AlbumDetail;