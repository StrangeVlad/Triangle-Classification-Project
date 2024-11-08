# Triangle Classification Project

This mini project allows you to classify a triangle based on the lengths of its sides. It identifies the **side type** (Equilateral, Isosceles, or Scalene) and **angle type** (Right, Acute, or Obtuse) based on the side lengths provided.

## Features

- Identifies the **side type** of a triangle:
  - **Equilateral**: All sides are equal.
  - **Isosceles**: Two sides are equal.
  - **Scalene**: All sides are different.
- Identifies the **angle type** of a triangle:
  - **Right**: One angle is exactly 90°.
  - **Acute**: All angles are less than 90°.
  - **Obtuse**: One angle is greater than 90°.

## Usage

1. Enter the lengths of the three sides in the input fields.
2. Click the "Classify Triangle" button.
3. The application will display the triangle's side type and angle type.

## Code Snippet

This project uses JavaScript with the following main functions:

- `getTriangleType(a, b, c)`: Determines the side type based on the side lengths.
- `getTriangleAngleType(a, b, c)`: Calculates each angle using the Law of Cosines and determines the angle type.

## Example Tests

Below are example side lengths to test the application and the expected results for each set of sides.

| Side A | Side B | Side C | Expected Side Type | Expected Angle Type |
| ------ | ------ | ------ | ------------------ | ------------------- |
| 5      | 5      | 5      | Equilateral        | Acute               |
| 1      | 1      | √2     | Isosceles          | Right               |
| 3      | 4      | 5      | Scalene            | Right               |
| 6      | 7      | 8      | Scalene            | Acute               |
| 3      | 5      | 7      | Scalene            | Obtuse              |
| 5      | 5      | 6      | Isosceles          | Acute               |
| 1      | 2      | 3      | Invalid Triangle   | N/A                 |

### How to Test

1. Enter the values from the table above in the respective fields.
2. Verify if the side type and angle type match the expected output.

## License

This project is free to use for educational purposes.
