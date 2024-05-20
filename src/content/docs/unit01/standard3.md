---
title: Propogation of Error
description: Calculations with SF
---

1. Use rules for adding/subtracting and multiplying/dividing with significant figures.


## Addition/Subtraction

The final answer should be reported to a number of decimal places given by the measurement with the fewest number of digits after the decimal point (i.e. 3.01 + 4.0 = 7.0).

## Multiplication/Division

Report the final answer with the same number of SF as the measurement with the fewest SF (i.e. 3.0 * 9.00000000 = 27).

## [Advanced] Absolute Precision Calculations

#### STD

Random error is assumed to fall inside a bell curve (normal distribution). A standard deviation of a population, with s = sample standard deviation and n = number of trials run, is calculated like this:

$s_{x} = \frac{s}{\sqrt{n}}$

In a normal distribution, about 68% of data falls inside ±1 STD (𝜎) of the mean (𝜇). 95% of data falls inside ±2𝜎, while 99.7% of data falls within ±3𝜎.

#### Addition/Subtraction

Given 2 measurements 𝑥 and y, the sum or difference of those measurements will have an absolute precision of:
$s = \sqrt{x^2 + y^2}$. 

#### Multiplication/Division

When multiplying or dividing, relative precision is added in a similar way. Suppose 2 measurements have a relative error of x% and y%. The MoE of the final result would be:
$s = \sqrt{x^2 + y^2}$
