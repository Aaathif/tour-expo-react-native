import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./recentblogscard.style";
import { checkImageURL } from "../../../../utils";

const RecentBlogsCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job.BlogImage)
              ? job.BlogImage
              : "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRv7HeIdJ9zrf1f-c31mSxIzusPyCERCuIMD0Uy6aPSznByjOfEOcgHA6qaoZogjLGw7sLRLAgOawXNI0k9KDSoh0qLaQ&s=19",
          }}
          // source={job.BlogImage}
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job?.blogPlace}
        </Text>

        <Text style={styles.jobType}>{job?.blogCity}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecentBlogsCard;
