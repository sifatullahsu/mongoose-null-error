declare module 'mongoose' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface QueryOptions {
    mongooseNullError?: boolean
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare function mongooseNullError(schema: any): void

export { mongooseNullError as default }
