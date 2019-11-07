import { compile } from 'path-to-regexp';

const routes = {
  login: '/login',
  home: '/',
  compile: (path, keys) => compile(path)(keys),
};

export default routes;
