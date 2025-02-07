const productSchema = {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Product Image',
      options: { hotspot: true }, // Enable image cropping
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
    },
    {
      name: 'isFeaturedProduct',
      type: 'boolean',
      title: 'Featured Product',
    },
    {
      name: 'stockLevel',
      type: 'number',
      title: 'Stock Level',
    },
    {
      name: 'category',
      type: 'reference', // Changed to reference type if categories exist
      title: 'Category',
      to: [{ type: 'category' }], // Reference to 'category' document
    },
  ],
};

export default productSchema;
