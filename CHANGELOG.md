# Changelog

All notable changes to this project will be documented in this file.

# 2.0.2 - (2020-05-06)

## Bug Fixes

- **_checkUpdates:** Added `resolveJsonModule` option to tsconfig to resolve json modules ([13ff21a](https://github.com/KarimX32/UltraX-Package/commit/13ff21a2f8f22a9179137fbb012fc32432928874)).
- **Wikipedia:** Fixed a typo where `Wikipedia` was spelled and exported as `Wikipeida` ([8ded770](https://github.com/KarimX32/UltraX-Package/commit/8ded7702c024e739dcf74e216601d5576f75c60f))
- **node-fetch:** Moved from `node-fetch` to `axios` because node-fetch didn't seem to work anymore ([d3d11f3](https://github.com/KarimX32/UltraX-Package/commit/d3d11f359d412e249aca34ea7de7b65e0f57bfc0))
- **bin:** Changed from `pocket-inc` to `SourceBin` because it seems pocket-inc is no longer maintained and discontinued ([29f9790](https://github.com/KarimX32/UltraX-Package/commit/29f97909c104a467788174348293b02ef8fdbe9a))
- **boost:** Fixed a bug where the `boost` event would not send another message when the user boosted at least once ([65c686f](https://github.com/KarimX32/UltraX-Package/commit/65c686f4bc85fc551ee6af9684875c42e22677e8))
- **boostImage:** Fixed the JSDoc showing the function returns a promise ([77ad270](https://github.com/KarimX32/UltraX-Package/commit/77ad270e054945c0bd88575ae593086a5b341f1c))
- **buttonPaginator:** Fixed the JSDoc showing the `buttons` parameter is optional while there is no code to support this ([3d98127](https://github.com/KarimX32/UltraX-Package/commit/3d9812772206e15488a402f55fac5c7fdba06501))
- **CONTRIBUTING**: Fixed a typo ([9fa0fb2](https://github.com/KarimX32/UltraX-Package/commit/9fa0fb251345630102a803b7f8cfb5517e813d0d))

## Documentation

- **README:** Added a banner, fixed output images not working and made it look better overall ([9b37b89](https://github.com/KarimX32/UltraX-Package/commit/9b37b896f754b52fba34926688251f2b3eeca8ed))

## Features

- **ErrorManager:** Added an `ErrorManager` for better and more detailed errors ([af18b2f](https://github.com/KarimX32/UltraX-Package/commit/af18b2ff61f323e1c292ae4351f78be39b974978))
- **.npmignore**:  Added `images/`, `.replit` and `README` to the `.npmignore` file ([3c03c5f](https://github.com/KarimX32/UltraX-Package/commit/3c03c5f688d96cead14e217c2f97173fdfcbd531))
- **ESlint:** Added `ESlint` for better and cleaner code ([e9ed0e3](https://github.com/KarimX32/UltraX-Package/commit/e9ed0e31f0beb0caca601dfd9aae8c6c3d98af3a)) 

## Refactor

- **Sussybaka:** Made the `Sussybaka` class a function and renamed it to `sussybaka` to match the JavaScript name conventions rules ([5b3657f](https://github.com/KarimX32/UltraX-Package/commit/5b3657fb165f832ed63e05efc04316648d87bc86))
- **boost.start:** Renamed the function to start the boost event to `init` ([77ad270](https://github.com/KarimX32/UltraX-Package/commit/77ad270e054945c0bd88575ae593086a5b341f1c))
- **ButtonPaginator:** Renamed from `ButtonPaginator` to `buttonPaginator` to match the JavaScript name conventions rules ([3d98127](https://github.com/KarimX32/UltraX-Package/commit/3d9812772206e15488a402f55fac5c7fdba06501))
- **docs:** Removed `docs` function because it is undocumented and the API that was used stopped working ([0105808](https://github.com/KarimX32/UltraX-Package/commit/01058082d54e76b229a01638a72f1be7a7cbc6ed))
- **inviteLogger:** Renamed from function `inviteLogger` to start the event to `inviteLogger.init` ([8efc88c](https://github.com/Iliannnn/UltraX-Package/commit/8efc88c307f21f002e777e9e95c9d109f5b20f70))
- **remind.startRemind:** Renamed the function to start the reminder event to `init` ([64d68ec](https://github.com/KarimX32/UltraX-Package/commit/64d68ecc3a83b309583f7ff86065a32024283529)) 
- **welcomeImage:** Renamed some of the parameters to more logical names ([3bb307c](https://github.com/KarimX32/UltraX-Package/commit/3bb307c633c7259886b167a7a305ad6436fe75f4))
  - text_1 : title
  - text_2 : subtitle
  - text_3 : footer
  - options.text1_fontSize : options.title_fontSize
  - options.text2_fontSize : options.subtitle_fontSize
  - options.text3_fontSize : options.footer_fontSize
 
## Typings
- **sussybaka:** Removed class typings and added function typings ([1552428](https://github.com/KarimX32/UltraX-Package/commit/15524288224a1bdc1b739167a9ae97269410bbd6))
- **buttonPaginator:** Renamed function to `buttonPaginator` and made `buttons` required ([95191d8](https://github.com/KarimX32/UltraX-Package/commit/95191d857507d1f097397f0e4693eae2d08d3b1a))
- **dababy:** Renamed function to `dababy` and made ([1552428](https://github.com/KarimX32/UltraX-Package/commit/15524288224a1bdc1b739167a9ae97269410bbd6))
- **init:** Renamed all functions to initialize events to `init` ([ced7a64](https://github.com/KarimX32/UltraX-Package/commit/ced7a64e5e248ebaac5476322c6fa7cb7c234b4f))
- **remind:** Made remind returning `void` instead of `Promise<void>` ([95191d8](https://github.com/KarimX32/UltraX-Package/commit/95191d857507d1f097397f0e4693eae2d08d3b1a))
- **welcomeImage:** Renamed parameters and options to more logical names ([95191d8](https://github.com/KarimX32/UltraX-Package/commit/95191d857507d1f097397f0e4693eae2d08d3b1a))
- **boostImage:** Made boostImage returning `void` instead of `Promise<void>` ([95191d8](https://github.com/KarimX32/UltraX-Package/commit/95191d857507d1f097397f0e4693eae2d08d3b1a))
- **sussybaka:** Renamed `sussyBaka` function to `sussybaka` ([95191d8](https://github.com/KarimX32/UltraX-Package/commit/95191d857507d1f097397f0e4693eae2d08d3b1a))
- **WikipediaOptions:** Merged `message` and `interaction` option into `reply` ([95191d8](https://github.com/KarimX32/UltraX-Package/commit/95191d857507d1f097397f0e4693eae2d08d3b1a))