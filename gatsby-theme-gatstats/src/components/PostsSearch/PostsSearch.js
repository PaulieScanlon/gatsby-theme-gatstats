/** @jsx jsx */
import PropTypes from "prop-types"
import Downshift from "downshift"
import { Styled, jsx } from "theme-ui"

import { SearchButton } from "../SearchButton"

export const PostsSearch = ({ postTags, onSearch }) => {
  return (
    <Styled.div
      sx={{
        mt: 3,
        mb: 3,
      }}
    >
      <Downshift
        onChange={selection =>
          selection ? onSearch(selection.value) : onSearch("")
        }
        itemToString={item => (item ? item.value : "")}
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
          highlightedIndex,
        }) => (
          <div>
            <div style={{ position: "relative" }}>
              <Styled.div
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Styled.div
                  sx={{
                    display: "flex",
                    color: "text",

                    input: {
                      backgroundColor: "surface",
                      display: "flex",
                      flexBasis: "100%",
                      outline: "none",
                      borderWidth: 0,
                      borderStyle: "solid",
                      borderColor: "background",
                      borderRadius: 2,
                      p: 3,
                      fontFamily: "body",
                      fontSize: 2,
                      color: "inherit",
                      "::placeholder": {
                        color: "muted",
                      },
                      ":focus": {
                        borderWidth: 0,
                        borderStyle: "dashed",
                        borderColor: "text",
                      },
                    },
                  }}
                >
                  <input
                    {...getInputProps({
                      placeholder: "Search Tags",
                      onClick: () => toggleMenu(),
                      onKeyDown(e) {
                        if (e.key === "Enter" && highlightedIndex === null) {
                          return selectedItem
                            ? onSearch(selectedItem.value)
                            : null
                        }
                      },
                    })}
                  />

                  {selectedItem ? (
                    <SearchButton
                      onClick={clearSelection}
                      aria-label="clear selection"
                      iconPath="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                    />
                  ) : (
                    <SearchButton
                      {...getToggleButtonProps()}
                      iconPath={
                        isOpen
                          ? "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
                          : "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                      }
                    />
                  )}
                </Styled.div>
              </Styled.div>
              <Styled.div
                sx={{
                  backgroundColor: "surface",
                  position: "absolute",
                  width: "100%",
                  borderRadius: 1,
                  zIndex: 2,
                  mt: 3,
                }}
              >
                <Styled.div>
                  <ul
                    {...getMenuProps()}
                    style={{
                      margin: 0,
                      paddingLeft: 0,
                      maxHeight: isOpen ? "300px" : "0px",
                      overflowY: "scroll",
                    }}
                  >
                    {isOpen
                      ? postTags
                          .filter(
                            item =>
                              !inputValue || item.value.includes(inputValue)
                          )
                          .map((item, index) => (
                            <Styled.li
                              {...getItemProps({
                                key: item.value,
                                index,
                                item,
                              })}
                              sx={{
                                color:
                                  highlightedIndex === index ? "text" : "muted",
                                cursor: "pointer",
                                p: 3,
                                margin: 0,
                                borderBottomStyle: "solid",
                                borderBottomWidth: 1,
                                borderColor: "background",
                                listStyle: "none",
                                ":hover": {
                                  color: "text",
                                },
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

PostsSearch.propTypes = {
  postTags: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSeach: PropTypes.func,
}
