import HomeRoutes from './modules/home/home.routes';
import AboutRoutes from './modules/about/about.routes';
const RoutesBootstrap = []
  .concat(HomeRoutes)
  .concat(AboutRoutes);
export default RoutesBootstrap;

