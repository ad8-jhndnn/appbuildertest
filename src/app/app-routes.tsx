import { redirect } from 'react-router-dom';
import IgView from './ig-view/ig-view';

export const routes = [
  { index: true, loader: () => redirect('ig-view') },
  { path: 'ig-view', element: <IgView />, text: 'Ig View' }
];
