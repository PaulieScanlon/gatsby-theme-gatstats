declare module '@vx/axis' {
  export const Orientation: {
    bottom: string
    left: string
    right: string
    top: string
  }

  export function Axis(_ref: any): any

  export function AxisBottom(_ref: any): any

  export function AxisLeft(_ref: any): any

  export function AxisRight(_ref: any): any

  export function AxisTop(_ref: any): any

  export namespace Axis {
    namespace propTypes {
      function axisClassName(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function axisLineClassName(
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

      function hideAxisLine(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function hideTicks(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function hideZero(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function labelClassName(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function labelOffset(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function labelProps(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function left(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function numTicks(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function orientation(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function rangePadding(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function scale(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function stroke(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function strokeDasharray(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function strokeWidth(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickClassName(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickComponent(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickFormat(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickLabelProps(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickLength(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickStroke(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickTransform(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickValues(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function top(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      namespace axisClassName {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace axisLineClassName {
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

      namespace hideAxisLine {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace hideTicks {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace hideZero {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace label {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace labelClassName {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace labelOffset {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace labelProps {
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

      namespace numTicks {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace orientation {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace rangePadding {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace stroke {
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

      namespace tickClassName {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickComponent {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickFormat {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickLabelProps {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickLength {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickStroke {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickTransform {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickValues {
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

  export namespace AxisBottom {
    namespace propTypes {
      function axisClassName(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function axisLineClassName(
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

      function hideAxisLine(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function hideTicks(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function hideZero(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function labelClassName(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function labelOffset(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function labelProps(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function left(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function numTicks(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function rangePadding(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function scale(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function stroke(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function strokeDasharray(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function strokeWidth(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickClassName(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickComponent(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickFormat(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickLabelProps(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickLength(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickStroke(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickTransform(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickValues(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function top(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      namespace axisClassName {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace axisLineClassName {
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

      namespace hideAxisLine {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace hideTicks {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace hideZero {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace label {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace labelClassName {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace labelOffset {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace labelProps {
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

      namespace numTicks {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace rangePadding {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace stroke {
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

      namespace tickClassName {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickComponent {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickFormat {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickLabelProps {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickLength {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickStroke {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickTransform {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickValues {
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

  export namespace AxisLeft {
    namespace propTypes {
      function axisClassName(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function axisLineClassName(
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

      function hideAxisLine(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function hideTicks(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function hideZero(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function labelClassName(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function labelOffset(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function labelProps(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function left(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function numTicks(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function rangePadding(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function scale(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function stroke(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function strokeDasharray(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function strokeWidth(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickClassName(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickComponent(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickFormat(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickLabelProps(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickLength(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickStroke(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickTransform(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickValues(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function top(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      namespace axisClassName {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace axisLineClassName {
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

      namespace hideAxisLine {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace hideTicks {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace hideZero {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace label {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace labelClassName {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace labelOffset {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace labelProps {
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

      namespace numTicks {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace rangePadding {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace stroke {
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

      namespace tickClassName {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickComponent {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickFormat {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickLabelProps {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickLength {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickStroke {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickTransform {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickValues {
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

  export namespace AxisRight {
    namespace propTypes {
      function axisClassName(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function axisLineClassName(
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

      function hideAxisLine(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function hideTicks(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function hideZero(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function labelClassName(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function labelOffset(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function labelProps(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function left(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function numTicks(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function rangePadding(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function scale(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function stroke(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function strokeDasharray(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function strokeWidth(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickClassName(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickComponent(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickFormat(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickLabelProps(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickLength(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickStroke(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickTransform(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickValues(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function top(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      namespace axisClassName {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace axisLineClassName {
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

      namespace hideAxisLine {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace hideTicks {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace hideZero {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace label {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace labelClassName {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace labelOffset {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace labelProps {
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

      namespace numTicks {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace rangePadding {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace stroke {
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

      namespace tickClassName {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickComponent {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickFormat {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickLabelProps {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickLength {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickStroke {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickTransform {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickValues {
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

  export namespace AxisTop {
    namespace propTypes {
      function axisClassName(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function axisLineClassName(
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

      function hideAxisLine(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function hideTicks(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function hideZero(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function labelClassName(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function labelOffset(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function labelProps(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function left(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function numTicks(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function rangePadding(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function scale(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function stroke(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      function strokeDasharray(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function strokeWidth(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickClassName(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickComponent(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickFormat(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickLabelProps(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickLength(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickStroke(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickTransform(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function tickValues(
        p0: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any
      ): any

      function top(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any

      namespace axisClassName {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace axisLineClassName {
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

      namespace hideAxisLine {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace hideTicks {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace hideZero {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace label {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace labelClassName {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace labelOffset {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace labelProps {
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

      namespace numTicks {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace rangePadding {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace stroke {
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

      namespace tickClassName {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickComponent {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickFormat {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickLabelProps {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickLength {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickStroke {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickTransform {
        function isRequired(
          p0: any,
          p1: any,
          p2: any,
          p3: any,
          p4: any,
          p5: any
        ): any
      }

      namespace tickValues {
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

  export default content
}
