"use strict"
var SIZE = 5;

function create() {
    var list = [];
    return list;
}
function isEmpty(list) {
    if(list.length === 0){
        return true;
    }else{
        return false;
    }
}
function isFull(list) {
    if(list.length === SIZE){
        return true;
    }else{
        return false;
    }
}
function size(list) {
    var counter = 0;
    for (var i = 0; i < list.length; i++) {
        if (!isFull(list[i])) {
            counter++;
        }
        return counter;
    }
}
function add(list, elem) {
    if (!isFull(list)) {
        list.push(elem);
        list.sort();
        return size(list);
    } else {
        throw "The list is full, you can not add any item to the list";
    }

}
function addAt(list, elem, index) {
    if (!isFull(list)) {
        list.splice(index, 0, elem);
        list.sort();
        return size(list);
    } else {
        throw "The list is full, you can not add any item to the list";
    }
}
function get(list, index) {
    var element = list.slice(list[index]);
    return element;
}
function toString(list) {
    return list.join("-");
}
function indexOf(list, element) {
    var element = list.indexOf(element);
    return element;
}
function lastIndexOf(list, index) {
    var element = list.lastIndexOf(element);
    return element;
}
function capacity(list) {
    var capacity = list.length;
    return capacity;
}
function clear(list) {
    return list.length = 0;
}
function firstElement(list) {
    return list[0];
}
function lastElement(list) {
    var last = list.length - 1;
    return last;
}
function remove(list, index) {
    if (!isEmpty(list)) {
        var element = list.splice(index, 1);
        return element;
    } else {
        throw "The list is empty, you can not remove any item from the list";
    }

}
function removeElement(list, element) {
    var elem = list.indexOf(element);
    var rmv = remove(list, elem);
    if (!isEmpty(list.find(list[element]) === rmv)) {
        return true;
    } else {
        return false;
    }
}
function set(list, element, index) {
    var elem = list[index];
    list.splice(index, 1, elemnt);
    return elem;
}
var alist=create();
alist.sort();