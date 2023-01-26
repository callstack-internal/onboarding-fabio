// RNCKNativeButtonViewManager.m

#import "RNCKNativeButtonViewManager.h"
#import "RNCKNativeButton.h"

@implementation RNCKNativeButtonViewManager

RCT_EXPORT_MODULE(NativeButton)

- (UIButton *)view
{
    return [[RNCKNativeButton alloc] initWithFrame:CGRectZero];
}

RCT_EXPORT_VIEW_PROPERTY(enabled, BOOL)

RCT_CUSTOM_VIEW_PROPERTY(text, NSString, UIButton) {
  [view setTitle:json forState:UIControlStateNormal];
}

RCT_CUSTOM_VIEW_PROPERTY(textColor, UIColor, UIButton) {
  [view setTitleColor:[RCTConvert UIColor:json] forState:UIControlStateNormal];
}

RCT_EXPORT_VIEW_PROPERTY(onPress, RCTBubblingEventBlock)

@end
