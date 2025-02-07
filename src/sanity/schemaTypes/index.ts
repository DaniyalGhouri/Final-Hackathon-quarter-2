import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import order from './order'
import reviews from './reviews'
import feedback from './feedback'
import faq from './faq'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,order,reviews,feedback,faq],
}
