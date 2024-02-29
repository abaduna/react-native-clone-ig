import { useEffect, useState } from "react"
import {View,Text, ScrollView} from "react-native"
import { useFetch } from "../hoock/useFetch"






function Home() {
  const [endpoint,setEndpoint]= useState("/posteos")
  const {state,getData}=useFetch()
  const {data,loading,error}= state
  console.log(data);
  useEffect(()=>{
    getData(endpoint)
  },[])
  return (
    <View>
        <Text>Home</Text>
    </View>
  )
}

export default Home