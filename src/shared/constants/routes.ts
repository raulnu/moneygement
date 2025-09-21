import type React from 'react';
import Dashboard from '../../modules/dashboard/pages/page';
import Expenses from '../../modules/expenses/Expenses';
import Categories from '../../modules/categories/Categories';
import Statistics from '../../modules/statistics/Statistics';
import Settings from '../../modules/settings/Settings';
import NotFound from '../../modules/notFound/NotFound';

const ROUTE_DASHBOARD = '/';
const ROUTE_EXPENSES = '/expenses';
const ROUTE_CATEGORIES = '/categories';
const ROUTE_STATISTICS = '/statistics';
const ROUTE_SETTINGS = '/settings';
const ROUTE_NOT_FOUND = '*';

export interface IRoute {
  name: string;
  path: string;
  component: React.ComponentType;
}

export const componentRoutes: IRoute[] = [
  { name: 'Home', path: ROUTE_DASHBOARD, component: Dashboard },
  { name: 'Expenses', path: ROUTE_EXPENSES, component: Expenses },
  { name: 'Categories', path: ROUTE_CATEGORIES, component: Categories },
  { name: 'Statistics', path: ROUTE_STATISTICS, component: Statistics },
  { name: 'Settings', path: ROUTE_SETTINGS, component: Settings },
  { name: 'Not Found', path: ROUTE_NOT_FOUND, component: NotFound },
];
