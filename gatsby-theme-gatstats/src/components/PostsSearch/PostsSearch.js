/** @jsx jsx */

import PropTypes from "prop-types"
import Downshift from "downshift"
import { Styled, jsx } from "theme-ui"

export const PostsSearch = ({ postNames, onSearch }) => {
  return (
    <Styled.div
      sx={{
        px: 2,
        mb: 4,
      }}
    >
      <Downshift
        // isOpen
        onChange={selection =>
          selection ? onSearch(selection.value) : onSearch("")
        }
        // onSelect={selection => onSearch(selection.value)}
        itemToString={item => (item ? item.value : "")}
      >
        {({
          getRootProps,
          getInputProps,
          getItemProps,
          getMenuProps,
          getToggleButtonProps,
          isOpen,
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
                    display: "flex",
                    flexBasis: "100%",
                    border: "none",
                    borderBottomStyle: "solid",
                    borderBottomWidth: 2,
                    borderColor: "mutedText",
                    p: 3,
                    fontFamily: "body",
                    fontSize: 2,
                    color: "inherit",
                    backgroundColor: "mutedLight",
                    "::placeholder": {
                      color: "mutedText",
                    },
                  },
                }}
              >
                <input
                  {...getInputProps({
                    placeholder: "Search Posts",
                  })}
                />

                {selectedItem ? (
                  <button onClick={clearSelection} aria-label="clear selection">
                    x
                  </button>
                ) : (
                  <button {...getToggleButtonProps()}>
                    {isOpen ? "↑" : "↓"}
                  </button>
                )}
              </Styled.div>
            </Styled.div>
            <Styled.div
              className="outer-list"
              sx={{
                position: "absolute",
                backgroundColor: "mutedLight",
                width: "100%",
                zIndex: 2,
                boxShadow: 3,
              }}
            >
              <Styled.div className="inner-list">
                <ul
                  {...getMenuProps()}
                  style={{
                    margin: 0,
                    paddingLeft: 0,
                  }}
                >
                  {isOpen
                    ? postNames
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
                              color: "mutedText",
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
  postNames: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
    })
  ),
  onSeach: PropTypes.func,
}
