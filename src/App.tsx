import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.scss";
import cn from 'classnames';

import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import { TabsPage } from "./components/TabsPage";
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink 
            to="/" 
            className={
              ({ isActive }) => cn('navbar-item', { 'is-active': isActive })
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/tabs" 
            className={
              ({ isActive }) => cn('navbar-item', { 'is-active': isActive })
            }
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
        <Route path="/">
            <Route index element={<h1 className="title">Home page</h1>} />
            <Route path="/home" element={<Navigate to="/" replace />} />

            <Route path="tabs">
              <Route index element={<TabsPage tabs={tabs}/>} />
              <Route path=":tabId" element={<TabsPage tabs={tabs}/>} />
            </Route>
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </div>
  </>
);
