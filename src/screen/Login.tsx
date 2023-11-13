import { View, Text } from 'react-native'
import { Input, SocialIcon } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/AntDesign';
import React, { useState } from 'react'
import { CheckBox } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';
import { Button } from 'react-native-elements';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [checked, setChecked] = React.useState(true);
     const toggleCheckbox = () => setChecked(!checked);
     const [isLoading, setIsLoading] = useState(false);
     const [isModalVisible, setModalVisible] = useState(false);
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };
    const handleButtonPress = async () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setModalVisible(true); 
          }, 2000);
      };
  return (
    <View style={styleS.container}>
      <View style={styleS.title}>
        <Text style={{fontSize:80,fontWeight:"bold",color:'rgba(255, 35, 212, 0.6)'}}>
            Login
        </Text>
      </View>
      <View style={styleS.ip}>
      <Input
      placeholder='INPUT WITH CUSTOM ICON'
      leftIcon={
        <Icon
          name='email'
          size={24}
          color='black'
        />
      }
    />
    <Input
        secureTextEntry={!showPassword}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        rightIcon={
          <Icons
            size={24}
            name={showPassword ? 'eye' : 'eyeo'}
            type="ionicon"
            onPress={handleTogglePassword}
          />
        }
        leftIcon={
            <Icons
              name='user'
              size={24}
              color='black'
            />
          }
      />
      <View  style={{
        flexDirection:'row',alignItems:'center',justifyContent:'space-around'
      }}>
      <CheckBox
           checked={checked}
           onPress={toggleCheckbox}
           // Use ThemeProvider to make change for all checkbox
           iconType="material-community"
           checkedIcon="checkbox-marked"
           uncheckedIcon="checkbox-blank-outline"
           checkedColor="red"
         />
         <Text style={{fontSize:15,fontWeight:'bold',color:'rgba(255, 35, 212, 0.6)'}}>
            luu mat khau
         </Text>
         <TouchableOpacity onPress={() => Alert.alert('sau nay tao lam sau')}>
        <Text style = {{color:'rgba(255, 35, 212, 0.6)'}}>TAO TAI KHOANG?</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View style={styleS.containerStyle}>
        <View style={styleS.button}>
          <Button
            title="NEXT"
            icon={{
              name: 'logout',
              type: 'AntDesign',
              size: 15,
              color: 'white',
            }}
            buttonStyle={{
              width: 100,
              height: 100,
              backgroundColor: 'rgba(255, 107, 158, 0.7)',
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 30,
            }}
            iconContainerStyle={{marginRight: 10}}
            onPress={handleButtonPress}
            loading={isLoading}
            titleStyle={{fontWeight: 'bold'}}
          />
        </View>
      </View>
      <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          top: 90,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <SocialIcon
          title=""
          button
          type="facebook"
          onPress={() => {
            // Xử lý đăng nhập bằng Facebook
          }}
        />

        <SocialIcon
          title=""
          button
          type="google-plus-official"
          onPress={() => {
            // Xử lý đăng nhập bằng Google
          }}
        />

        <SocialIcon
          title=""
          button
          type="envelope"
          onPress={() => {
            // Xử lý đăng nhập bằng Email
          }}
        />
      </View>
    </View>
    </View>
  )
}

export default Login
const styleS=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(255, 99, 134, 0.3)',
    },
    title:{
        top:20,
        justifyContent:'center',
        alignItems:'center',
    },
    ip:{
        top: 100,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
    backgroundColor: 'rgb(240, 240, 240)',
    },
    containerStyle: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    
        top: 10,
        height: 60,
      }, button: {
        top: 70,
        alignItems: 'center',
        justifyContent: 'center',
      },
})