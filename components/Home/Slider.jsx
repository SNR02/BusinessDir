import { FlatList, Text, View, Image } from 'react-native'
import { db } from '../../configs/FirebaseConfig'
import { useEffect, useState } from 'react'
import {collection, getDocs, query} from 'firebase/firestore'

export default function Slider() {

    const [sliderList,setSliderList] = useState([])
    useEffect(()=>{
        GetSliderList();
    },[])

    const GetSliderList = async () => {
        setSliderList([])
        const q = query(collection(db,'Slider'))
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc)=>{
            console.log(doc.data())
            setSliderList(prev => [...prev,doc.data()])
        })
    }
    return (
      <View>
        <Text style={{
            fontFamily:'outfit-bold',
            fontSize:20,
            paddingLeft:20,
            paddingTop:20,
            paddingBottom:5}}>#Special for you</Text>

        <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{paddingLeft:20}}
        renderItem={({item,_})=>{
            return <Image source={{uri:item.imageUrl}} style={{
                width:300, height:150, borderRadius:15, marginRight:15
            }}/>
        }}/>
      </View>
    )
  }