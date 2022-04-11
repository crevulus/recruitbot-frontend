type IdType = {
  $oid: string;
};

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
  _id: IdType;
  id: number;
  key: string;
  text: string;
  answers: AnswersType[] | string;
};

export type IntroductionDataType = {
  _id: IdType;
  cta: string;
  perks: PerksType[];
};

export type FetchResultsType<T> = {
  data: T;
  isLoading: boolean;
  error: boolean;
  errorMsg: string;
  executeFetch: () => void;
};
