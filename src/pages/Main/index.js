import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
  ProfileButtonEx,
  ProfileButtonTextEx,
  Button,
  Test,
  Test1,
} from './styles';

class Main extends Component {
  static navigationOptions = {
    title: 'Usuários',
  };

  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  // eslint-disable-next-line react/state-in-constructor
  state = {
    newUser: '',
    users: [],
    loading: false,
    error: false,
  };

  async componentDidMount() {
    const users = await AsyncStorage.getItem('users');

    if (users) {
      this.setState({ users: JSON.parse(users) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { users } = this.state;

    if (prevState.users !== users) {
      AsyncStorage.setItem('users', JSON.stringify(users));
    }
  }

  handleAddUser = async () => {
    this.setState({ loading: true });

    try {
      const { newUser, users } = this.state;

      if (newUser === '') {
        throw this.setState({ error: true });
      }

      const response = await api.get(`/users/${newUser}`);

      const hasRepo = users.find((u) => u.login === response.data.login);

      if (hasRepo) {
        throw this.setState({ error: true });
      }

      const data = {
        name: response.data.name,
        login: response.data.login,
        bio: response.data.bio,
        avatar: response.data.avatar_url,
      };

      this.setState({
        users: [...users, data],
        newUser: '',
        loading: false,
        error: false,
      });

      Keyboard.dismiss();
    } catch (err) {
      this.setState({ loading: false });
      Keyboard.dismiss();
    }
  };

  handleNavegate = (user) => {
    const { navigation } = this.props;

    navigation.navigate('User', { user });
  };

  async removeItemValue(user) {
    // eslint-disable-next-line react/destructuring-assignment
    const index = this.state.users.indexOf(user);

    // eslint-disable-next-line react/destructuring-assignment
    this.state.users.splice(index, 1);

    // eslint-disable-next-line react/destructuring-assignment
    await AsyncStorage.setItem('users', JSON.stringify(this.state.users));
    this.setState({ users: JSON.parse(await AsyncStorage.getItem('users')) });
  }

  render() {
    const { users, newUser, loading, error } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            value={newUser}
            onChangeText={(text) => this.setState({ newUser: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
            error={error}
          />
          <SubmitButton loading={loading} onPress={this.handleAddUser}>
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Icon name="add" size={20} color="#FFF" />
            )}
          </SubmitButton>
        </Form>

        <List
          data={users}
          keyExtractor={(user) => user.login}
          renderItem={({ item }) => (
            <User>
              <Test1>
                <Avatar source={{ uri: item.avatar }} />

                <Test>
                  <Name>{item.name}</Name>
                  <Bio>{item.bio}</Bio>
                </Test>
              </Test1>

              <Button>
                <ProfileButton onPress={() => this.handleNavegate(item)}>
                  <ProfileButtonText>Ver Perfil</ProfileButtonText>
                </ProfileButton>

                <ProfileButtonEx onPress={() => this.removeItemValue(item)}>
                  <ProfileButtonTextEx>Excluir</ProfileButtonTextEx>
                </ProfileButtonEx>
              </Button>
            </User>
          )}
        />
      </Container>
    );
  }
}

export default Main;
