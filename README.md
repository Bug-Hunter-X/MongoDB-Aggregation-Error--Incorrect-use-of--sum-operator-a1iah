# MongoDB Aggregation Error: Incorrect use of $sum operator
This repository demonstrates a common error in MongoDB aggregation pipelines. Specifically, it focuses on the incorrect usage of the `$sum` operator within the `$group` stage.  The bug involves using a string instead of an expression within the `$sum` accumulator, leading to unexpected or erroneous results. The solution provides the correct implementation.

## Bug
The `bug.js` file shows an incorrect implementation where `$sum: "$value"` is used, causing aggregation to fail or produce incorrect results. 

## Solution
The `bugSolution.js` file presents the corrected version using the correct syntax `$sum: $value`. This ensures that the aggregation pipeline functions as intended.