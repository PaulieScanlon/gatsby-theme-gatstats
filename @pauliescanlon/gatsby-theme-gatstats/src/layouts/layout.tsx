/** @jsx jsx */
import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'
import { jsx, Styled } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'
import { Location } from '@reach/router'

import { Transition } from '../components/Transition'
import { HeaderContainer } from '../components/Header'
import { LightPanel } from '../components/LightPanel'
import { ContentContainer } from '../components/Content'
import { SideBarContainer } from '../components/SideBar/SideBarContainer'
import { SideBarProvider } from '../components/SideBarContext'
import { Seo } from '../components/Seo'

import { NetlifyForm, INetlifyFormProps } from '../components/NetlifyForm'
import { TextInput, ITextInputProps } from '../components/TextInput'
import { TextArea, ITextAreaProps } from '../components/TextArea'
import { InputLabel, IInputLabelProps } from '../components/InputLabel'
import { InputAnnounce, IInputAnnounceProps } from '../components/InputAnnounce'
import { Button, IButtonProps } from '../components/Button'

import { formatPathname } from '../utils'
import { ILocation } from '../types'

const components = {
  NetlifyForm: ({ children, ...props }: INetlifyFormProps) => (
    <NetlifyForm {...props}>{children}</NetlifyForm>
  ),
  TextInput: (props: ITextInputProps) => <TextInput {...props} />,
  TextArea: (props: ITextAreaProps) => <TextArea {...props} />,
  InputLabel: ({ children, ...props }: IInputLabelProps) => (
    <InputLabel {...props}>{children}</InputLabel>
  ),
  InputAnnounce: ({ children, ...props }: IInputAnnounceProps) => (
    <InputAnnounce {...props}>{children}</InputAnnounce>
  ),
  Button: (props: IButtonProps) => <Button {...props} />
}

const Layout: React.FC = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query defaultQuery {
          site {
            siteMetadata {
              title
              description
              keywords
              siteURL
              siteImage
            }
          }
        }
      `}
      render={data => {
        const {
          title,
          description,
          keywords,
          siteURL,
          siteImage
        } = data.site.siteMetadata

        return (
          <React.Fragment>
            <Global
              styles={css`
                body {
                  position: relative;
                  margin: 0;
                  min-height: 100%;
                  min-width: 320px;
                }
              `}
            />

            <Styled.div
              sx={{
                margin: '0 auto',
                backgroundColor: 'background',
                maxWidth: theme => theme.breakpoints[3]
              }}
            >
              <SideBarProvider>
                <Location>
                  {({ location }) => {
                    const { pathname }: ILocation = location
                    return (
                      <React.Fragment>
                        <Seo
                          title={title}
                          titleTemplate={formatPathname(pathname)}
                          description={description}
                          keywords={keywords}
                          siteURL={siteURL}
                          image={siteImage}
                        />
                        <HeaderContainer />
                        <SideBarContainer />
                        <LightPanel />
                        <ContentContainer>
                          <Transition pathname={pathname}>
                            <MDXProvider components={components}>
                              {children}
                            </MDXProvider>
                          </Transition>
                        </ContentContainer>
                      </React.Fragment>
                    )
                  }}
                </Location>
              </SideBarProvider>
            </Styled.div>
          </React.Fragment>
        )
      }}
    />
  )
}

export default Layout
