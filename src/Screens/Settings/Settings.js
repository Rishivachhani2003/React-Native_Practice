import React,{useState} from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import styles from './SettingStyles';


const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleDarkModeToggle = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={handleNotificationsToggle}
          trackColor={{ false: '#D3D3D3', true: '#007AFF' }}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dark Mode</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={handleDarkModeToggle}
          trackColor={{ false: '#D3D3D3', true: '#007AFF' }}
          
        />
      </View>
    </View>
  );
};


export default SettingsScreen;
