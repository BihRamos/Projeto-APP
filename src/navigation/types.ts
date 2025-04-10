// navigation/types.ts
import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  Login: undefined;
  BottomRoutes: undefined;
  Agradecimento: undefined;
};

export type NavigationStackProps = NavigationProp<RootStackParamList>;
