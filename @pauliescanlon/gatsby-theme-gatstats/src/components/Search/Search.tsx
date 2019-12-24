/** @jsx jsx */
import Downshift from 'downshift'
import { Styled, jsx } from 'theme-ui'

import { ButtonIcon } from '../ButtonIcon'

import { ISearchItem } from '../../types'

interface ISearchProps {
  /** Data to filter on */
  filterData: ISearchItem[]
  /** Callback function that takes a value and returns nothing */
  onSearch: (value: string) => void
  /** Filter applied */
  selectedTag: string
}

export const Search: React.FC<ISearchProps> = ({
  filterData,
  onSearch,
  selectedTag
}) => {
  return (
    <Styled.div>
      <Downshift
        onChange={selection =>
          selection ? onSearch(selection.value) : onSearch('')
        }
        selectedItem={selectedTag ? selectedTag : ''}
      >
        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          getToggleButtonProps,
          isOpen,
          toggleMenu,
          inputValue,
          clearSelection,
          selectedItem,
          highlightedIndex
        }) => (
          <div>
            <div style={{ position: 'relative' }}>
              <Styled.div
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <input
                  sx={{
                    backgroundColor: 'surface',
                    display: 'flex',
                    flexBasis: '100%',
                    outline: 'none',
                    borderWidth: 0,
                    borderStyle: 'solid',
                    borderColor: 'background',
                    borderRadius: 2,
                    appearance: 'none',
                    p: 3,
                    mr: 2,
                    fontFamily: 'body',
                    fontSize: 2,
                    color: 'inherit',
                    '::placeholder': {
                      color: 'textMuted'
                    },
                    ':focus ': {
                      boxShadow: theme =>
                        `${theme.shadows[0]} ${theme.colors.textMuted}`
                    }
                  }}
                  {...getInputProps({
                    placeholder: 'Search Tags',
                    onClick: () => toggleMenu(),
                    onKeyDown(e) {
                      if (e.key === 'Enter' && highlightedIndex === null) {
                        return selectedItem
                          ? onSearch(selectedItem.value)
                          : null
                      }
                    }
                  })}
                />

                {selectedItem ? (
                  <ButtonIcon
                    onClick={clearSelection as any}
                    aria-label="clear selection"
                    iconPath="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  />
                ) : (
                  <ButtonIcon
                    {...getToggleButtonProps()}
                    iconPath={
                      isOpen
                        ? 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'
                        : 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'
                    }
                  />
                )}
              </Styled.div>
              <Styled.div
                sx={{
                  backgroundColor: 'surface',
                  borderRadius: 1,
                  zIndex: 2,
                  mt: 3
                }}
              >
                <Styled.div>
                  <ul
                    {...getMenuProps()}
                    sx={{
                      m: 0,
                      pl: 0,
                      maxHeight: isOpen ? '310px' : '0px',
                      overflowY: 'scroll',
                      WbkitOverflowScrolling: 'touch',
                      borderRadius: 1
                    }}
                  >
                    {isOpen
                      ? filterData
                          .filter(
                            (item: ISearchItem) =>
                              !inputValue || item.value.includes(inputValue)
                          )
                          .map((item: ISearchItem, index: number) => (
                            <Styled.li
                              {...getItemProps({
                                key: item.value,
                                index,
                                item
                              })}
                              sx={{
                                color:
                                  highlightedIndex === index
                                    ? 'text'
                                    : 'textMuted',
                                cursor: 'pointer',
                                p: 3,
                                margin: 0,
                                borderBottomStyle: 'solid',
                                borderBottomWidth: 0,
                                borderColor: 'background',
                                listStyle: 'none',

                                ':hover': {
                                  backgroundColor: 'surface'
                                }
                              }}
                            >
                              {item.value}
                            </Styled.li>
                          ))
                      : null}
                  </ul>
                </Styled.div>
              </Styled.div>
            </div>
          </div>
        )}
      </Downshift>
    </Styled.div>
  )
}
