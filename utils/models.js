import { DataTypes, Model } from 'sequelize';
import { sequelize } from './db.js';

const Customer = sequelize.define('Customer', {
  // Model Attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Product = sequelize.define('Product', {
  // Model Attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  quantity: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
});

const Order = sequelize.define(
  'Order',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    // customer id
    // order items
    // payment
  },
  { timestamps: true }
);

const OrderItem = sequelize.define('OrderItem', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  // product
  // quantity
});
const Payment = sequelize.define(
  'Payment',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    method: {
      type: DataTypes.ENUM,
      values: ['cash', 'visa'],
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['complete', 'pending', 'incomplete'],
      allowNull: false,
    },

    // order id
  },
  { timestamps: true }
);

(async () => {
  await sequelize.sync();
  console.log('All models were synchronized successfully.');

})();