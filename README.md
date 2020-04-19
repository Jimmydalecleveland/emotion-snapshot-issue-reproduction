To see example of issue run:
```
yarn && yarn test
```

You should see the following. This has resulted from only changing the `id` attribute from `button1` to `button2`, yet every style for that component shows that it has changed. The printed values are the same, so I'm not sure why the diff is showing them. This happens from style changes as well. It is monstrously annoying in a large project where any change invalidates the snapshot for all styles of any component using the changed component and renders snapshots almost useless.

This did not use to occur in my projects but I've been dealing with it so long I forgot where it began.

```
FAIL  src/__tests__/EmotionComponent.jsx
  ✕ demo for snapshot update bug (33ms)

  ● demo for snapshot update bug

    expect(received).toMatchSnapshot()

    Snapshot name: `demo for snapshot update bug 1`

    - Snapshot  - 5
    + Received  + 5

      .emotion-0 {
    -   margin: 0;
    -   padding: 0;
    -   background-color: dodgerblue;
    -   color: white;
    +   margin: 0;
    +   padding: 0;
    +   background-color: dodgerblue;
    +   color: white;
      }

      <div>
        <button
          class="emotion-0"
    -     id="button1"
    +     id="button2"
        >
          Some Text
        </button>
      </div>

      5 | test("demo for snapshot update bug", () => {
      6 |   const { container } = render(<EmotionComponent />);
    > 7 |   expect(container).toMatchSnapshot();
        |                     ^
      8 | });
      9 |

      at Object.<anonymous> (src/__tests__/EmotionComponent.jsx:7:21)

 › 1 snapshot failed.
 ```
