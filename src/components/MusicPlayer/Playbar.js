/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'

const Playbar = ({ Children }) => {
  return (
    <div className="Playbar" css={CSS}>
      {Children}
    </div>
  )
}

const CSS = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 75px;
  background: #282828;
  z-index: 99;
  padding: 20px;
`

export default Playbar
