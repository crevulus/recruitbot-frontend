export type PerksType = {
  id: number;
  text: string;
  emoji?: string;
};

export type AnswersType = {
  id: number;
  key: string;
  text: string;
};

export type ConversationType = {
  id: number;
  key: string;
  text: string;
  answers: AnswersType[] | string;
};

export type RootDataType = {
  id: number;
  cta: string;
  perks: PerksType[];
  conversation: ConversationType[];
};

export type FetchResultsType = {
  data: RootDataType;
  isLoading: boolean;
  error: boolean;
  errorMsg: string;
};
