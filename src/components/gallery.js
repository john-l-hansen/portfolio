import { Link } from 'gatsby'
import React from 'react'

import Image from '../components/image'

const Gallery = ( ) => (
  <div
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
      display: `grid`,
      gridTemplateColumns: `1fr 1fr 1fr`,
      gridTemplateRows: `1fr 1fr`,
    }}
  >
  <Image />
  <Image />
  <Image />
  <Image />
  <Image />
  <Image />
    </div>
)

export default Gallery
