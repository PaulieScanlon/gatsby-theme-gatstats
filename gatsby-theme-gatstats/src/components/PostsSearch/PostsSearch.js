/** @jsx jsx */

import PropTypes from "prop-types"
import Downshift from "downshift"
import { Styled, jsx } from "theme-ui"
import { lighten } from "@theme-ui/color"

import { SearchButton } from "../SearchButton"

export const PostsSearch = ({ postTags, onSearch }) => {
  return (
    <Styled.div
      sx={{
        px: 2,
        mb: 4,
      }}
    >
      <Downshift
        onChange={selection =>
          selection ? onSearch(selection.value) : onSearch("")
        }
        itemToString={item => (item ? item.value : "")}
      >
        {({
          getRootProps,
          getInputProps,
          getItemProps,
          getMenuProps,
          getToggleButtonProps,
          isOpen,
          toggleMenu,
          inputValue,
          clearSelection,
          selectedItem,
        }) => (
          <div {...getRootProps()} style={{ position: "relative" }}>
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
                  backgroundColor: "background",
                  input: {
                    bg: lighten("background", 0.04),
                    display: "flex",
                    flexBasis: "100%",
                    border: "none",
                    borderBottomStyle: "solid",
                    borderBottomWidth: 2,

                    borderColor: lighten("background", 0.5),
                    p: 3,
                    fontFamily: "body",
                    fontSize: 2,
                    color: "inherit",
                    "::placeholder": {
                      color: lighten("background", 0.5),
                    },
                    //@TODO create proper focus style
                    ":focus": {
                      outline: "none",
                    },
                  },
                }}
              >
                <input
                  {...getInputProps({
                    placeholder: "Search Tags",
                    onClick: () => toggleMenu(),
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
                bg: lighten("background", 0.04),
                position: "absolute",
                width: "100%",
                zIndex: 2,
                boxShadow: 3,
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
                          item => !inputValue || item.value.includes(inputValue)
                        )
                        .map((item, index) => (
                          <Styled.li
                            {...getItemProps({
                              key: item.value,
                              index,
                              item,
                            })}
                            sx={{
                              color: lighten("background", 0.5),
                              cursor: "pointer",
                              p: 3,
                              margin: 0,
                              borderBottomStyle: "solid",
                              borderBottomWidth: 1,
                              borderColor: "background",
                              listStyle: "none",
                              ":hover": {
                                color: "text",
                                backgroundColor: "background",
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
