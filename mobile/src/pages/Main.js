import React, { useEffect, useState } from 'react';
import { 
    StyleSheet, 
    Image, 
    View, 
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps'
import { 
    requestPermissionsAsync, 
    getCurrentPositionAsync 
} from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons'

function Main({ navigation }) {
    const [currentRegion, setCurrentRegion ] = useState(null);

    useEffect(() => {
       async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();
            if (granted) {
                const {coords} = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });
                const { latitude, longitude } = coords;
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04
                })
            }
       }
       loadInitialPosition();
    }, [])
    console.log(currentRegion)
    if (!currentRegion) {
        return null
    }
    return (
        <>
            <MapView initialRegion={currentRegion} style={styles.map}>
                <Marker coordinate={{
                    latitude: -21.892032,
                    longitude: -45.5930754
                }} >
                <Image 
                    style={styles.avatar} 
                    source={{uri: 'https://avatars1.githubusercontent.com/u/2254731?s=460&u=dc1a4fd280cdc3c6977bacf57cbfeb8ba0917f27&v=4'}} 
                /> 
                <Callout onPress={() => {
                    navigation.navigate('Profile', {github_username: 'diego3g'})
                }}>
                    <View style={styles.callout}>
                        <Text style={styles.devName}>Diego Fernandes</Text>
                        <Text style={styles.devBio}>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.</Text>
                        <Text style={styles.devTechs}>ReactJS, React Native, Node.js</Text>
                    </View>
                </Callout>
                </Marker>
            </MapView>
            
            <View style={styles.searchForm}>
                <TextInput 
                style={styles.searchInput} 
                placeholder="Buscar Devs por techs..."
                placeholderTextColor='#999'
                autoCapitalize="words"
                autoCorrect={false}
                />
                <TouchableOpacity 
                    style={styles.searchButton} 
                    onPress={() => {console.log('Filtrar')}}>
                    <MaterialIcons name="my-location" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
            
        </>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#fff',
        alignSelf: 'center'
    },
    callout: {
        width: 260,
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    devBio: {
        color: '#666',
        marginTop: 5,
    },
    devTechs: {
        marginTop: 5,
    },
    searchForm:{
        position: 'absolute',
        top: 20,        
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row',
    },
    
    searchInput: {
        flex: 1,
        width: 500,
        height: 50,
        backgroundColor: '#fff',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2
    },
    searchButton: {
        width: 50,
        height: 50,
        backgroundColor: '#8e4def',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    }
})

export default Main;