const initialProducts = [
  {
    nameProduct: 'Iphone 14',
    imgProduct: 'images/iphone14.jpg',
    category: 'Mobile Phones',
		price: 999,
    description: 'Apple iPhone 14 Pro 128GB (Deep Purple)',
    videoUrl: 'https://youtu.be/tfZi4vVB2qM'
  },
  {
    nameProduct: 'Iphone 13',
    imgProduct: 'images/iphone13.jpg',
    category: 'Mobile Phones',
		price: 950,
    description: 'Apple iPhone 13 256GB (Blue)',
    videoUrl: 'https://youtu.be/ngJD5j7YbbE'
  },
  {
    nameProduct: 'Iphone 12',
    imgProduct: 'images/iphone12.jpg',
    category: 'Mobile Phones',
		price: 800,
    description: 'Apple iPhone 12 256GB (Purple)',
    videoUrl: 'https://youtu.be/kdPnauqWZms'
  },
  {
    nameProduct: 'AMD Ryzen',
    imgProduct: 'images/AMDRyzen.webp',
    category: 'Desktops',
		price: 1100,
    description: 'Системний блок QUBE Ігровий QB i5 11400F GTX 1660 SUPER 6GB 1622',
    videoUrl: 'https://youtu.be/LkesphDyB_w'
  },
  {
    nameProduct: 'ARTLINE Gaming X72v06',
    imgProduct: 'images/ARTLINEGamingX72v06.webp',
    category: 'Desktops',
		price: 1200,
    description: 'Комп\'ютер ARTLINE Gaming X72v06',
    videoUrl: 'https://youtu.be/1ROW9w1aFFs'
  },
  {
    nameProduct: 'IntelCore i5-11400F',
    imgProduct: 'images/IntelCorei5-11400F.webp',
    category: 'Desktops',
		price: 1300,
    description: 'Ігровий ПК AMD Ryzen 5 3600 (6(12) ядер по 3.6-4.2 GHz) NEW / 16GB DDR4 NEW / 500GB SSD NEW / GeForce GTX 1060, 6 GB GDDR5, 192-bit / 500W NEW б/в',
    videoUrl: 'https://youtu.be/-peR-lW4E98'
  },
  {
    nameProduct: 'Acer Aspire 7',
    imgProduct: 'images/AcerAspire7.webp',
    category: 'Laptops',
		price: 1100,
    description: 'Ноутбук Acer Aspire 7 A715-42G-R0VS (NH.QBFEU.00A) Charcoal Black / AMD Ryzen 5 5500U / RAM 8 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650',
    videoUrl: 'https://youtu.be/rHEv34VHSjg'
  },
  {
    nameProduct: 'ASUS Laptop X515EA-BQ2066',
    imgProduct: 'images/ASUSLaptopX515EA-BQ2066.webp',
    category: 'Laptops',
		price: 900,
    description: 'Ноутбук ASUS Laptop X515EA-BQ2066 (90NB0TY1-M00VF0) Slate Grey / 15.6" IPS Full HD / Intel Core i3-1115G4 / RAM 12 ГБ / SSD 512 ГБ',
    videoUrl: 'https://youtu.be/m0m5NUICwP0'
  },
  {
    nameProduct: 'Lenovo Idea Pad 3',
    imgProduct: 'images/LenovoIdeaPad3.webp',
    category: 'Laptops',
		price: 770,
    description: 'Ноутбук Lenovo IdeaPad 3 15IAU7 (82RK00FHRA) Arctic Grey / 15.6" IPS Full HD / Intel Core i5-1235U / RAM 16 ГБ / SSD 512 ГБ',
    videoUrl: 'https://youtu.be/NvVFETD72pg'
  }
];

let currentProducts = [...initialProducts];

function generateCategoryElements(products) {
  const categoriesContainer = document.querySelector('.categories');
  categoriesContainer.textContent = '';

  const categoryTitle = document.createElement('h3');
  categoryTitle.innerText = 'Products catalogue:';

  const categoryList = document.createElement('ul');
  categoryList.classList.add('category-list');

  const categories = [...new Set(products.map(product => product.category))];

  categories.forEach(category => {
    const listItem = document.createElement('li');
    listItem.classList.add('category-item');

    const title = document.createElement('h4');
    title.textContent = category;

    listItem.appendChild(title);
    categoryList.appendChild(listItem);

    listItem.addEventListener('click', () => {
      renderProductsByCategory(category);
    });
  });

  categoriesContainer.appendChild(categoryTitle);
  categoriesContainer.appendChild(categoryList);
}

