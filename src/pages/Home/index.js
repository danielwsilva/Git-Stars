/* eslint-disable global-require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  View,
  Text,
  Avatar,
  ProfileButton,
  ProfileButtonText,
  TextBottom,
} from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  static navigationOptions = {
    title: 'GIT STARS',
    headerShown: false,
  };

  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleNavegate = () => {
    const { navigation } = this.props;

    navigation.navigate('Main');
  };

  render() {
    return (
      <Container colors={['#565ee8', '#666cd1', '#363ed1']}>
        <View>
          <Text>GIT STARS</Text>
          <Avatar source={require('../assets/reveja.png')} />

          <ProfileButton onPress={() => this.handleNavegate()}>
            <ProfileButtonText>Entrar</ProfileButtonText>
          </ProfileButton>

          <TextBottom>
            Lorem ipsum dolor sit amet, consecleluer lorem ipsum dolor sit amet.
          </TextBottom>
        </View>
      </Container>
    );
  }
}

export default Home;
