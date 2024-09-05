//import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
  } from 'react-native';
  
  const SignUp = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonFacebookStyle}
            activeOpacity={0.5}>
            <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
              }}
              style={styles.buttonImageIconStyle}
            />
            <View style={styles.buttonIconSeparatorStyle} />
            <Text style={styles.buttonTextStyle}>
              Login Using Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonGPlusStyle}
            activeOpacity={0.5}>
            <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/google-plus.png',
              }}
              style={styles.buttonImageIconStyle}
            />
            <View style={styles.buttonIconSeparatorStyle} />
            <Text style={styles.buttonTextStyle}>
              Login Using Google Plus
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      marginTop: 30,
      padding: 30,
    },
    buttonGPlusStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#dc4e41',
      borderWidth: 0.5,
      borderColor: '#fff',
      height: 40,
      borderRadius: 5,
      margin: 5,
    },
    buttonFacebookStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#485a96',
      borderWidth: 0.5,
      borderColor: '#fff',
      height: 40,
      borderRadius: 5,
      margin: 5,
    },
    buttonImageIconStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode: 'stretch',
    },
    buttonTextStyle: {
      color: '#fff',
      marginBottom: 4,
      marginLeft: 10,
    },
    buttonIconSeparatorStyle: {
      backgroundColor: '#fff',
      width: 1,
      height: 40,
    },
  });
  
  export default SignUp;