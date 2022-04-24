import mixpanel from "mixpanel-browser";

export const track = (event: string, data?: any) => {
  mixpanel.track(event, data);
};
