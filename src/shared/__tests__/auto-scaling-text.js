import React from 'react'
import { render} from '@testing-library/react'
import AutoScalingText from '../auto-scaling-text'

test('it renders the component', () => {
  const {debug}  = render(<AutoScalingText />)
})