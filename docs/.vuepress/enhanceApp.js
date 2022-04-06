import InstantSearch from "vue-instantsearch";
import VueObserveVisibility from "vue-observe-visibility";
import BoardGameDetail from "./components/BoardGame/BoardGameDetail";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  _options, // the options for the root Vue instance
  router, // the router instance for the app
  _siteData, // site metadata
  isServer, // is this enhancement applied in server-rendering or client
}) => {
  Vue.use(InstantSearch);
  Vue.use(VueObserveVisibility);

  router.addRoute({ path: "/boardgames/:id", component: BoardGameDetail });
};
