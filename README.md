# mongoose-null-error

`mongoose-null-error` is a plugin for Mongoose that provides functionality to enforce validation against null values returned by certain query operations. It'll throw an error if query return value is null.

## Installation

You can install `mongoose-null-error` via npm:

```bash
npm install mongoose-null-error
```

```bash
yarn add mongoose-null-error
```

## Usage

To use `mongoose-null-error`, apply the plugin to your Mongoose schema definition and pass the desired options when performing query operations.

```typescript
import mongoose from 'mongoose'
import mongooseNullError from 'mongoose-null-error'

// Define your Mongoose schema
const MySchema = new mongoose.Schema({
  // Define your schema fields
})

// Apply the mongoose-null-error plugin to your schema
MySchema.plugin(mongooseNullError)

// Define your Mongoose model
const MyModel = mongoose.model('MyModel', MySchema)
```

## Performing Query Operations

When performing query operations such as `findOne`, `findById`, `findByIdAndUpdate`,`findOneAndUpdate`, `findByIdAndDelete`, `findOneAndDelete`, or `findOneAndReplace`, you can pass an option to enable null error validation.

```typescript
// Example usage with findById
try {
  const user = await User.findById(id, '', { mongooseNullError: true })
  // Handle successful query
} catch (error) {
  // Handle error thrown due to null value
  console.error(error.message)
}
```

When the specified query operation returns a null value and the `mongooseNullError` option is set to `true`, an error will be thrown to indicate an invalid request.

## Contributing

We welcome contributions from the community. If you want to contribute to this project.

## License

This project is licensed under the MIT License.

## Contact

For questions, feedback, or support, please feel free to contact at [personal.sifat@gmail.com](mailto:personal.sifat@gmail.com).

#### Thank you for using Mongoose Null Error!
