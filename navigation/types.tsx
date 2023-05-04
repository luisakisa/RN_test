import {NamesScreens} from './NamesScreens';

export type RootStackParamList = {
  [NamesScreens.Home]: undefined;
  [NamesScreens.First]: undefined;
  [NamesScreens.Second]: undefined;
  [NamesScreens.Third]: {
    data: string;
  };
  [NamesScreens.VibrationsPatterns]: undefined;
};
