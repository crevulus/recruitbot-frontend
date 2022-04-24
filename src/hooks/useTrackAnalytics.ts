import mixpanel from "mixpanel-browser";

import { useLocalStorage } from "./useLocalStorage";
import { LocalStorageKeys, PropertyNames } from "../data/enums";
import { useContext } from "react";
import { AppContext } from "../data/AppContext";

export const useTrackAnalytics = () => {
  const { localStorageBooleanValue: hasOptedInTracking } = useLocalStorage(
    LocalStorageKeys.Cookies
  );
  const { accountNumber } = useContext(AppContext);

  const trackAnalytics = (event: string, data?: any) => {
    if (hasOptedInTracking) {
      console.log("here");
      mixpanel.track(event, {
        ...data,
        [PropertyNames.ClientID]: accountNumber,
        [PropertyNames.ClientURL]: window.location.href,
      });
    }
    return;
  };

  return { trackAnalytics };
};
