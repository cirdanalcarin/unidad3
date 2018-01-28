"use strict"
var SIZE = 5;

function create() {
    var list = [];
    for (var i = 0; i < SIZE; i++) {
        list[i] = Number.NaN;
    }
    return list;
}
function selectionSort(list) {
    var jMin;
    for (var i = 0; i < list.length; i++) {
        var j = jMin = i;
        for (++j; j < list.length; ++j) {
            (list[j] < list[jMin]) && (jMin = j);
        }
        [list[i], list[jMin]] = [list[jMin], list[i]];
    }
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
    if (list[SIZE - 1] === list.length) {
        return isFull = true;
    } else {
        return isFull;
    }

}
function size(list) {
    var counter = 0;
    for (var i = 0; i < SIZE; i++) {
        if (!isNaN(list[i])) {
            counter++;
        }
    }
    return counter;
}
function add(list, elem) {
    if (isFull(list)) {
        throw "Error, the list is full";
    } else if (!isNaN(elem)) {
        list[size(list)] = elem;
    }
    selectionSort(list);
    return size(list);
}
function get(list, index) {
    if (index >= 0 && index < SIZE) {
        var element = list[index];
        return element;
    }
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
        for (var i = 0; i < list.length; i++) {
            if (list[i] === elem) {
                index = i;
            }
        }
        return index;
    } else {
        return index = -1;
    }
}
function capacity() {
    return SIZE;
}
function clear(list) {
    if (!isEmpty(list)) {
        for (var i = 0; i < list.length; i++) {
            if (!isNaN(list[i])) {
                list[i] = Number.NaN;
            }
        }
        return list;
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
        return last = list[list.length - 1];
    } else {
        return console.log("Error, the list is empty");
    }
}
function remove(list, index) {
    var elemRemove;
    if (!isEmpty(list)) {
        for (var i = 0; i < list.length; i++) {
            if (!isNaN(list[index]) && list[i] == list[index]) {
                elemRemove = list[index];
                list[index] = Number.NaN;
            }
        }
        return elemRemove;
    } else {
        throw "the list is empty, you can not remove any item from the list";
    }
}
function removeElement(list, element) {
    var remove;
    var elem = list.indexOf(list, element);
    if (isNaN(list[elem])) {
        return remove = false;
    } else {
        list[elem] = Number.NaN;
        return remove = true;
    }
}

function testList() {
    var list = create();
    console.log("Longitud inicial: " + size(list));
    console.log("Capacidad: " + capacity(list));
    console.log("Esta vacia: " + isEmpty(list));
    console.log("ESta llena: " + isFull(list));

    console.log("--------------------------------------");

    console.log("Añadiendo un elemento a la lista...");
    add(list, 5);
    console.log(list);

    console.log("Añadiendo otro elemento a la lista...");
    add(list, 1);
    console.log(list);

    console.log("Añadiendo otro elemento a la lista...");
    add(list, 7);
    console.log(list);

    console.log("Añadiendo otro elemento a la lista...");
    add(list, 6);
    console.log(list);

    console.log("Añadiendo otro elemento a la lista...");
    add(list, 3);
    console.log(list);

    console.log("Obteniendo elemento indicando el indice: " + get(list, 3));

    console.log("--------------------------------------");

    console.log("El elemento 5 esta en la posicion " + indexOf(list, 5));

    console.log("--------------------------------------");

    console.log("Convertido a String: " + toString(list));
    console.log("Primer Elemento: " + firstElement(list));
    console.log("Ultimo Elemento: " + lastElement(list));
    console.log("Longitud final: " + size(list));

    console.log("--------------------------------------");

    console.log("Eliminar elemento indicando indice " + remove(list, 3));
    console.log(list);
    console.log("Eliminar elemento " + removeElement(list, 4));
    console.log(list);

    console.log("--------------------------------------");

    console.log("Limpiando lista " + clear(list));
}
window.onload = testList;