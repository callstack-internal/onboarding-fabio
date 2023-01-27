import NativeNotificationsModule from '../../../modules/native-notifications/NativeNotificationsModule';
import ServiceHelper from '../common/ServiceHelper';
import {ServiceResponse} from '../common/ServiceResponse';

const showNotification = ({
  title,
  body,
}: {
  title: string;
  body: string;
}): ServiceResponse<void, void> => {
  try {
    NativeNotificationsModule.showNotification(title, body);
    return {ok: true, problem: null, error: null, data: undefined};
  } catch (e) {
    console.error(e);
    return ServiceHelper.processGenericServiceError(e);
  }
};

const NotificationService = {
  showNotification,
};

export default NotificationService;
