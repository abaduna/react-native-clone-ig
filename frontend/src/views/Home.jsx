import { useEffect, useState } from "react"
import {View,Text, ScrollView} from "react-native"
import { useFetch } from "../hoock/useFetch"






function Home() {
  const [endpoint,setEndpoint]= useState("posteos")
  const {state,getData}=useFetch(endpoint)
  const {data,loading,error}= state
  console.log(data);
  console.log(`error ${error}`);
  useEffect(()=>{
    getData(endpoint)
  },[])

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    )
  }
  return (
    <View>
        <Text>Home</Text>
       
       
    </View>
  )
}

export default Home