import {NativeModules} from 'react-native';

class NativeNotificationsModule {
  static showNotification = (title: string, body: string) => {
    const module = NativeModules.NativeNotifications;
    module.showNotification(title, body);
  };
}

export default NativeNotificationsModule;
