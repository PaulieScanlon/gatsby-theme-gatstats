declare module '@mdx-js/react' {
  export const MDXContext: {
    $$typeof: any
    Consumer: {
      $$typeof: any
      Consumer: any
      Provider: {
        $$typeof: any
      }
    }
    Provider: {
      $$typeof: any
    }
  }

  export function MDXProvider(props: any): any

  export function mdx(type: any, props: any, ...args: any[]): any

  export function useMDXComponents(components: any): any

  export function withMDXComponents(Component: any): any

  export default content
}
