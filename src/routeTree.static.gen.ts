/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// Static build route tree — excludes server-only routes (sitemap.xml).
// Generated for: vite.static.config.ts (GitHub Pages SPA build)

import { Route as rootRouteImport } from './routes/__root'
import { Route as WishlistRouteImport } from './routes/wishlist'
import { Route as TrackOrderRouteImport } from './routes/track-order'
import { Route as SignupRouteImport } from './routes/signup'
import { Route as ShopRouteImport } from './routes/shop'
import { Route as LoginRouteImport } from './routes/login'
import { Route as ForgotPasswordRouteImport } from './routes/forgot-password'
import { Route as DashboardRouteImport } from './routes/dashboard'
import { Route as ContactRouteImport } from './routes/contact'
import { Route as CheckoutRouteImport } from './routes/checkout'
import { Route as CartRouteImport } from './routes/cart'
import { Route as AboutRouteImport } from './routes/about'
import { Route as IndexRouteImport } from './routes/index'
import { Route as SuperadminLoginRouteImport } from './routes/superadmin.login'
import { Route as SuperadminDashboardRouteImport } from './routes/superadmin.dashboard'
import { Route as ProductProductIdRouteImport } from './routes/product.$productId'
import { Route as OrderConfirmationOrderIdRouteImport } from './routes/order-confirmation.$orderId'
import { Route as AdminLoginRouteImport } from './routes/admin.login'
import { Route as AdminDashboardRouteImport } from './routes/admin.dashboard'

