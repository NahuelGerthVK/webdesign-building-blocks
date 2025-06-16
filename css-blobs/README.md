# border radius blobs

We can use two border radius values to create wobbly css blobs.

---

![Preview](/css-blobs/preview.jpg)

---

In this example the top left corner has a width of 100% and a height of 50% relative to the element.

```css
border-radius: 100% 0 0 0 / 50% 0 0 0;
```

We can combine different border settings into a wobbly shape.

```css
border-radius: 60% 40% 30% 70% / 50% 60% 40% 50%;
```

This also can be applied to images and videos to create smooth mask effects. We can also mix it with hover states and keyframe animations easily.

---

![Preview](/css-blobs/visualization-1.jpg)
![Preview](/css-blobs/visualization-2.jpg)

---