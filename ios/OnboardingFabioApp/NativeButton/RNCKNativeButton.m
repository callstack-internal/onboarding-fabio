#import "RNCKNativeButton.h"

@implementation RNCKNativeButton

- (instancetype)initWithFrame:(CGRect)frame
{
  self = [super initWithFrame:frame];

  if (self) {
    [self addTarget:self action:@selector(handleOnPress) forControlEvents:UIControlEventTouchUpInside];
  }

  return self;
}

- (void)handleOnPress {
  self.onPress([NSDictionary dictionary]);
}

@end
