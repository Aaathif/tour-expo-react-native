import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils";

const PopularBlogCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item?.bloggerProfile)
              ? item.bloggerProfile
              : "https://static.photocdn.pt/images/articles/2019/08/07/images/articles/2019/07/31/linkedin_profile_picture_tips-1.webp",
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.bloggerName}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.blogPlace}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.publisher(selectedJob, item)}>
            {item?.blogCity} -
          </Text>
          <Text style={styles.location}>{item.country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularBlogCard;
