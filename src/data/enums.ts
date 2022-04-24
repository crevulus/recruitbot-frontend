export enum AnswerEntryTypes {
  FreeForm = "input",
}

export enum FetchTypes {
  Post = "POST",
  Get = "GET",
}

export enum LoadingSpinnerTypes {
  Fetching = "Fetching",
  Writing = "Writing",
}

export enum LocalStorageKeys {
  Cookies = "allowRecruitbotCookies",
}

export enum Hyperlinks {
  RecruitbotHome = "http://34.134.178.79/",
}

export enum Environments {
  Dev = "development",
  Prod = "production",
}

export enum Endpoints {
  Introduction = "introduction",
  Conversation = "conversation",
  Submissions = "response",
}

// Tracking Enums
export enum EventNames {
  OpenRecruitbot = "Open_Recruitbot",
  ClickAnswerButton = "Click_Answer_Button",
  SubmitFreeFormAnswer = "Submit_Free_Form_Answer",
  SubmitForm = "Submit_Form",
}

export enum KPIs {
  Views = "Views",
  Redirects = "Redirects",
  Engagement = "Engagement",
  Submissions = "Submissions",
}

export enum PropertyNames {
  Time = "Time",
  ClientURL = "Client_URL",
  ClientID = "Client_ID",
  Answer = "Answer",
  Step = "Step",
}
