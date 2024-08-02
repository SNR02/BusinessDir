import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function PopularBusinessCard({business}) {
  return (
    <View style={{
        marginLeft:20,
        padding:10,
        backgroundColor:"#fff",
        borderRadius:15
    }}>
      <Image source={{uri:business.imageUrl}} style={{
      width:200,
      height:130,
      borderRadius:10
      }}/>
      <View style={{marginTop:7,gap:5}}>
        <Text style={{
            fontFamily:'outfit-bold',
            fontSize:17
        }}>{business.name}</Text>
        <Text style={{
            fontFamily:'outfit',
            fontSize:13
        }}>{business.address}</Text>
      </View>
      <View style={{
        marginTop:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
      }}>
        <View style={{
            display:"flex",
            flexDirection:'row',
            gap:5
        }}>
            <Image source={require('./../../assets/images/star.png')} style={{width:15,height:15}}/>
            <Text>{business.rating}</Text>
        </View>
        <Text 
        style={{
            fontFamily:'outfit',
            padding:3,
            fontSize:10,
            borderRadius:5,
            backgroundColor:Colors.PRIMARY,
            color:'#fff'
        }}
        >{business.category}</Text>
      </View>
      
    </View>
  )
}