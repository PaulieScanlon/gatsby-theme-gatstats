declare module '@vx/shape' {
  export const STACK_OFFSET_NAMES: string[]

  export const STACK_ORDER_NAMES: string[]

  export function Arc(_ref: any): any

  export function Area(_ref: any): any

  export function AreaClosed(_ref: any): any

  export function AreaStack(_ref: any): any

  export function Bar(_ref: any): any

  export function BarGroup(_ref: any): any

  export function BarGroupHorizontal(_ref: any): any

  export function BarStack(_ref: any): any

  export function BarStackHorizontal(_ref: any): any

  export function Circle(_ref: any): any

  export function Line(_ref: any): any

  export function LinePath(_ref: any): any

  export function LineRadial(_ref: any): any

  export function LinkHorizontal(_ref2: any): any

  export function LinkHorizontalCurve(_ref2: any): any

  export function LinkHorizontalLine(_ref2: any): any

  export function LinkHorizontalStep(_ref2: any): any

  export function LinkRadial(_ref2: any): any

  export function LinkRadialCurve(_ref2: any): any

  export function LinkRadialLine(_ref2: any): any

  export function LinkRadialStep(_ref2: any): any

  export function LinkVertical(_ref2: any): any

  export function LinkVerticalCurve(_ref2: any): any

  export function LinkVerticalLine(_ref2: any): any

  export function LinkVerticalStep(_ref2: any): any

  export function Pie(_ref: any): any

  export function Polygon(_ref3: any): any

  export function Stack(_ref: any): any

  export function degreesToRadians(degrees: any): any

  export function getPoint(_ref: any): any

  export function getPoints(_ref2: any): any

  export function pathHorizontalCurve(_ref: any): any

  export function pathHorizontalDiagonal(_ref: any): any

  export function pathHorizontalLine(_ref: any): any

  export function pathHorizontalStep(_ref: any): any

  export function pathRadialCurve(_ref: any): any

  export function pathRadialDiagonal(_ref: any): any

  export function pathRadialLine(_ref: any): any

  export function pathRadialStep(_ref: any): any

  export function pathVerticalCurve(_ref: any): any

  export function pathVerticalDiagonal(_ref: any): any

  export function pathVerticalLine(_ref: any): any

  export function pathVerticalStep(_ref: any): any

  export function stackOffset(offset: any): any

  export function stackOrder(order: any): any

  export namespace Arc {
    namespace propTypes {
      function centroid(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

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

      function cornerRadius(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function endAngle(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function innerRadius(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function innerRef(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function outerRadius(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function padAngle(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function padRadius(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function startAngle(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      namespace centroid {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

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

      namespace cornerRadius {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace data {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace endAngle {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace innerRadius {
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

      namespace outerRadius {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace padAngle {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace padRadius {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace startAngle {
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

  export namespace Area {
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

      function curve(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function defined(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function innerRef(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function x(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x1(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y1(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      namespace curve {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace data {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace defined {
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

      namespace x {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x0 {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x1 {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y0 {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y1 {
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

  export namespace AreaClosed {
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

      function curve(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function defined(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function innerRef(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function x(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x1(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y1(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function yScale(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      namespace curve {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace data {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace defined {
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

      namespace x {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x0 {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x1 {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y0 {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y1 {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace yScale {
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

  export namespace AreaStack {
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

      function color(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function curve(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function defined(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function keys(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function left(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function offset(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function order(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function top(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function value(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x1(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y1(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      namespace color {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace curve {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace data {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace defined {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace keys {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace left {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace offset {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace order {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace top {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace value {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x0 {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x1 {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y0 {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y1 {
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

  export namespace Bar {
    namespace propTypes {
      function className(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function innerRef(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function x(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function rx(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function opacity(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function fill(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      namespace x {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y {
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

  export namespace BarGroup {
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

      function color(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function keys(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function left(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function top(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x0Scale(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function x1Scale(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function yScale(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      namespace left {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace top {
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

  export namespace BarGroupHorizontal {
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

      function color(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function keys(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function left(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function top(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function xScale(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y0Scale(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function y1Scale(
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

      namespace left {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace top {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x {
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

  export namespace BarStack {
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

      function color(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function keys(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function left(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function offset(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function order(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function top(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function value(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function xScale(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y1(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function yScale(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      namespace left {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace offset {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace order {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace top {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace value {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y0 {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y1 {
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

  export namespace BarStackHorizontal {
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

      function color(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function keys(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function left(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function offset(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function order(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function top(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function value(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x1(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function xScale(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function yScale(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      namespace left {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace offset {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace order {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace top {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace value {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x0 {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x1 {
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

  export namespace Circle {
    namespace propTypes {
      function className(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function innerRef(
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
    }
  }

  export namespace Line {
    namespace propTypes {
      function className(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function fill(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function from(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function innerRef(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function to(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      namespace fill {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace from {
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

      namespace to {
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

  export namespace LinePath {
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

      function curve(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function defined(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function fill(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function innerRef(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function x(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      namespace curve {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace data {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace defined {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace fill {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace strokeWidth {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace strokeDasharray {
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

      namespace x {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y {
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

  export namespace LineRadial {
    namespace propTypes {
      function angle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      function curve(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function defined(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function fill(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function innerRef(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function radius(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      namespace angle {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

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

      namespace curve {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace data {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace defined {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace fill {
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

      namespace radius {
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

  export namespace LinkHorizontal {
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

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function innerRef(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function path(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function target(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      namespace data {
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

      namespace path {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace source {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace target {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y {
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

  export namespace LinkHorizontalCurve {
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

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function innerRef(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function path(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function percent(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function target(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      namespace data {
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

      namespace path {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace percent {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace source {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace target {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y {
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

  export namespace LinkHorizontalLine {
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

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function innerRef(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function path(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function target(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      namespace data {
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

      namespace path {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace source {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace target {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y {
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

  export namespace LinkHorizontalStep {
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

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function innerRef(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function path(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function percent(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function target(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      namespace data {
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

      namespace path {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace percent {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace source {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace target {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y {
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

  export namespace LinkRadial {
    namespace propTypes {
      function angle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function innerRef(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function path(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function radius(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function target(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      namespace angle {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

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

      namespace data {
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

      namespace path {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace radius {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace source {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace target {
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

  export namespace LinkRadialCurve {
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

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function innerRef(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function path(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function percent(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function target(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      namespace data {
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

      namespace path {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace percent {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace source {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace target {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y {
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

  export namespace LinkRadialLine {
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

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function innerRef(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function path(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function target(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      namespace data {
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

      namespace path {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace source {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace target {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y {
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

  export namespace LinkRadialStep {
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

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function innerRef(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function path(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function target(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      namespace data {
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

      namespace path {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace source {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace target {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y {
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

  export namespace LinkVertical {
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

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function innerRef(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function path(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function target(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      namespace data {
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

      namespace path {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace source {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace target {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y {
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

  export namespace LinkVerticalCurve {
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

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function innerRef(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function path(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function percent(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function target(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      namespace data {
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

      namespace path {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace percent {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace source {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace target {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y {
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

  export namespace LinkVerticalLine {
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

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function innerRef(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function path(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function target(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      namespace data {
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

      namespace path {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace source {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace target {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y {
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

  export namespace LinkVerticalStep {
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

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function innerRef(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function path(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function percent(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function source(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function target(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      namespace data {
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

      namespace path {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace percent {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace source {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace target {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y {
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

  export namespace Pie {
    namespace propTypes {
      function centroid(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

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

      function cornerRadius(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function endAngle(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function innerRadius(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function left(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function outerRadius(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function padAngle(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function padRadius(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function pieSort(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function pieSortValues(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function pieValue(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function startAngle(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function top(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      namespace centroid {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

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

      namespace cornerRadius {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace data {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace endAngle {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace innerRadius {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace left {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace outerRadius {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace padAngle {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace padRadius {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace pieSort {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace pieSortValues {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace pieValue {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace startAngle {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace top {
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

  export namespace Polygon {
    namespace propTypes {
      function center(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      function innerRef(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function rotate(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function sides(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function size(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      namespace center {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

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

      namespace rotate {
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

  export namespace STACK_OFFSETS {
    function diverging(series: any, order: any): void

    function expand(series: any, order: any): void

    function none(series: any, order: any): void

    function silhouette(series: any, order: any): void

    function wiggle(series: any, order: any): void
  }

  export namespace STACK_ORDERS {
    function ascending(series: any): any

    function descending(series: any): any

    function insideout(series: any): any

    function none(series: any): any

    function reverse(series: any): any
  }

  export namespace Stack {
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

      function color(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function curve(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function defined(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function keys(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function left(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function offset(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function order(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function top(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function value(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function x1(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y0(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function y1(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

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

      namespace color {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace curve {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace defined {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace keys {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace left {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace offset {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace order {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace top {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace value {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x0 {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace x1 {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y0 {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace y1 {
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
