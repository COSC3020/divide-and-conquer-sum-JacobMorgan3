[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/E1vcEWuv)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.



### Answer:
Recurence Relation:<br/>
T(n) =  0	if n = 0<br/>
1		if n = 1<br/>
3T(n/3) + 1 	if n > 1<br/>

(3^i)T(n/3^i) + $\sum_{j=0}^{i-1} 3^j$ <br/> 

$3^i = n$  so $i$ = $log{_3}{(n)}$ <br/>

$n * 1 + \sum_{j=0}^{log{_3}{(n-1)}} 3^j$ <br/>

the sum has a linear growth rate or less, because the exponent and log 'cancel' each other out. <br/>

$T(n) \in \Theta(n)$


       
