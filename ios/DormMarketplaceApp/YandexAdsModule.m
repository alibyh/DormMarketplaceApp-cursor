#import "YandexAdsModule.h"
@import YandexMobileAds;

@implementation YandexAdsModule

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(initializeSDK:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        [YMAMobileAds initializeSDK];
        resolve(nil);
    });
}

@end