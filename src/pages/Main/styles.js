import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #fff;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid ${(props) => (props.error ? '#F08080' : '#eee')};
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #565ee8;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 0px 10px;
  background: #e9e9f7;
  border-radius: 4px;
  padding: 10px 15px;
`;

export const Test1 = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0px 5px;
`;

export const Test = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 10px;
`;

export const Avatar = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 32px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: left;
`;

export const Button = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const ProfileButton = styled(RectButton)`
  flex: 1;
  margin-left: 10px;
  padding: 0 12px;
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: #565ee8;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const ProfileButtonEx = styled(RectButton)`
  flex: 1;
  margin-left: 10px;
  padding: 0 12px;
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: #f84c67;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const ProfileButtonTextEx = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
