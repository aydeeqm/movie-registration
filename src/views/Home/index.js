import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Layout from  '~components/layout';
import  { Header } from './components/Header';
import { TableView } from './components/TableView';
import { Modal } from '~components/modal';
import RegisterForm from './components/RegisterForm';
import EditForm from './components/EditForm';
import { fetchInformation, getInformation, resetInformation, createMovie } from '~redux/modules/home';
import { getMovies, postMovies, deleteMovie, updateMovie } from '~redux/helpers/getInformation';

class Home extends Component {
  state={
    isShowModal: false,
    isShowEditModal: false,
    movies: [],
    idUpdate: 0,
    keyFirebase: 0,
  }
  componentDidMount() {
    getMovies.then(res => {
      this.props.dispatch(fetchInformation(res));
      this.setState({ movies: res });
    });
  }

  onCreateMovie = data => {
    const body = {
      ...data,
      status: data.status === '1'? true : false,
      date: moment(data.date).format('DD/MM/YYYY')
    }
    
    postMovies(body)
      .then(res => {
        this.props.dispatch(createMovie())
        this.setState((state) => ({
          movies: [...state.movies, {id: res.id, ...body}],
          isShowModal: false,
        }));
      })
      .catch(error => console.error(error));
  }

  // Delte form
  onDeleteMovie = ({ currentTarget }) => {
    const { movies } = this.state;
    deleteMovie(currentTarget.id).then(res => {
      const newMovies = movies.filter(item => item.id !== currentTarget.id);
      this.setState({ movies: newMovies })
    });
  }

  // Edit form
  onEditMovie = ({ currentTarget }) => {
    const id = (currentTarget.dataset.id && JSON.parse(currentTarget.dataset.id));
    this.setState({
      isShowEditModal: true,
      idUpdate: id,
      keyFibebase: currentTarget.id,
    })
  }

  onUpdateMovie = data => {
    const body = {
      ...data,
      status: data.status === '1'? true : false,
      date: moment(data.date).format('DD/MM/YYYY')
    }
    updateMovie(this.state.keyFirebase, body ).then(res => {
      console.log(res);
    })
  }

  onHandleModal = () => {
    this.setState({ isShowModal: true })
  }
  onCloseModal = () => {
    this.props.dispatch(resetInformation());
    this.setState({ isShowModal: false, isShowEditModal: false });
  }

  render() {
    const { isShowModal, isShowEditModal, movies, idUpdate } = this.state;
    return <Layout>
      <Header handleModal={this.onHandleModal}/>
      <TableView
        movies={movies}
        onDelete={this.onDeleteMovie}
        onEdit={this.onEditMovie}
      />
      <Modal
        title='Agregar Película'
        isShow={isShowModal}
        onClose={this.onCloseModal}
      >
        <RegisterForm
          onSubmit={this.onCreateMovie}
        />
      </Modal>
      <Modal
        title='Editar Película'
        isShow={isShowEditModal}
        onClose={this.onCloseModal}
      >
        <EditForm
          onSubmit={this.onUpdateMovie}
          id={idUpdate}
        />
      </Modal>
    </Layout>
  }
}

const stateToProps = state => {
  const creating = getInformation(state);

  return {
    creating,
  };
};

export default connect(stateToProps)(Home);
