import React from 'react';
import './styles.css';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list
  for (let i = 1; i < list.length+1; i++) {
    list[i-1].id = i
    }

  return (
    <div className='App'>
      <div className='App-head'>
        <h1>Приложение на чистом JS</h1>
      </div>
      <div className='App-controls'>
        <button onClick={() => store.addItem()}>Добавить</button>
      </div>
      <div className='App-center'>
        <div className='List'>{
          list.map(item =>
              <div key={item.id} className='List-item'>
                <div className={'Item' + (item.selected ? ' Item_selected' : '')}
                     onClick={() => {
                       store.selectItem(item.code);
                       }}>
                  <div className='Item-code'>{item.id}</div>
                  <div className='Item-title'>{item.title} {item.count && ` | Выделяли ${item.count} раз`}</div>
                  <div className='Item-actions'>
                    <button onClick={() => store.deleteItem(item.code)}>
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default App;
