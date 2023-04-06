import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import { Slider, Switch } from '@rneui/themed';
import { useState } from 'react';

export default function App() {
  const [switchValue, setSwitchValue] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* Heading */}
      <View style={styles.heading}>
        <View style={styles.headingText}>
          <Text style={{ fontSize: 26 }}>Living Room</Text>
          <Text style={{ fontSize: 20 }}>3 Devices are active now</Text>
        </View>
        <View style={styles.headingIcon}>
          <Icon name="bell" size={30} color="#000" />
        </View>
      </View>
      {/* Appliances */}
      <View style={styles.appliances}>
        <View style={styles.applianceIcon}>
          <Icon name="tv" size={30} color="#fff" />
        </View>
        <View style={styles.applianceIcon}>
          <Icon name="printer" size={30} color="#fff" />
        </View>
        <View style={styles.applianceIcon}>
          <Icon name="speaker" size={30} color="#fff" />
        </View>
      </View>
      {/* Main Container */}
      <View style={styles.mainContainer}>
        <Image style={{ height: '80%', width: '80%', alignSelf: 'flex-end' }} source={require('./assets/tv.png')} />
        <View style={[styles.contentView]}>
          <Slider
            maximumValue={10}
            minimumValue={0}
            step={1}
            allowTouchTrack
            minimumTrackTintColor='#f8f8fa'
            maximumTrackTintColor='#2c2f42'
            orientation='vertical'
            trackStyle={{ height: 5, width: 50, backgroundColor: '#2c2f42', borderRadius: 10 }}
            thumbStyle={{ height: 30, width: 50, backgroundColor: '#fff', borderRadius: 10, elevation: 5 }}
          />
        </View>
      </View>
      {/* BottomContainer */}
      <View style={styles.bottomContainer}>
        <View style={styles.bottomView}>
          <Text>4kWh ($3/hr)</Text>
          <Text>Energy Usage</Text>
        </View>
        <View style={styles.bottomView}>
          <Switch
            value={switchValue}
            onValueChange={() => { switchValue ? setSwitchValue(false) : setSwitchValue(true) }}
            trackColor={{ false: '#2c2f42', true: '#fff' }}
            thumbColor={switchValue ? '#2c2f42' : '#f4f3f4'}
            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], alignSelf: 'center' }}
          />
          <Text>Turn On/Off</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },

  appliances: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  applianceIcon: {
    backgroundColor: '#2c2f42',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },

  mainContainer: {
    marginTop: 50,
    flexDirection: 'row',
    height: 300,
    justifyContent: 'space-around',
  },
  contentView: {
    flexDirection: 'row',
  },

  bottomContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bottomView: {
    backgroundColor: '#f8f8fa',
    paddingHorizontal: 40,
    paddingVertical: 40,
    borderRadius: 10,
    justifyContent: 'center',
  },

});