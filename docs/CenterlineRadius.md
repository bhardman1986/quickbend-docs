---
id: centerline-radius
title: Centerline Radius
# sidebar_label: Style Guide
---

Just how triangles play a key role in bending conduit, so do circles. Every bend has a radius, that radius may make a huge difference between throwing a piece of conduit on a raceway or in a bone pile.

We use the centerline radius because the centerline radius will not change when bent. The inside of the radius will compress. While the outside of the radius will stretch.

The radius of a bend is determined by the bender used to bend the conduit. Including the radius into figuring out the distance between bends and shrink will help to improve accuracy. Especially in larger conduits when bending more then 30˚. **QuickBend** takes into account of the radius of the bender when performing all calculations unless you choose to use the Cosecant Method.

## Developed Length

The developed length is the amount of conduit needed in order to complete a bend.

This amount of conduit can be determined before bending a piece of conduit by taking the radius and multiplying it by taking the theta (Bend) and dividing it by 360 (Degrees in a circle). Then multiply that by 2 and the radius and by π.

:::note
**(θ/360) • (2 • Radius • π)**
:::

## Gain

Gain is the difference of bending on a radius, and a right angle. Typically you’ll use gain to determine the total length of conduit left over after a 90º bend, but it’s also important to determine the total length of conduit that will be left over for other bends, as well.

The radius and degree of the bend form two right angles which we’ll use to find X.

:::note
**X = Tan(θ)/2 • Radius**
:::

You’ll than take X multiply it by 2, and then subtract it from your developed length

:::note
**Gain = Developed Length - (X • 2)**
:::

## To Much Math

The downside of using the centerline radius is that there’s way to much math. Which most of us don’t have the time to perform. The multiplier method is preferred because it's simpler to perform and remember, but with **QuickBend** that’s no longer an issue because that math is being done in realtime in the background, so you can quickly plugin your numbers and view the results.
