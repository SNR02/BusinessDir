import { useUser } from '@clerk/clerk-expo'
import React from 'react'
import { View, Image, Text, TextInput } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    const user = useUser();
  return (
    <View style={{
        padding:20,
        paddingTop:50, 
        backgroundColor:Colors.PRIMARY,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20
        }}>
        <View style={{
            display:'flex', 
            flexDirection:'row', 
            alignItems:'center', 
            gap:10
            }}> 
            <Image source={{uri:user.user.imageUrl}}
            style={{
                width:45,
                height:45,
                borderRadius:99
            }}/>
            <View>
                <Text style={{color:'#fff'}}>Welcome,</Text>
                <Text style={{
                    fontSize:19, 
                    fontFamily:'outfit-medium',
                    color:'#fff'
                    }}>{user.user.fullName}</Text>
            </View>
        </View>
        <View style={{
            dispaly:'flex',
            flexDirection:'row',
            gap:10,
            alignItems:'center',
            backgroundColor:'#fff',
            padding:10,
            marginVertical:10,
            marginTop:15,
            borderRadius:8
        }}>
            <Ionicons name="search" size={24} color={Colors.PRIMARY}/>
            <TextInput placeholder='Search...' style={{fontFamily:'outfit',fontSize:16}}/>
        </View>
    </View>
  )
}