const WishlistRoute = WishlistRouteImport.update({
  id: '/wishlist',
  path: '/wishlist',
  getParentRoute: () => rootRouteImport,
} as any)
const TrackOrderRoute = TrackOrderRouteImport.update({
  id: '/track-order',
  path: '/track-order',
  getParentRoute: () => rootRouteImport,
} as any)
const SignupRoute = SignupRouteImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => rootRouteImport,
} as any)
const ShopRoute = ShopRouteImport.update({
  id: '/shop',
  path: '/shop',
  getParentRoute: () => rootRouteImport,
} as any)
const LoginRoute = LoginRouteImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRouteImport,
} as any)
const ForgotPasswordRoute = ForgotPasswordRouteImport.update({
  id: '/forgot-password',
  path: '/forgot-password',
  getParentRoute: () => rootRouteImport,
} as any)
const DashboardRoute = DashboardRouteImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRouteImport,
} as any)
const ContactRoute = ContactRouteImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRouteImport,
} as any)
const CheckoutRoute = CheckoutRouteImport.update({
  id: '/checkout',
  path: '/checkout',
  getParentRoute: () => rootRouteImport,
} as any)
const CartRoute = CartRouteImport.update({
  id: '/cart',
  path: '/cart',
  getParentRoute: () => rootRouteImport,
} as any)
const AboutRoute = AboutRouteImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const SuperadminLoginRoute = SuperadminLoginRouteImport.update({
  id: '/superadmin/login',
  path: '/superadmin/login',
  getParentRoute: () => rootRouteImport,
} as any)
const SuperadminDashboardRoute = SuperadminDashboardRouteImport.update({
  id: '/superadmin/dashboard',
  path: '/superadmin/dashboard',
  getParentRoute: () => rootRouteImport,
} as any)
const ProductProductIdRoute = ProductProductIdRouteImport.update({
  id: '/product/$productId',
  path: '/product/$productId',
  getParentRoute: () => rootRouteImport,
} as any)
const OrderConfirmationOrderIdRoute = OrderConfirmationOrderIdRouteImport.update({
  id: '/order-confirmation/$orderId',
  path: '/order-confirmation/$orderId',
  getParentRoute: () => rootRouteImport,
} as any)
const AdminLoginRoute = AdminLoginRouteImport.update({
  id: '/admin/login',
  path: '/admin/login',
  getParentRoute: () => rootRouteImport,
} as any)
const AdminDashboardRoute = AdminDashboardRouteImport.update({
  id: '/admin/dashboard',
  path: '/admin/dashboard',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/cart': typeof CartRoute
  '/checkout': typeof CheckoutRoute
  '/contact': typeof ContactRoute
  '/dashboard': typeof DashboardRoute
  '/forgot-password': typeof ForgotPasswordRoute
  '/login': typeof LoginRoute
  '/shop': typeof ShopRoute
  '/signup': typeof SignupRoute
  '/track-order': typeof TrackOrderRoute
  '/wishlist': typeof WishlistRoute
  '/admin/dashboard': typeof AdminDashboardRoute
  '/admin/login': typeof AdminLoginRoute
  '/order-confirmation/$orderId': typeof OrderConfirmationOrderIdRoute
  '/product/$productId': typeof ProductProductIdRoute
  '/superadmin/dashboard': typeof SuperadminDashboardRoute
  '/superadmin/login': typeof SuperadminLoginRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/cart': typeof CartRoute
  '/checkout': typeof CheckoutRoute
  '/contact': typeof ContactRoute
  '/dashboard': typeof DashboardRoute
  '/forgot-password': typeof ForgotPasswordRoute
  '/login': typeof LoginRoute
  '/shop': typeof ShopRoute
  '/signup': typeof SignupRoute
  '/track-order': typeof TrackOrderRoute
  '/wishlist': typeof WishlistRoute
  '/admin/dashboard': typeof AdminDashboardRoute
  '/admin/login': typeof AdminLoginRoute
  '/order-confirmation/$orderId': typeof OrderConfirmationOrderIdRoute
  '/product/$productId': typeof ProductProductIdRoute
  '/superadmin/dashboard': typeof SuperadminDashboardRoute
  '/superadmin/login': typeof SuperadminLoginRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/cart': typeof CartRoute
  '/checkout': typeof CheckoutRoute
  '/contact': typeof ContactRoute
  '/dashboard': typeof DashboardRoute
  '/forgot-password': typeof ForgotPasswordRoute
  '/login': typeof LoginRoute
  '/shop': typeof ShopRoute
  '/signup': typeof SignupRoute
  '/track-order': typeof TrackOrderRoute
  '/wishlist': typeof WishlistRoute
  '/admin/dashboard': typeof AdminDashboardRoute
  '/admin/login': typeof AdminLoginRoute
  '/order-confirmation/$orderId': typeof OrderConfirmationOrderIdRoute
  '/product/$productId': typeof ProductProductIdRoute
  '/superadmin/dashboard': typeof SuperadminDashboardRoute
  '/superadmin/login': typeof SuperadminLoginRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/cart'
    | '/checkout'
    | '/contact'
    | '/dashboard'
    | '/forgot-password'
    | '/login'
    | '/shop'
    | '/signup'
    | '/track-order'
    | '/wishlist'
    | '/admin/dashboard'
    | '/admin/login'
    | '/order-confirmation/$orderId'
    | '/product/$productId'
    | '/superadmin/dashboard'
    | '/superadmin/login'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/cart'
    | '/checkout'
    | '/contact'
    | '/dashboard'
    | '/forgot-password'
    | '/login'
    | '/shop'
    | '/signup'
    | '/track-order'
    | '/wishlist'
    | '/admin/dashboard'
    | '/admin/login'
    | '/order-confirmation/$orderId'
    | '/product/$productId'
    | '/superadmin/dashboard'
    | '/superadmin/login'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/cart'
    | '/checkout'
    | '/contact'
    | '/dashboard'
    | '/forgot-password'
    | '/login'
    | '/shop'
    | '/signup'
    | '/track-order'
    | '/wishlist'
    | '/admin/dashboard'
    | '/admin/login'
    | '/order-confirmation/$orderId'
    | '/product/$productId'
    | '/superadmin/dashboard'
    | '/superadmin/login'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  CartRoute: typeof CartRoute
  CheckoutRoute: typeof CheckoutRoute
  ContactRoute: typeof ContactRoute
  DashboardRoute: typeof DashboardRoute
  ForgotPasswordRoute: typeof ForgotPasswordRoute
  LoginRoute: typeof LoginRoute
  ShopRoute: typeof ShopRoute
  SignupRoute: typeof SignupRoute
  TrackOrderRoute: typeof TrackOrderRoute
  WishlistRoute: typeof WishlistRoute
  AdminDashboardRoute: typeof AdminDashboardRoute
  AdminLoginRoute: typeof AdminLoginRoute
  OrderConfirmationOrderIdRoute: typeof OrderConfirmationOrderIdRoute
  ProductProductIdRoute: typeof ProductProductIdRoute
  SuperadminDashboardRoute: typeof SuperadminDashboardRoute
  SuperadminLoginRoute: typeof SuperadminLoginRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/wishlist': {
      id: '/wishlist'
      path: '/wishlist'
      fullPath: '/wishlist'
      preLoaderRoute: typeof WishlistRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/track-order': {
      id: '/track-order'
      path: '/track-order'
      fullPath: '/track-order'
      preLoaderRoute: typeof TrackOrderRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/shop': {
      id: '/shop'
      path: '/shop'
      fullPath: '/shop'
      preLoaderRoute: typeof ShopRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/forgot-password': {
      id: '/forgot-password'
      path: '/forgot-password'
      fullPath: '/forgot-password'
      preLoaderRoute: typeof ForgotPasswordRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/checkout': {
      id: '/checkout'
      path: '/checkout'
      fullPath: '/checkout'
      preLoaderRoute: typeof CheckoutRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/cart': {
      id: '/cart'
      path: '/cart'
      fullPath: '/cart'
      preLoaderRoute: typeof CartRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/superadmin/login': {
      id: '/superadmin/login'
      path: '/superadmin/login'
      fullPath: '/superadmin/login'
      preLoaderRoute: typeof SuperadminLoginRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/superadmin/dashboard': {
      id: '/superadmin/dashboard'
      path: '/superadmin/dashboard'
      fullPath: '/superadmin/dashboard'
      preLoaderRoute: typeof SuperadminDashboardRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/product/$productId': {
      id: '/product/$productId'
      path: '/product/$productId'
      fullPath: '/product/$productId'
      preLoaderRoute: typeof ProductProductIdRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/order-confirmation/$orderId': {
      id: '/order-confirmation/$orderId'
      path: '/order-confirmation/$orderId'
      fullPath: '/order-confirmation/$orderId'
      preLoaderRoute: typeof OrderConfirmationOrderIdRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/admin/login': {
      id: '/admin/login'
      path: '/admin/login'
      fullPath: '/admin/login'
      preLoaderRoute: typeof AdminLoginRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/admin/dashboard': {
      id: '/admin/dashboard'
      path: '/admin/dashboard'
      fullPath: '/admin/dashboard'
      preLoaderRoute: typeof AdminDashboardRoute
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  CartRoute: CartRoute,
  CheckoutRoute: CheckoutRoute,
  ContactRoute: ContactRoute,
  DashboardRoute: DashboardRoute,
  ForgotPasswordRoute: ForgotPasswordRoute,
  LoginRoute: LoginRoute,
  ShopRoute: ShopRoute,
  SignupRoute: SignupRoute,
  TrackOrderRoute: TrackOrderRoute,
  WishlistRoute: WishlistRoute,
  AdminDashboardRoute: AdminDashboardRoute,
  AdminLoginRoute: AdminLoginRoute,
  OrderConfirmationOrderIdRoute: OrderConfirmationOrderIdRoute,
  ProductProductIdRoute: ProductProductIdRoute,
  SuperadminDashboardRoute: SuperadminDashboardRoute,
  SuperadminLoginRoute: SuperadminLoginRoute,
}

export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof import('./router.static').getStaticRouter>
  }
}
