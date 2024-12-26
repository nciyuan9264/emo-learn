import React, { Fragment } from 'react';
import './index.scss';
import { Add } from '@emo-learn/components';
const App = () => (
  <Fragment>
    {/* <Header />
      <p className="worker">PIA Worker 功能演示：{data.desc}</p>
      <SectionList /> */}
    <Add a={1} b={2} />
  </Fragment>
);

export default App;
