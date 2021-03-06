import extractIdFromSelfLink from './extractIdFromSelfLink'
import Link from './Link'
import ShippingMethod from './ShippingMethod'
import Immutable, {Map, List, Record} from 'immutable'

const ShippingZoneRecord = new Record({
  _id: null,
  name: null,
  serviceableCountries: null,
  shippingMethods: null,
  _links: null,
  _embedded: new Map()
})
export default class ShippingZone extends ShippingZoneRecord {
  constructor (shippingZone) {
    const immutable = Immutable.fromJS(shippingZone || {})
    const parsed = immutable
      .update('_id', (id) => id || extractIdFromSelfLink(immutable))
      .update('shippingMethods', (sms) => sms ? sms.map((sm) => new ShippingMethod(sm)) : new List())
      .update('_links', (ls) => ls ? ls.map((l) => new Link(l)) : new Map())

    super(parsed)
  }
}
