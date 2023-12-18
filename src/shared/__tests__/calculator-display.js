import React from 'react'
import {render} from '@testing-library/react'
import CalculatorDisplay from '../calculator-display'

test('it renders the component', () => {
  const {container} = render(<CalculatorDisplay value="0" />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="css-ivjshd-calculator-display--DisplayContainer e1y4sv860"
      >
        <div
          class="autoScalingText"
          data-testid="total"
          style="transform: scale(1,1);"
        >
          0
        </div>
      </div>
    </div>
  `)
})
