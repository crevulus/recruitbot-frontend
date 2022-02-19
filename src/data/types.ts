export type PerksType = {
  id: number;
  text: string;
  emoji: string;
};

export type AnswersType = {
  id: number;
  text: string;
};

export type ConversationType = {
  id: number;
  text: string;
  answers: AnswersType[] | string;
};

export type RootDataType = {
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
