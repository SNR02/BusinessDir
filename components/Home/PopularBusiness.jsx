import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'
import { useEffect } from 'react'
import { useState } from 'react'
import PopularBusinessCard from './PopularBusinessCard'

export default function PopularBusiness() {

    const [businessList, setBusinessList] = useState([]);
    useEffect(()=>{
        GetBusinessList();
    },[])

    const GetBusinessList = async () => {
        setBusinessList([]);
        const q = query(collection(db, 'BusinessList'), where('rating','>=',4.5));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) =>{
            setBusinessList(prev=>[...prev,doc.data()]);
        })
    }
  return (
    <View>
      <View style={{
            padding:20,
            display:"flex",
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:10
        }}>
            <Text
        style={{
            fontSize:20,
            fontFamily:'outfit-bold'
        }}>
            Popular Business</Text>
            <Text style={{
                color:Colors.PRIMARY,
                fontFamily:'outfit-medium'
            }}>View All</Text>
        </View>
        <FlatList
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        data={businessList}
        renderItem = {({item,index}) => (
            <PopularBusinessCard business={item} key={index}/>
        )}
        />
    </View>
  )
}