function renderProductsByCategory(category) {
  const productsContainer = document.querySelector('.products');
  productsContainer.textContent = '';

  const filteredProducts = currentProducts.filter(product => product.category === category);

  filteredProducts.forEach(product => {
    const productCard = createProductCard(product);
    productsContainer.appendChild(productCard);
  });
}

function createProductCard(item) {
  const cardProduct = document.createElement('div');
  cardProduct.classList.add('cardProduct');

  const title = document.createElement('h4');
  title.innerText = item.nameProduct;

  const imgProduct = document.createElement('img');
  imgProduct.classList.add('img');
  imgProduct.src = item.imgProduct;

  cardProduct.append(title, imgProduct);

  cardProduct.addEventListener('click', () => {
    const productInfo = createProductInfo(item);
    const productInfoContainer = document.querySelector('.product-info');
    productInfoContainer.innerHTML = '';
    productInfoContainer.appendChild(productInfo);
  });

  return cardProduct;
}

function createProductInfo(item) {
  const CardProductsInfo = document.createElement('div');
  CardProductsInfo.classList.add('cardProduct');

  const productsTitle = document.createElement('h3');
  productsTitle.innerText = `Додаткова інформація про ${item.nameProduct}:`;

  const textDescription = document.createElement('p');
  textDescription.innerText = item.description;

  const productInfoVideoUrl = document.createElement('a');
  productInfoVideoUrl.href = item.videoUrl;
  productInfoVideoUrl.innerText = `Переглянути відео про: ${item.nameProduct}`;

  const wrapProductBuyButton = document.createElement('div');
  wrapProductBuyButton.classList.add('buy-button');

  const productBuyButton = document.createElement('a');
  productBuyButton.innerText = `Купити за ${item.price} $`;

  productBuyButton.addEventListener('click', () => {
    showOrderForm(item);
  });

  CardProductsInfo.append(productsTitle, textDescription, productInfoVideoUrl, wrapProductBuyButton);
  wrapProductBuyButton.appendChild(productBuyButton);

  return CardProductsInfo;
}

function resetProgramState() {
  currentProducts = [...initialProducts];
  generateCategoryElements(currentProducts);

  const productsContainer = document.querySelector('.products');
  productsContainer.innerHTML = '';

  const productInfoContainer = document.querySelector('.product-info');
  productInfoContainer.innerHTML = '';

  const categoriesContainer = document.querySelector('.categories');
  categoriesContainer.style.display = 'block';
}

generateCategoryElements(currentProducts);

