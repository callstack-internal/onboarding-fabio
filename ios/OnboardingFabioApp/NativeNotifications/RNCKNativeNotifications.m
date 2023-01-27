#import <UIKit/UIKit.h>
#import <UserNotifications/UserNotifications.h>
#import "RNCKNativeNotifications.h"

@implementation RNCKNativeNotifications

RCT_EXPORT_MODULE(NativeNotifications)

RCT_EXPORT_METHOD(showNotification:(NSString *)title location:(NSString *)body)
{
    UNMutableNotificationContent *content = [[UNMutableNotificationContent alloc] init];
    content.title = title;
    content.body = body;
    content.sound = UNNotificationSound.defaultSound;

    UNTimeIntervalNotificationTrigger *trigger = [UNTimeIntervalNotificationTrigger
                                                  triggerWithTimeInterval:0.1f
                                                  repeats:NO];

    UNNotificationRequest *request = [UNNotificationRequest requestWithIdentifier:@"requestName"
                                                                          content:content
                                                                          trigger:trigger];

    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];

    dispatch_async(dispatch_get_main_queue(), ^{
      [center addNotificationRequest:request withCompletionHandler:nil];
    });
}

@end
