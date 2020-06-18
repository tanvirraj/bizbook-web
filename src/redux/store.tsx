import { init } from "@rematch/core";
import createLoadingPlugin from "@rematch/loading";
import createRematchPersist from "@rematch/persist";
import * as models from "redux/models";
import selectPlugin from "@rematch/select";

const loading = createLoadingPlugin();

const persistPlugin = createRematchPersist({
  //whitelist: ["userModel"],
  blacklist: ["timeSheetSuggestionsModel"],
  version: 1,
});

const store = init({
  models,
  plugins: [loading, persistPlugin, selectPlugin()],
});

export const { select } = store;
export default store;