function showOrderForm(item) {
  const orderFormContainer = document.querySelector('.order-form-container');
  orderFormContainer.innerHTML = '';

  const orderForm = document.createElement('form');
  orderForm.id = 'form';

  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Ім\'я:';
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.required = true;

  const lastNameLabel = document.createElement('label');
  lastNameLabel.textContent = 'Фамілія:';
  const lastNameInput = document.createElement('input');
  lastNameInput.type = 'text';
  lastNameInput.required = true;

  const cityLabel = document.createElement('label');
  cityLabel.textContent = 'Місто:';
  const citySelect = document.createElement('select');
  citySelect.required = true;

  const cities = ['Київ', 'Львів', 'Харків', 'Одеса', 'Дніпро'];

  cities.forEach((city) => {
    const option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  });

  const deliveryLabel = document.createElement('label');
  deliveryLabel.textContent = 'Пункт доставки:';
  const deliveryInput = document.createElement('input');
  deliveryInput.type = 'text';
  deliveryInput.required = true;

  const paymentLabel = document.createElement('label');
  paymentLabel.textContent = 'Спосіб оплати:';

  const paymentRadioContainer = document.createElement('div');
  paymentRadioContainer.classList.add('radio-container');

  const cashOnDeliveryLabel = document.createElement('label');
  cashOnDeliveryLabel.textContent = 'Готівкою при отриманні:';
  const cashOnDeliveryInput = document.createElement('input');
  cashOnDeliveryInput.type = 'radio';
  cashOnDeliveryInput.name = 'payment-method';
  cashOnDeliveryInput.value = 'cash';
  cashOnDeliveryInput.required = true;

  const creditCardLabel = document.createElement('label');
  creditCardLabel.textContent = 'Оплата банківською карткою:';
  const creditCardInput = document.createElement('input');
  creditCardInput.type = 'radio';
  creditCardInput.name = 'payment-method';
  creditCardInput.value = 'credit-card';
  creditCardInput.required = true;

  const quantityLabel = document.createElement('label');
  quantityLabel.textContent = 'Кількість:';
  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.required = true;
  quantityInput.min = '1';

  const commentLabel = document.createElement('label');
  commentLabel.textContent = 'Коментар:';
  const commentTextarea = document.createElement('textarea');
  commentTextarea.rows = '3';

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Оформити замовлення';
  submitButton.classList.add('sumbit-button');

  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (orderForm.checkValidity()) {
      const order = {
        product: item.nameProduct,
        price: item.price,
        name: nameInput.value,
        lastName: lastNameInput.value,
        city: citySelect.value,
        deliveryPoint: deliveryInput.value,
        paymentMethod: paymentRadioContainer.querySelector('input[name="payment-method"]:checked').value,
        quantity: quantityInput.value,
        comment: commentTextarea.value
      };
      displayOrderConfirmation(order);
      saveOrderToLocalStorage(order);
    } else {
      orderForm.reportValidity();
      
    }
    orderFormContainer.style.display = 'none';
  });

  orderFormContainer.style.display = 'block';

  orderForm.appendChild(nameLabel);
  orderForm.appendChild(nameInput);
  orderForm.appendChild(lastNameLabel);
  orderForm.appendChild(lastNameInput);
  orderForm.appendChild(cityLabel);
  orderForm.appendChild(citySelect);
  orderForm.appendChild(deliveryLabel);
  orderForm.appendChild(deliveryInput);
  orderForm.appendChild(paymentLabel);
  orderForm.appendChild(paymentRadioContainer);
  paymentRadioContainer.appendChild(cashOnDeliveryLabel);
  paymentRadioContainer.appendChild(cashOnDeliveryInput);
  paymentRadioContainer.appendChild(creditCardLabel);
  paymentRadioContainer.appendChild(creditCardInput);
  orderForm.appendChild(quantityLabel);
  orderForm.appendChild(quantityInput);
  orderForm.appendChild(commentLabel);
  orderForm.appendChild(commentTextarea);
  orderForm.appendChild(submitButton);

  orderFormContainer.appendChild(orderForm);

  const firstInput = orderForm.querySelector('input, select, textarea');
  if (firstInput) {
    firstInput.focus();
    firstInput.scrollIntoView({ behavior: 'smooth' });
  }
}

function saveOrderToLocalStorage(order) {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
}

function showMyOrders() {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const ordersContainer = document.querySelector('.orders-container');
  ordersContainer.innerHTML = '';

  if (orders.length === 0) {
    const noOrdersMessage = document.createElement('p');
    noOrdersMessage.textContent = 'У вас немає збережених замовлень.';
    ordersContainer.appendChild(noOrdersMessage);
  } else {
    const ordersList = document.createElement('ul');
    ordersList.classList.add('orders-list');

    orders.forEach((order, index) => {
      const orderItem = document.createElement('li');
      orderItem.textContent = `Замовлення №${index + 1} - Дата: ${new Date().toLocaleDateString()}, Ціна: ${order.price} $`;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Видалити';
      deleteButton.classList.add('delete-button');
      deleteButton.addEventListener('click', () => {
        deleteOrder(index);
      });

      const orderDetailsButton = document.createElement('button');
      orderDetailsButton.textContent = 'Деталі';
      orderDetailsButton.classList.add('order-details-button');
      orderDetailsButton.addEventListener('click', () => {
        toggleOrderDetails(orderItem, order);
      });

      const orderDetailsContainer = document.createElement('div');
      orderDetailsContainer.classList.add('order-details-container');

      const orderDetailsList = document.createElement('ul');
      orderDetailsList.classList.add('order-details-list');

      const productItem = document.createElement('li');
      productItem.textContent = `Товар: ${order.product}`;
      const nameItem = document.createElement('li');
      nameItem.textContent = `Ім'я: ${order.name}`;
      const lastNameItem = document.createElement('li');
      lastNameItem.textContent = `Фамілія: ${order.lastName}`;
      const cityItem = document.createElement('li');
      cityItem.textContent = `Місто: ${order.city}`;
      const deliveryPointItem = document.createElement('li');
      deliveryPointItem.textContent = `Пункт доставки: ${order.deliveryPoint}`;
      const paymentMethodItem = document.createElement('li');
      paymentMethodItem.textContent = `Спосіб оплати: ${order.paymentMethod}`;
      const quantityItem = document.createElement('li');
      quantityItem.textContent = `Кількість: ${order.quantity}`;
      const commentItem = document.createElement('li');
      commentItem.textContent = `Коментар: ${order.comment}`;

      orderDetailsList.appendChild(productItem);
      orderDetailsList.appendChild(nameItem);
      orderDetailsList.appendChild(lastNameItem);
      orderDetailsList.appendChild(cityItem);
      orderDetailsList.appendChild(deliveryPointItem);
      orderDetailsList.appendChild(paymentMethodItem);
      orderDetailsList.appendChild(quantityItem);
      orderDetailsList.appendChild(commentItem);

      orderDetailsContainer.appendChild(orderDetailsList);

      orderItem.appendChild(orderDetailsButton);
      orderItem.appendChild(deleteButton);
      orderItem.appendChild(orderDetailsContainer);

      orderDetailsContainer.style.display = 'none';

      ordersList.appendChild(orderItem);
    });

    ordersContainer.appendChild(ordersList);
  }
}

