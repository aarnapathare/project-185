import {StatusBar } from "expo-status-bar"
import React, {Component} from "react"
import {
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    Platform, 
    Image, 
    ScrollView, 
    TouchableOpacity
} from "react-native"
import {Camera} from 'expo-camera'
import * as FaceDetector from 'expo-face-detector'

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasCameraPermissions: null, 
            faces:[]
        };
        this.onFacesDetected = this.onFacesDetected.bind(this)
    }

    async componentDidMount(){
        const {status} = await Camera.requestPermissionsAsync();
        this.setState({hasCameraPermissions: status==="granted"})
    }

    onFacesDetected({faces}){
        this.setState({faces:faces})
    }

    <View style={StyleSheet.middleContainer}>
        <Camera style={{flex:1}}
        type={Camera.Constants.Tyope.front}
        FaceDetectorSettings={{
            mode: FaceDetector.Constants.Mode.fast, 
            detectLandmarks: FaceDetector.Constants.Mode.fast,
            runClassifications: FaceDetector.Cosntants.Classifications.all 
        }}
        onFacesDetected = {this.onFacesDetected}
        onFacesDetectionError={this.onFacesDetectionError}><Camera/>
    </View>
}