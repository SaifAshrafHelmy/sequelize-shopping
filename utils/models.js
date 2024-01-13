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
  // const customer = Customer.build({
  //   firstName: 'Saif4',
  //   lastName: 'Ashraf3',
  //   phoneNumber: '+201270466650',
  //   address: 'Cairo, Egypt',
  // });
  // customer.set({
  //   firstName: "Hamada",
  //   lastName: "Abdo"
  // })
  // await customer.save();
  // await customer.update({firstName: "The greatest customer4"})
  // console.log(customer.toJSON());

  // const customer = await Customer.findOne();
  // await customer.destroy();
  // const product =  Product.build({name: "Laptop M3", price: 1500, quantity: 50, category: "Electronics"})
  // await product.save({fields: ['name', 'price', 'quantity']})
  const firstProduct = await Product.findOne({
    where: {
      id: 6,
    },
  });
  const prodId = firstProduct.toJSON()['id'];

  await firstProduct.increment({
    quantity: 3,
    price: 50,
  });
  const firstProductAgain = await Product.findOne({
    where: {
      id: prodId,
    },
  });

  console.log(firstProductAgain.toJSON());

  // End the connection
  sequelize.close();
})();
