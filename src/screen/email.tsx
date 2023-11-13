import {StyleSheet, Text, View, Alert} from 'react-native';
import {Input} from '@rneui/themed';
import React, {useState} from 'react';
import {Button, Icon} from '@rneui/base';
import {SocialIcon, SocialIconProps} from '@rneui/themed';
const Email = ({navigation}: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const handleButtonPress = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setModalVisible(true);
    }, 2000);
  };
  const onClickLogin = () => {
    if (email.length == 0) {
      Alert.alert('dang ky thanh cong');
    }
  };
  <View style={styles.container}>
    <View style={styles.form}>
      <Text
        style={{
          fontSize: 50,
          fontWeight: 'bold',
          color: 'rgba(255, 35, 212, 0.6)',
          top: 50,
        }}>
        Login
      </Text>
    </View>
    <View style={styles.title}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
        Please enter email
      </Text>
      <Input
        style={styles.containerStyle}
        disabledInputStyle={{background: '#ddd'}}
        placeholder="Email"
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
          onPress={onClickLogin}
          onPressOut={handleButtonPress}
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
          top: 200,
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
  </View>;
};

export default Email;

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
    top: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    top: 150,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
    backgroundColor: 'rgb(240, 240, 240)',
  },
});
