// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import HelloWorld from './helloworld';

export function App() {
  return (
    <div>
      <HelloWorld />
      
      {/* <NxWelcome title="frontend" /> */}
    </div>
  );
}

export default App;
