/** @jsx jsx */
import PropTypes from "prop-types"
import Downshift from "downshift"
import { Styled, jsx } from "theme-ui"

export const PostsSearch = ({ postNames }) => {
  //   const postNames = [
  //     { value: "apple" },
  //     { value: "pear" },
  //     { value: "orange" },
  //     { value: "grape" },
  //     { value: "banana" },
  //   ]

  console.log("postNames: ", postNames)

  return (
    <Styled.div
      sx={{
        position: "relative",
      }}
    >
      <Downshift
        onChange={selection => alert(`You selected ${selection.value}`)}
        itemToString={item => (item ? item.value : "")}
      >
        {({
          getRootProps,
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
        }) => (
          <Styled.div
            {...getRootProps()}
            sx={{
              label: {
                display: "block",
                width: "100%",
              },
              input: {
                display: "block",
                width: "100%",
                boxSizing: "border-box",
                padding: 2,
                fontFamily: "body",
                fontSize: 2,
                fontWeight: "body",
                lineHeight: "body",
              },
              ul: {
                position: "absolute",
                width: "100%",
                margin: 0,
                padding: 0,
                listStyle: "none",
                zIndex: 1,
              },
            }}
          >
            <label {...getLabelProps()}>Search for Posts</label>
            <input {...getInputProps()} />
            <ul {...getMenuProps()}>
              {isOpen
                ? postNames
                    .filter(
                      item => !inputValue || item.value.includes(inputValue)
                    )
                    .map((item, index) => (
                      <Styled.li
                        sx={{
                          color: "background",
                          backgroundColor: "text",
                          margin: 0,
                          padding: 2,
                          borderTopStyle: "solid",
                          borderTopWidth: 1,
                          // @TODO use Polished to come up with a lighter shade of one of the them colours
                          borderColor: "#f7f7f7",
                          cursor: "pointer",
                          ":hover": {
                            backgroundColor: "#f7f7f7",
                          },
                        }}
                        {...getItemProps({
                          key: item.value,
                          index,
                          item,
                          //   style: {
                          //     backgroundColor:
                          //       highlightedIndex === index
                          //         ? "lightgray"
                          //         : "white",
                          //     fontWeight:
                          //       selectedItem === item ? "bold" : "normal",
                          //   },
                        })}
                      >
                        {item.value}
                      </Styled.li>
                    ))
                : null}
            </ul>
          </Styled.div>
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
}
