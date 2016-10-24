import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import AuthorsPage from './components/author/AuthorsPage';
import TrackerPage from './components/tracker/TrackerPage';
import LoginPage from './components/login/LoginPage';
import SignupPage from './components/signup/SignupPage';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="courses" component={CoursesPage}/>
        <Route path="course" component={ManageCoursePage}/>
        <Route path="course/:id" component={ManageCoursePage}/>
        <Route path="authors" component={AuthorsPage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="signup" component={SignupPage}/>
        <Route path="login" component={LoginPage}/>
        <Route path="tracker" component={TrackerPage}/>
    </Route>
);
