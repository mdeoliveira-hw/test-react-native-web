import {View, Text} from 'react-native';
import {Link} from 'react-router-native';
import Button from '../../components/Button';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Button />
      <Link to="/screen1">
        <Text>Screen1</Text>
      </Link>
      <Link to="/screen2">
        <Text>Screen2</Text>
      </Link>
    </View>
  );
};

export default Home;
