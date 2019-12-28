/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'

export interface IYouTubeProps {
  /** The YouTube id */
  id: string
}

// https://github.com/escaladesports/react-youtube-embed/blob/master/src/index.js
export const YouTube: React.FC<IYouTubeProps> = ({ id }) => {
  return (
    <Styled.div
      sx={{
        position: 'relative',
        paddingBottom: '56.25%' /* 16:9 */,
        paddingTop: '25px',
        height: 0,

        iframe: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Styled.div>
  )
}
