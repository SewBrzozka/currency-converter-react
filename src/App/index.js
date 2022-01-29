import { Form } from './Form';
import { Header } from './Header';
import { Container } from "./Container";
import { Clock } from './Clock';

function App() {

  return (
    <Container>
      <Clock />
      <Header />
      <Form />
    </Container>
  );
}

export default App;
