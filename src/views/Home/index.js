import React, { Component } from 'react';
import Layout from  '~components/layout';
import  { Header } from './components/Header';
import { TableView } from './components/TableView';
import { Modal } from '~components/modal';
import RegisterForm from './components/RegisterForm';

export default class Home extends Component {
  render() {
    return <Layout>
      <Header />
      <TableView />
      <Modal title='Agregar Película'>
        <RegisterForm />
      </Modal>
    </Layout>
  }
}
