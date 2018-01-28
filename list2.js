"use strict"
var SIZE = 5;

function create() {
    var list = [];
    return list;
}
function isEmpty(list) {
    var empty = false;
    if (list.length === 0) {
        return empty = true;
    } else {
        return empty;
    }
}
function isFull(list) {
    var isFull = false;
    if (list.length === SIZE) {
        return isFull = true;
    } else {
        return isFull;
    }
}
function size(list) {
    return list.length;
}
function add(list, elem) {
    if (!isFull(list) && !isNaN(elem)) {
        list.push(elem);
        return size(list);
    } else {
        throw "The list is full, you can not add any item to the list";
    }

}
function addAt(list, elem, index) {
    if (!isFull(list) && !isNaN(elem) && (index >= 0 && index < SIZE)) {
        list.splice(index, 0, elem);
        return size(list);
    } else {
        throw "The list is full, you can not add any item to the list";
    }
}
function get(list, index) {
    if (index >= 0 && index < SIZE) {
        var element = list[index];
        return element;
    }
}
function toString(list) {
    return list.join("-");
}
function indexOf(list, element) {
    var elem = list.indexOf(element);
    return elem;
}
function lastIndexOf(list, element) {
    var elem = list.lastIndexOf(element);
    return elem;
}
function capacity(list) {
    return SIZE;
}
function clear(list) {
    return list.length = 0;
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
    if (!isEmpty(list)) {
        var element = list.splice(index, 1);
        return element;
    } else {
        throw "The list is empty, you can not remove any item from the list";
    }

}
function removeElement(list, element) {
    var elem = list.indexOf(element);
    if (!isEmpty(list) && elem !== -1) {
        list.splice(elem, 1);
        return true;
    } else {
        return false;
    }
}
function set(list, element, index) {
    var elem = list[index];
    list.splice(index, 1, element);
    return elem;
}

function testList() {
    var list = create();
    console.log("Longitud inicial: " + size(list));
    console.log("Capacidad: " + capacity(list));
    console.log("Esta vacia: " + isEmpty(list));
    console.log("ESta llena: " + isFull(list));

    console.log("--------------------------------------");

    console.log("Añadiendo un elemento a la lista...");
    add(list, 2);
    console.log(list);

    console.log("Añadiendo otro elemento a la lista...");
    add(list, 3);
    console.log(list);

    console.log("Añadiendo un elemento a la lista en una posición indicada...");
    addAt(list, 4, 0);
    console.log(list);

    console.log("--------------------------------------");

    console.log("Obteniendo elemento indicando el indice: " + get(list, 1));

    console.log("Convertido a String: " + toString(list));

    console.log("--------------------------------------");

    console.log(list);
    console.log("El elemento 4 esta en la posicion " + indexOf(list, 4));
    console.log("El elemento 3 esta en la posicion " + lastIndexOf(list, 3));

    console.log("--------------------------------------");

    console.log("Primer Elemento: " + firstElement(list));
    console.log("Ultimo Elemento: " + lastElement(list));

    console.log("--------------------------------------");

    console.log(list);
    console.log("Reemplazar elemento " + set(list, 4, 1));
    console.log(list);
    console.log("Longitud final: " + size(list));

    console.log("--------------------------------------");

    console.log(list);
    console.log("Eliminar elemento indicando indice " + remove(list, 0));
    console.log(list);
    console.log("Eliminar elemento " + removeElement(list, 4));
    console.log(list);

    console.log("--------------------------------------");

    console.log("Limpiando lista. Longitud: " + clear(list));
    console.log(list);

}
window.onload = testList;
