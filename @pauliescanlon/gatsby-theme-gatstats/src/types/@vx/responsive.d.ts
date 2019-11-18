declare module '@vx/responsive' {
  export class ParentSize extends React.Component {
    constructor(props: any)

    componentDidMount(): void

    componentWillUnmount(): void

    render(): any

    resize(_ref: any): any

    setTarget(ref: any): void

    static defaultProps: {
      debounceTime: number
    }
  }

  export function ScaleSVG(_ref: any): any

  export function withParentSize(BaseComponent: any): any

  export function withScreenSize(BaseComponent: any): any

  export namespace ParentSize {
    namespace propTypes {
      function children(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function className(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function debounceTime(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      namespace className {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace debounceTime {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }
    }
  }

  export namespace ScaleSVG {
    namespace propTypes {
      function children(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function innerRef(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function preserveAspectRatio(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function xOrigin(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function yOrigin(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      namespace children {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace height {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace innerRef {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace preserveAspectRatio {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace width {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace xOrigin {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace yOrigin {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }
    }
  }

  export default content
}
