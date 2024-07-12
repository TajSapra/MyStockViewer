import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Dropdown from './components/DropDown';
import { Creators } from './state';
import { useEffect, useRef } from 'react';
import { addData, updateInterval, updateTime } from './state/actions';
function App() {
  const { valueReducer } = useSelector(state => state) || {};
  const dispatch = useDispatch();
  const intervalRef = useRef();

  const formatTime = (timestamp_ms) => {
    let date = new Date(timestamp_ms);
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    let formattedDateTime = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
    return formattedDateTime;
  };

  const getApiData = async () => {
    dispatch(updateTime(Date.now()));
    const url = `http://127.0.0.1:4000/fetchPriceData/${valueReducer.value || 'AAPL'}`;
    const response = await fetch(url);
    const json = await response.json();
    dispatch(addData(json));
  };

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    getApiData();
    intervalRef.current = setInterval(() => {
      getApiData();
    }, 10000);
    dispatch(updateInterval(intervalRef.current));

    return () => clearInterval(intervalRef.current);
  }, [valueReducer.value, dispatch]);

  return (
    <div className="App">
      <h1>My Stock Price Viewer</h1>
      <div className="dropdown-container">
        <Dropdown 
          options={['AAPL', 'MSFT', 'TSLA', 'NVDA', 'AMZN']} 
          onSelect={(key) => {
            dispatch(Creators.changeVal(key));
          }} 
        />
      </div>
      <div className="selected-value">Selected Value: {valueReducer.value || 'AAPL'}</div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {((valueReducer || {}).data || []).map((currData, index) => {
              const { Date, price } = currData;
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{formatTime(Date)}</td>
                  <td>{price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="last-refreshed">Last Refreshed: {formatTime(valueReducer.lastRefreshTime)}</div>
    </div>
  );
}

export default App;
