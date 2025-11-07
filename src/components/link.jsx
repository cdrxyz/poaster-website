import * as Headless from '@headlessui/react'
import NextLink from 'next/link'
import { forwardRef } from 'react'

export const Link = forwardRef(function Link(props, ref) {
  return (
    <Headless.DataInteractive as="a">
      <NextLink ref={ref} {...props} />
    </Headless.DataInteractive>
  )
})
