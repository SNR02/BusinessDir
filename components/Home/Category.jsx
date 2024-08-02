import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';
import CategoryItem from './CategoryItem';
import { useRouter } from 'expo-router';

export default function Category() {
    const [categoryList,setCategoryList] = useState([]);
    const router = useRouter()
    useEffect(()=>{
        GetCategoryList()
    },[]);
    const GetCategoryList = async() => {
        setCategoryList([])
        const q = query(collection(db,'Category'));
        const querySanpshot = await getDocs(q);

        querySanpshot.forEach((doc) =>{
            setCategoryList(prev => [...prev,doc.data()])
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
            Category</Text>
            <Text style={{
                color:Colors.PRIMARY,
                fontFamily:'outfit-medium'
            }}>View All</Text>
        </View>
        <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item,index}) => {
                return <CategoryItem category={item} key={index} onCategoryPress={(category) => router.push('/businesslist/'+item.name)}/>
            }}
        />
      
    </View>
  )
}