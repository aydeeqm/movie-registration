import React, { Component } from 'react';
import Layout from  '~components/layout';
import  { Header } from './components/Header';
import { TableView } from './components/TableView';

export default class Home extends Component {
  render() {
    return <Layout>
      <Header />
      <TableView />
    </Layout>
  }
}
