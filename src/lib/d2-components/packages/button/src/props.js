import { isBoolean } from 'lodash-es'
import { isColor, isButtonSize, isButtonTypes } from '../../../utils/is.js'
import { isIntegerAndBetween } from '../../../utils/number.js'

export default {
  icon: { type: String, default: '' },
  iconRight: { type: String, default: '' },
  color: { type: String, default: '', validator: value => isColor(value, true) },
  size: { type: String, default: '', validator: value => isButtonSize(value, true) },
  type: { type: String, default: 'button', validator: value => isButtonTypes(value)},
  autofocus: { type: Boolean, default: false },
  text: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  loadingRight: { type: Boolean, default: false },
  plain: { type: Boolean, default: false },
  round: { type: Boolean, default: false },
  roundLeft: { type: Boolean, default: false },
  roundRight: { type: Boolean, default: false },
  circle: { type: Boolean, default: false },
  ring: { type: Boolean, default: false },
  ringOffset: { type: [Boolean, Number], default: false, validator: value => isBoolean(value) || isIntegerAndBetween(value, 0, 4) },
  ringWidth: { type: Number, default: 2 }
}
