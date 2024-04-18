import {registerScreen} from '@common/register-navigation-screen';
import {registerCommonModule} from './common/get-screen-root';

export const registerCoreModuleScreens = () => {
  const SplashScreen = require('@screens/splash/index.native').default;
  const LoginScreen = require('@screens/auth/login/index').default;
  const LanguageChooseScreen =
    require('@screens/onboard/language/index').default;
  registerScreen(LanguageChooseScreen.screenId, LanguageChooseScreen);
  registerScreen(SplashScreen.screenId, SplashScreen);
  registerScreen(LoginScreen.screenId, LoginScreen);

  //Module
  registerCommonModule();
};
