import {View, Text} from 'react-native';
import {Link} from '../../components/Router';

const Screen1 = () => {
  return (
    <View>
      <Text>Screen 1</Text>
      <Link to="/">
        <Text>Home</Text>
      </Link>
      <Link to="/screen2">
        <Text>screen2</Text>
      </Link>
    </View>
  );
};

export default Screen1;
