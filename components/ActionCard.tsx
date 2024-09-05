import { Linking, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}></View>
      <View style= {styles.headingContainer}>
        <Text style= {styles.headerText}>
            Whats new in JavaScript 21 - ES12
        </Text>
      </View>
      <Image 

        source={{uri : 'https://bloggingfordevs.com/images/trends-images/javascript-blogs.png'}}
        style = {styles.cardImage}
        />
        <View style = {styles.bodyContainer}>
            <Text numberOfLines={3}>
            It's a common task to concatenate multiple arrays into a single one. In JavaScript, there are several different approaches we can take. Some of them mutate the target array; others leave all input arrays unchanged and return a new array instead.

            In this post, I want to compare the following common approaches:

                Appending elements to an existing array with Array.prototype.push()
                Appending elements to a new array with Array.prototype.push()
                Concatenating multiple arrays with Array.prototype.concat()
                Using spread syntax in an array literal
            </Text>
        </View>
        
        <View style = {styles.footerContainer}>
            <TouchableOpacity
            onPress={() => openWebsite('https://mariusschulz.com/blog/concatenating-arrays-in-javascript')}
            >

            
                <Text style= {styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.footerContainer}>
            <TouchableOpacity
            onPress={() => openWebsite('https://mariusschulz.com/blog/concatenating-arrays-in-javascript')}
            >
               <Text style= {styles.socialLinks}>sylo</Text>
               
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({   
    headingText: {},
    card:{},
    elevatedCard: {},
    headingContainer: {},
    headerText: {},
    cardImage: {
        height: 180
    },
    bodyContainer: {},
    footerContainer: {},
    socialLinks: {},

})