export enum NAVIGATION {
  TEST = 'test',
}

export type RootStackParamList = {
  [NAVIGATION.TEST]: {from?: string};
};
