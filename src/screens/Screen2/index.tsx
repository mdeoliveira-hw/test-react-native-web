import {Text, View} from 'react-native';
import {Link} from '../../components/Router';

const Screen2 = () => {
  return (
    <View>
      <Text>Screen 2</Text>
      <Link to="/">
        <Text>Home</Text>
      </Link>
      <Link to="/screen1">
        <Text>screen1</Text>
      </Link>
    </View>
  );
};

export default Screen2;
