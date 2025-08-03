const { withDangerousMod } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

const withYandexAds = (config) => {
  return withDangerousMod(config, [
    'ios',
    async (config) => {
      const xcodeProjectPath = path.join(config.modRequest.platformProjectRoot, 'DormMarketplaceApp');
      
      if (!fs.existsSync(xcodeProjectPath)) {
        fs.mkdirSync(xcodeProjectPath, { recursive: true });
      }

      // Create the Objective-C files for Yandex Ads
      const headerContent = `#import <React/RCTBridgeModule.h>

@interface YandexAdsModule : NSObject <RCTBridgeModule>
@end`;

      const implementationContent = `#import "YandexAdsModule.h"
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

@end`;

      fs.writeFileSync(
        path.join(xcodeProjectPath, 'YandexAdsModule.h'),
        headerContent
      );

      fs.writeFileSync(
        path.join(xcodeProjectPath, 'YandexAdsModule.m'),
        implementationContent
      );

      return config;
    },
  ]);
};

module.exports = withYandexAds;