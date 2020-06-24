import {
  init,
  RematchDispatch,
  RematchRootState,
  RematchStore,
} from "@rematch/core";
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

const store: RematchStore<Models> = init({
  models,
  plugins: [loading, persistPlugin, selectPlugin()],
});

export type Store = typeof store;
export type Models = typeof models;
export type RootState = RematchRootState<Models>;
export type iRootState = RematchRootState<typeof models>;
// @ts-ignore
export type RootDispatch = RematchDispatch<Models>;

export default store;
