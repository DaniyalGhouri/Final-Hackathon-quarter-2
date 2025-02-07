export default {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    {
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{ type: 'product' }]
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string'
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule: { min: (arg0: number) => { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; }) => Rule.min(1).max(5)
    },
    {
      name: 'review',
      title: 'Review',
      type: 'text'
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime'
    }
  ]
}
