# Chapter 7 - A Robot
These are my notes for the chapter 7 `A Robot` project. Mostly clarifications
on things that I found somewhat unclear in the book.

### Meadowfield
The picture was not too helpful, but essentially this is just a list of
nodes that are connected (i.e. a graph).

```javascript
const roads = [
    'Alice-Bob',
    'Alice-Cabin',
    'Alice-Post',
    'Bob-Townhall',
    'Daria-Ernie',
    'Daria-Townhall',
    'Ernie-Grete',
    'Grete-Farm',
    'Grete-Shop',
    'Marketplace-Farm',
    'Marketplace-Post',
    'Marketplace-Shop',
    'Marketplace-Townhall',
    'Shop-Townhall'
]
```

I have shortened the names and removed some spaces in order to simplify
things a bit.

### Graph Structure
The above array is not easy to work with when trying to navigate. Instead,
we will organize this as a set objects where the key is the location, and the
value contains that list of connected destinations.

```javascript
{
    "Alice": ["Bob", "Cabin", "Post"],
    "Bob": ["Alice", "Townhall"],
    ...
}
```

The function `buildGraph()` will convert the array of `roads` into the
structure above.