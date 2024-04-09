/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Query } from 'mongoose'

function mongooseNullError(schema: any) {
  function validationChecker(this: Query<any, any, {}, any, 'find'>, data: any) {
    const { mongooseNullError } = this.getOptions()

    if (!data && mongooseNullError === true) {
      throw new Error('Invalid request.')
    }
  }

  schema.post('findOne', validationChecker)
  schema.post('findOneAndUpdate', validationChecker)
  schema.post('findOneAndReplace', validationChecker)
  schema.post('findOneAndDelete', validationChecker)
}

export default mongooseNullError
