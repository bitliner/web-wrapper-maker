
# web-wrapper-maker

Automatically determine rules for a web-wrapper

## Elements of interest

HTML elements that are interesting for a web-wrapper can be divided in 2 categories

- container
- details element

The "container" contains a set of "details element". 

Examples of details elements are: a field cotaining a date; the name of the author of a content; location; etc.

## Algorithm for identifying containers

Starting from leafs to the root node:
- for each node, determine *c* as count how many same nodes there are in its parent
- the node with the maximum *c* is the container (assumption)

### Code

Pseudo code:

```javascript
html=$('<div>').append($.parseHTML('<html><body><h1>Title</h1><p>this is the first</p><div><h2>Title 2</h2><p>Hello zio!</p></div></body></html>'))

c=[]
for i in $(html).children():
  c[1].element = i
  c[0].count = $(i).children().length
for i in c:
  print c.element, c.count
```

### Experiment

1. test it on HackerNnews
2. test it on Sladshot
3. test it on Amazon

### Conclusions

