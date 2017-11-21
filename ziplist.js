function zipList(list1, list2) {
  const retArr = [];
  for (let i = 0; i < list1.length; i += 1) {
    retArr.push(list1[i]);
    retArr.push(list2[i]);
  }
  return retArr;
}

function zipListTheSimpleWay(list1, list2) {
  const zippedList = _.zip(list1, list2);
  return _.flatten(zippedList);
}


console.log(zipList([1, 2, 3], ['a', 'b', 'c']));
console.log(zipListTheSimpleWay([1, 2, 3], ['a', 'b', 'c']));
