function config(
  $mdThemingProvider,
) {
  'ngInject';

  $mdThemingProvider.definePalette('hippo-blue', {
    50: '#cfe7fc',
    100: '#94c9f7',
    200: '#5faff5',
    300: '#3399f2',
    400: '#1785e6',
    500: '#0877d1',
    600: '#0465ba',
    700: '#0259a6',
    800: '#024e96',
    900: '#004280',
    A100: '#99cfff',
    A200: '#4da0ff',
    A400: '#267dff',
    A700: '#0357ff',
    contrastDefaultColor: 'light',
    contrastDarkColors: ['50', '100', '200', '300', '400', 'A100'],
  });

  $mdThemingProvider.definePalette('hippo-orange', {
    50: '#fce1cf',
    100: '#f7ba94',
    200: '#f59356',
    300: '#f58133',
    400: '#f26f18',
    500: '#e35c09',
    600: '#d15102',
    700: '#bd4a02',
    800: '#A84202',
    900: '#963c00',
    A100: '#ffc099',
    A200: '#ff9659',
    A400: '#ff751a',
    A700: '#e06717',
    contrastDefaultColor: 'light',
    contrastDarkColors: ['50', '100', '200', '300', '400', 'A100'],
  });

  $mdThemingProvider.definePalette('hippo-red', {
    50: '#fccfcf',
    100: '#fc8c8c',
    200: '#fa5151',
    300: '#f22a2a',
    400: '#e61717',
    500: '#d40d0d',
    600: '#BD0606',
    700: '#ab0303',
    800: '#990202',
    900: '#850000',
    A100: '#ff9999',
    A200: '#ff596a',
    A400: '#ff334e',
    A700: '#f70029',
    contrastDefaultColor: 'light',
    contrastDarkColors: ['50', '100', '200', '300', '400', 'A100'],
  });

  $mdThemingProvider.definePalette('hippo-grey', {
    50: '#ffffff',
    100: '#f4f4f5',
    200: '#e8e8ea',
    300: '#d9d9dd',
    400: '#b8bcbf',
    500: '#92a0a5',
    600: '#697279',
    700: '#39434c',
    800: '#22272f',
    900: '#000000',
    A100: '#ffffff',
    A200: '#000000',
    A400: '#303030',
    A700: '#39434c',
    contrastDefaultColor: 'dark',
    contrastLightColors: ['500', '600', '700', '800', '900', 'A200', 'A400', 'A700'],
  });

  $mdThemingProvider.theme('default')
    .primaryPalette('hippo-blue')
    .accentPalette('hippo-orange')
    .warnPalette('hippo-red')
    .backgroundPalette('hippo-grey');
}

export default config;
