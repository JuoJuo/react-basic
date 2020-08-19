import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Counter, Counter2, Counter3, Counter4, Counter5 } from './001useState'
import { ABC } from './002useCallback-useMemo'
import { CounterUseReducer } from './003useReducer'
import { App } from './004useContext'

ReactDOM.render(<App num={5}></App>, document.getElementById('root'));
