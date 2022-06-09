// https://leetcode.com/problems/add-two-numbers/

const addTwoNumbers = (list1, list2) => {
    const list1Number = linkedNumber(list1);
    const list2Number = linkedNumber(list2);
    var sum = Number(list1Number) + Number(list2Number);
    const sumLinkedList = linkedList(sum.toString());
    return sumLinkedList;
}

const linkedNumber = (list) => {
    var number = "";
    for (i in list) number += list[i];
    return number;
}

const linkedList = (string) => {
    var list = [];
    for (i = string.length - 1; i >= 0; i--) list.push(Number(string[i]));
    return list;
}

addTwoNumbers([2,4,3], [5,6,4]); // [7,0,8]
addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]); // [8,9,9,9,0,0,0,1]
addTwoNumbers([0], [0]); // [0]
