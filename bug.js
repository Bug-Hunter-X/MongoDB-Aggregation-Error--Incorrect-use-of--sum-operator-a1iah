```javascript
//Incorrect aggregation pipeline
db.collection.aggregate([
  {$match: { /* some filter */ }},
  {$group: {_id: "$field", sum: {$sum: "$value"}}}, //Error: sum should be {$sum: $value}
]);
```