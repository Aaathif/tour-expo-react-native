import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"]
const blogNavbar = ["Blogs Home", "Blogs Feed", "Chat"]


const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const router = useRouter();
  const [ activeJobType, setActiveJobType ] = useState('Full-time');
  const [activeBlogNavbar, setActiveBlogNavbar ] = useState('Blog Home');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Blog Page</Text>
        <Text style={styles.userName}>Find your interesting blog</Text>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={blogNavbar}
          renderItem={({item})=>(
            <TouchableOpacity
              style={styles.tabNavBar(activeBlogNavbar, item)}
              onPress={()=>{
                setActiveBlogNavbar(item);
                router.push(`search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeBlogNavbar, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.xxLarge}}
          horizontal
        />
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text)=> {setSearchTerm(text)}}
            placeholder="Search your favourite article or blog?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image 
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          renderItem={({item}) => (
            <TouchableOpacity 
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)} >{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;