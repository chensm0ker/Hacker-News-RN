import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
  } from "react-native";
import { getUser } from "../services/hnApi";


export const User = ({userId}:any) => {

    const [user, setUser] = useState<{karma: number}>({
        karma: 0,
    });
    
    useEffect(() => {

        getUser(userId).then(data => data && setUser({
            karma: data.karma,
        }));

    });


    return( 

        <Text style={styles.subtitle}>
        {user.karma}
        </Text>

    )
    
    
};

const styles = StyleSheet.create({
    subtitle: {
      fontSize: 14,
      fontWeight: "200",
    },
  });