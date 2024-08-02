import { Image, Text, View, SafeAreaView, Platform, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { Colors } from '../constants/Colors';
import * as WebBrowser from "expo-web-browser";
// import { useWarmUpBrowser } from './../hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';
import * as Linking from "expo-linking";

export const useWarmUpBrowser = () => {
    React.useEffect(() => {
      // Warm up the android browser to improve UX
      // https://docs.expo.dev/guides/authentication/#improving-user-experience
      void WebBrowser.warmUpAsync()
      return () => {
        void WebBrowser.coolDownAsync()
      }
    }, [])
  }
  
WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

    const onPress = React.useCallback(async () => {
      try {
        const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
          redirectUrl: Linking.createURL('/dashboard', { scheme: 'myapp' }),
        })
  
        if (createdSessionId) {
          setActive({ session: createdSessionId })
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error('OAuth error', err)
      }
    }, [])


    return (
        <SafeAreaView style={{paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
            <View style={{
                display: 'flex',
                width: "100%",
                marginTop: 100,
                paddingLeft: 30,
                paddingRight: 30
            }}>
                <Text style={styles.welcomeTitle}>Hello, Guest!</Text>
                <Text style={styles.welcomeTitle}>Welcome to <Text style={{color: Colors.PRIMARY}}>BusinessDir</Text></Text>
                <Text style={styles.welcomeText}>Your Ultimate Community Business Directory App.</Text>  
                <Image 
                    source={require('./../assets/images/LoginScreenImg.png')}
                    style={{
                        width: 310,
                        height: 200,
                        marginTop: 90,
                        alignSelf: "center",
                    }}
                />
                <Text style={styles.signInText}>Before Continue, Please Sign In First</Text>
                <TouchableOpacity style={styles.sigInBtn} onPress={onPress}>
                    <Text style={{
                        color: "#fff",
                        fontFamily: 'outfit',
                        textAlign: "center",
                    }}>Let's Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    welcomeTitle: {
        textAlign: "left",
        fontSize: 25,
        fontFamily: 'outfit',
    },
    welcomeText: {
        textAlign: "left",
        fontFamily: "outfit",
        color: "gray",
        fontSize: 14,
        paddingTop: 15
    },
    signInText: {
        textAlign: "center",
        fontFamily: "outfit",
        fontSize: 20,
        paddingTop: 105,
        color: Colors.PRIMARY
    },
    sigInBtn: {
        borderRadius: 20,
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        marginTop: 30
    }
});