function toggleOrderDetails(orderItem, order) {
  const orderDetailsContainer = orderItem.querySelector('.order-details-container');
  orderDetailsContainer.style.display = orderDetailsContainer.style.display === 'none' ? 'block' : 'none';
}

function deleteOrder(index) {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  if (index >= 0 && index < orders.length) {
    orders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(orders));
    showMyOrders();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const myOrdersButton = document.querySelector('.my-orders-button');
  myOrdersButton.addEventListener('click', () => {
    const categoriesContainer = document.querySelector('.categories');
    categoriesContainer.style.display = 'none';
    const productsContainer = document.querySelector('.products');
    productsContainer.style.display = 'none';
    const productInfoContainer = document.querySelector('.product-info');
    productInfoContainer.style.display = 'none';
    const orderFormContainer = document.querySelector('.order-form-container');
    orderFormContainer.style.display = 'none';
    const orderConfirmationContainer = document.querySelector('.order-confirmation-container');
    orderConfirmationContainer.style.display = 'none';
    const ordersContainer = document.querySelector('.orders-container');
    ordersContainer.style.display = 'block';
    showMyOrders();
  });
});

function displayOrderConfirmation(order) {
  const orderConfirmationContainer = document.querySelector('.order-confirmation-container');
  orderConfirmationContainer.innerHTML = '';

  const confirmationTitle = document.createElement('h3');
  confirmationTitle.textContent = 'Підтвердження замовлення:';

  const orderInfoList = document.createElement('ul');
  orderInfoList.classList.add('order-ifo');

  const productItem = document.createElement('li');
  productItem.textContent = `Товар: ${order.product}`;
  const nameItem = document.createElement('li');
  nameItem.textContent = `Ім'я: ${order.name}`;
  const lastNameItem = document.createElement('li');
  lastNameItem.textContent = `Фамілія: ${order.lastName}`;
  const cityItem = document.createElement('li');
  cityItem.textContent = `Місто: ${order.city}`;
  const deliveryPointItem = document.createElement('li');
  deliveryPointItem.textContent = `Пункт доставки: ${order.deliveryPoint}`;
  const paymentMethodItem = document.createElement('li');
  paymentMethodItem.textContent = `Спосіб оплати: ${order.paymentMethod}`;
  const quantityItem = document.createElement('li');
  quantityItem.textContent = `Кількість: ${order.quantity}`;
  const commentItem = document.createElement('li');
  commentItem.textContent = `Коментар: ${order.comment}`;

  orderInfoList.appendChild(productItem);
  orderInfoList.appendChild(nameItem);
  orderInfoList.appendChild(lastNameItem);
  orderInfoList.appendChild(cityItem);
  orderInfoList.appendChild(deliveryPointItem);
  orderInfoList.appendChild(paymentMethodItem);
  orderInfoList.appendChild(quantityItem);
  orderInfoList.appendChild(commentItem);

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Підтверджую';
  closeButton.classList.add('confirmation-button');
  closeButton.addEventListener('click', () => {
    orderConfirmationContainer.innerHTML = '';
  });

  orderConfirmationContainer.appendChild(confirmationTitle);
  orderConfirmationContainer.appendChild(orderInfoList);
  orderConfirmationContainer.appendChild(closeButton);
}

generateCategoryElements(currentProducts);
