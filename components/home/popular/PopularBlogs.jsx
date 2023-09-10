import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./popularBlogs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetchBlog";
import PopularBlogCard from "../../common/cards/popular/PopularBlogCard";
import { Blog } from "./BlogData";

const PopularBlogs = () => {

  const router = useRouter();
  
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });

  console.log(data)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Blog</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={Blog}
            renderItem={({item})=>(
                <PopularBlogCard 
                  item={item}
                />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>

  );
};

export default PopularBlogs;
