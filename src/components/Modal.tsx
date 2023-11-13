import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React from 'react';

const SysModal = ({message,visible,onHide}:any) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(00,00,00,.5)',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
        }}>
        {/* header */}
        <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 20,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
              }}>
              Alert
            </Text>
          </View>
          {/* body */}
          <View>
            <Text>{message}</Text>
          </View>
          {/* footer */}
          <TouchableOpacity onPress={onHide}
            style={{
              marginTop: 30,
              backgroundColor: 'blue',
              padding: 15,
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SysModal;
