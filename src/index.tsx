import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer de website",
          type: 'deposit',
          category: 'Dev',
          amount: 2000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: "Pagamento teste",
          type: 'deposit',
          category: 'Investimentos',
          amount: 1000,
          createdAt: new Date('2021-08-12 08:00:00')
        },
        {
          id: 3,
          title: "Compra de casa",
          type: 'withdraw',
          category: 'Imoveis',
          amount: 1000,
          createdAt: new Date('2021-08-12 08:00:00')
        },
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);