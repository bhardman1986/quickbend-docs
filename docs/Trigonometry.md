---
id: trigonometry
title: Trigonometry
# sidebar_label: Style Guide
---

Trigonometry, is a branch of mathematics specifically dealing with the sides and angles of triangles. Trigonometry is a key part of conduit bending. Fortunately every type of bend is based off of a right triangle.

## Terms

- **Right Triangle**: A triangle with one right angle (having exactly 90°).
- **Theta (θ)**:  The two unknown angles of the right triangle other than the right angle.
- **Opposite**: The opposite side of the triangle from that of the theta.
- **Adjacent**: The side of the triangle that’s next to the theta.
- **Hypotenuse**: The longest side of a right triangle, opposite of the right angle.

## Basic Formulas

There's three basic formulas for trigonometry. The values of these formulas play a huge role in determining the unknown sides and angles of a triangle.

- **Sine**: Sin(θ) = Opposite/Hypotenuse
- **Cosine**: Cos(θ) = Adjacent/Hypotenuse
- **Tangent**: Tan(θ) = Opposite/Adjacent

## Multiplier (Cosecant) Method

Typically when bending conduit you decide the theta, and the hypotenuse (distance between bends) is the unknown value. In order to find these unknown values quickly by hand we’ll use the multiplier method.

This is the most common method to conduit bending. It uses the cosecant (1/sin) from the theta (bend). Then by multiplying that value by the opposite (Rise) you’re able to determine the distance needed for the hypotenuse (Distance Between Bends).

:::important
While the cosecant method isn't incorrect the accuracy may vary when it comes to larger sized conduits, shoe radiuses, and bends.

<!-- Please see [centerline radius algorithm](introduction) for more details -->
:::

### Multipliers

A multiplier is a value created by taking the reciprocal of the sine from theta and then multiply that value by the opposite. The multiplier is usually simplified by set degree marks that are common bends. Such as 10˚, 22.5˚, 30˚, 45˚, and 60˚.

:::note
**1/Sin(θ) • Opposite**
:::

### Shrink Constant

The shrink constant is a multiplier to determine the amount of conduit that's lost after the bend is completed (Shrink). The shrink constant is determined by taking the tangent and of the theta (Bend) by 2. After determining the shrink constant take that value and multiply it by the opposite (Rise).

:::note
**Tan(θ)/2 • Opposite**
:::

### Common Multipliers and Shrink Constants

| Theta   |      Multiplier      |  Shrink Constant    |
|---------|---------------------:|--------------------:|
| 5˚      | 11.47                | 0.04                |
| 10˚     | 5.75                 | 0.08                |
| 15˚     | 3.86                 | 0.13                |
| 22.5    | 2.61                 | 0.2                 |
| 30˚     | 2                    | 0.27                |
| 45˚     | 1.41                 | 0.41                |
| 60˚     | 1.15                 | 0.58                |
