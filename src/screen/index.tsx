import {StyleSheet, Text, View, ScrollView, Modal} from 'react-native';
import {Input} from '@rneui/themed';
import React, {useState} from 'react';
import {Button, Icon} from '@rneui/base';
import {SocialIcon, SocialIconProps} from '@rneui/themed';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import SysModal from '../components/Modal';

const Home = ({navigation}:any) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text
          style={{
            fontSize: 50,
            fontWeight: 'bold',
            color: 'rgba(255, 35, 212, 0.6)',
            top: 50,
          }}>
          Dang Ky
        </Text>
      </View>
      <View style={styles.title}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Please enter Password
        </Text>
        <Input
          style={styles.containerStyle}
          disabledInputStyle={{background: '#ddd'}}
          placeholder="PassWord"
          secureTextEntry={true}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Nhap lai PassWord
        </Text>
        <Input
          style={styles.containerStyle}
          disabledInputStyle={{background: '#ddd'}}
          placeholder="PassWord"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.containerStyle}>
        <View style={styles.button}>
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
            onPress={()=>navigation.navigate('Home')}
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
            top: 100,
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
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 99, 134, 0.3)',
  },
  containerStyle: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleButton: {},
  button: {
    top: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    top: 100,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
    backgroundColor: 'rgb(240, 240, 240)',
  },
});
