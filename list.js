"use strict"
var SIZE = 5;

function create() {
    var list = [];
    return list;
}
function isEmpty(list) {
    var empty = false;
    if (isNaN(list[0])) {
        return empty = true;
    } else {
        return empty;
    }
}
function isFull(list) {
    var isFull = false;
    if (isNaN(list[SIZE - 1])) {
        return isFull = true;
    } else {
        return isFull;
    }

}
function size(list) {
    var counter = 0;
    for (var i = 0; i < list.length; i++) {
        if (isNan(list[i])) {
            counter++;
        }
        return counter;
    }
}
function add(list, elem) {
    var i = parseInt(elem);
    if (isFull(list)) {
        throw "Error, the list is full";
    } else if (isNaN(list)) {
        throw "The element is not a number";
    } else {
        list[size(list)] = i;
    }
    return size(list);
}

function addAt(list, elem, index) {
    if (isFull(list)) {
        throw "Error, the list is full";
    } else {
        list[index] = elem;
    }
    return size(list);
}
function get(list, index) {
    var elem;
    for (var i = 0; i < list.length; i++) {
        if (list[i] == index) {
            elem = list[i];
        }
    }
    return elem;
}
function toString(list) {
    var str = "";
    for (var i = 0; i < list.length; i++) {
        if (list[i] != Number.NaN) {
            str = str + list[i] + " - ";
        } else {
            str = str + list[i];
        }
    }
    return str;
}
function indexOf(list, elem) {
    var index;
    var length = size(list);
    if (!isEmpty(list)) {
        for (var i = 0; i < length; i++) {
            if (list[i] === elem) {
                index = i;
            }
        }
        return index;
    } else {
        return index = -1;
    }
}
function lastIndexOf(list, elem) {
    var index;
    var length = size(list);
    if (!isEmpty(list)) {
        for (var i = 0; i < length - 1; i++) {
            if (list[i] === elem) {
                index = i;
            }
        }
        return index;
    } else {
        return index = -1;
    }
}
function capacity(list) {
    var capacity;
    return capcity = list.length;
}
function clear(list) {
    if (!isEmpty(list)) {
        return list.length=0;
    }
}
function firstElement(list) {
    var first;
    if (!isEmpty(list)) {
        return first = list[0];
    } else {
        return console.log("Error, the list is empty");
    }
}
function lastElement(list) {
    var last;
    if (!isEmpty(list)) {
        return last = list[size(list) - 1];
    } else {
        return console.log("Error, the list is empty");
    }
}
function remove(list, index) {
    var elemRemove;
    if (!isEmpty(list)) {
        for (var i = 0; i < size(list); i++) {
            if (list[i] === index) {
                elemRemove = list[i];
                list[i]=null;
            }
        }
        return elemRemove;
    }
}
function removeElement(list, elem) {
    var remove = false;
    if (!isEmpty(list)) {
        for (var i = 0; i < size(list); i++) {
            if (list[index] === elem) {
                list[i] = null;
                return remove = true;
            } else {
                return remove;
            }
        }
    }
}
function set(list, elem, index) {
    var previousElem;
    previousElem = list[index];
    list[index] = index;
    return previousElem;
}
function testList() {
    var list = [];
    console.log("Longitud: " + size(list));
    console.log("Capacidad: " + capacity(list));
    console.log("Esta vacia: " + isEmpty(list));
    try {
        for (var i = 0; i < SIZE; i++) {
            console.log("Numero de elementos: " + add(list, i * 10));
        }
        add(list, i);
    } catch (err) {
        console.log(err);
    }
    console.log("Convertido a String: " + toString(list));
    console.log("Primer Elemento: " + firstElement(list));
    console.log("Ultimo Elemento: " + lastElement(list));

}
var alist = create();
var element = document.getElementById("element").value;
var index = document.getElementById("index").value;

document.getElementById("add").onClick = add(alist, element);
document.getElementById("addAt").onClick = addAt(alist, element, index);
document.getElementById("get").onClick = get(alist, index);
document.getElementById("toString").onClick = toString(alist);
document.getElementById("indexOf").onClick = indexOf(alist, element);
document.getElementById("lastIndexOf").onClick = lastIndexOf(alist, element);
document.getElementById("clear").onClick = clear(alist);
document.getElementById("firstElement").onClick = firstElement(alist);
document.getElementById("lastElement").onClick = lastElement(alist);
document.getElementById("removeElement").onClick = removeElement(alist, element);
document.getElementById("set").onClick = set(alist, element, index);