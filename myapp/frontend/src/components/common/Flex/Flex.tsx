import type { FC, ReactNode } from 'react'

import clsx from 'clsx'

import s from './Flex.module.css'

type FlexProps = {
  children: ReactNode
  direction: 'row' | 'column'
  grow: '0' | '1'
  shrink: '0' | '1'
  width: 'fill' | 'fit'
  height: 'fill' | 'fit'
}

const Flex: FC<FlexProps> = (props) => {
  const {
    children,
    direction = 'row',
    grow = '1',
    shrink = '1',
    width = 'fill',
    height = 'fit',
  } = props
  const rootClassNames = clsx(
    s.root,
    s[`${direction}`],
    s[`grow-${grow}`],
    s[`shrink-${shrink}`],
    s[`width-${width}`],
    s[`height-${height}`],
  )
  return <div className={rootClassNames}>{children}</div>
}

export default Flex
