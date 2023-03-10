import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ActivityIndicator,
    View,
    Linking,
  } from "react-native";
import { getStory } from "../services/hnApi";
import { mapTime } from "../mappers/mapTme";
import { User } from "./User";

import moment from "moment";

export const Story = ({storyId}:any) => {
    // const [isLoading, setLoading] = useState(true);
    const [isLoading, setLoading] = useState(false);

    const [story, setStory] = useState<{id: number, title:string, author: string, time: number, score: number, url: string}>({
        id: 0,
        title: '',
        author: '',
        time: 0,
        score: 0,
        url: '',
    });
    
    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory({
            id: data.id,
            title: data.title,
            author: data.by,
            time: data.time,
            score: data.score,
            url: data.url,
        }));

    }, []);


const datetime = story.time;
const time = moment((datetime)).format('MM/DD/YYYY hh:MM');

    return( 

        <SafeAreaView style={styles.container}>
        {/* While fetching show the indicator, else show response*/}
            {isLoading ? (
                <ActivityIndicator />
            ) : (

                <View>
                    {/* Title from URL */}
                    <Text style={styles.title}>{story.title}</Text>


                    <View style={{ paddingBottom: 4 }}>
                        <Text style={styles.subtitle}>
                        By: {story.author}  Score: {story.score}  Posted: {mapTime(story.time)} Karma: <User userId={story.author}/>
                        </Text>
                        <Text style={styles.url} onPress={() => Linking.openURL(story.url)}>
                        {story.url}
                        </Text>
                    </View>

                    <View style={{ borderBottomWidth: 1, marginBottom: 8 }}></View>
                    {/* Show the description */}
                    {/* <Text style={styles.description}>{user.about}</Text> */}

                </View>

            )}
        </SafeAreaView>

    )
    
    
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 8,
    },
    subtitle: {
      fontSize: 14,
      fontWeight: "200",
    },
    url: {
      fontSize: 14,
      fontWeight: "200",
      color: 'blue',
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    description: {
      textAlign: "center",
      marginBottom: 18,
      fontWeight: "200",
      color: "green",
    },
  });

  function alert(error: any): any {
    throw new Error("Function not implemented.");
  }