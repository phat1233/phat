import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, CheckBox, Button} from 'react-native-elements';
import {Avatar} from '@rneui/themed';
import {Divider, Text} from '@rneui/base';

const YourFormScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [isMale, setIsMale] = useState(false);
  const [isfemale, setIsfemale] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // Giả sử giới tính mặc định là nữ

  const handleCheckBoxChange = () => {
    setIsMale(prevValue => !prevValue);
  };
  const handleCheckBoxChange2 = () => {
    setIsfemale(prevValue => !prevValue);
  };

  const handleSubmit = () => {
    // Xử lý dữ liệu, ví dụ: in ra thông tin
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Company:', company);
    console.log('Position:', position);
    console.log('Is Male:', isMale);
  };

  return (
    <View style={styles.container}>
      <Avatar
        size={150}
        rounded
        icon={{name: 'adb', type: 'material'}}
        containerStyle={{backgroundColor: 'orange'}}>
        <Avatar.Accessory size={44} />
      </Avatar>
      <View style={styles.ip}>
        <View style={styles.title}>
          <Input
            containerStyle={{
              flex: 1,

              top: 10,
              height: 60,
            }}
            placeholder="First Name"
          />
          <Divider style={{width: 10}} />
          <Input
            containerStyle={{
              flex: 1,

              top: 10,
              height: 60,
            }}
            placeholder="Last Name"
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            top: 15,
          }}>
          NHAP TEN CONG TY{''}
        </Text>
        <Input
          style={styles.containerStyle}
          disabledInputStyle={{background: '#ddd'}}
          placeholder="Ten CTY "
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            top: 15,
          }}>
          NHAP CHUC DANH{''}
        </Text>
        <Input
          style={styles.containerStyle}
          disabledInputStyle={{background: '#ddd'}}
          placeholder="CHUC DANH "
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <CheckBox
            title="Male"
            checked={isMale}
            onPress={handleCheckBoxChange}
          />
          <CheckBox
            title="Male"
            checked={isfemale}
            onPress={handleCheckBoxChange2}
          />
        </View>
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
            // onPress={()=>navigation.navigate('Home')}
            loading={isLoading}
            titleStyle={{fontWeight: 'bold'}}
          />
        </View>
      </View>
    </View>
  );
};

export default YourFormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 99, 134, 0.3)',
  },
  title: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  ip: {
    marginHorizontal: 20,
    top: 50,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  containerStyle: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',

    top: 10,
    height: 60,
  },
  button: {
    top: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
