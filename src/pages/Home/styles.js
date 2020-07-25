import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  flex: 1;
  padding: 30px;
  background: #565ee8;
`;

export const View = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin-top: 100px;
`;

export const Avatar = styled.Image`
  height: 270px;
  width: 270px;
  margin-top: 10px;
`;

export const ProfileButton = styled(RectButton)`
  margin-left: 10px;
  padding: 0 12px;
  margin-top: 100px;
  border-radius: 4px;
  background: #f84c67;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 250px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const TextBottom = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: center;
  margin-top: 20px;
`;
