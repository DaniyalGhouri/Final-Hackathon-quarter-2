const orderSchema = {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    { name: 'firstName', type: 'string', title: 'First Name' },
    { name: 'lastName', type: 'string', title: 'Last Name' },
    { name: 'companyName', type: 'string', title: 'Company Name' },
    { name: 'countryRegion', type: 'string', title: 'Country/Region' },
    { name: 'streetAddress', type: 'string', title: 'Street Address' },
    { name: 'townCity', type: 'string', title: 'Town/City' },
    { name: 'zipCode', type: 'number', title: 'Zip Code' }, // Updated to camelCase
    { name: 'phoneNumber', type: 'number', title: 'Phone Number' }, // Updated to camelCase
    { name: 'email', type: 'string', title: 'Email' }, // Updated to lowercase
    { name: 'additionalInfo', type: 'text', title: 'Additional Information' }, // Updated to camelCase
    
    {
      name: 'orderDetails',
      type: 'array',
      title: 'Order Details',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'productId', type: 'string', title: 'Product ID' },
            { name: 'quantity', type: 'number', title: 'Quantity' },
            { name: 'discountedPrice', type: 'number', title: 'Discounted Price' },
          ],
        },
      ],
    },

    { name: 'subtotal', type: 'number', title: 'Subtotal' },
    { name: 'total', type: 'number', title: 'Total' },

    {
      name: 'status',
      type: 'string',
      title: 'Status',
      initialValue: 'pending',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Dispatch', value: 'dispatch' }, // Removed extra space
          { title: 'Delivered', value: 'delivered' }, // Removed extra space
        ],
      },
    },

    {
      name: 'paymentMethod',
      type: 'string',
      title: 'Payment Method',
      options: {
        list: [
          { title: 'Debit/Credit Card', value: 'debit_credit_card' }, // Updated for consistency
          { title: 'Cash on Delivery', value: 'cash_on_delivery' }, // Updated for consistency
        ],
      },
    },
  ],
};

export default orderSchema;
