# @react-simple-maps/usa

Simple and easy to use map of the usa for React. Quickly display a heat map of the usa.

### Install using:

```
npm i @react-simple-maps/usa
```

### Example usage:

```
import { USA } from "@react-simple-maps/usa";

function App() {
  const values = {
    size: "50%",
    wi: {
      color: "green",
    },
    tx: {
      color: "blue",
    },
    al: {
      color: "red",
    },
  };
  return (
    <div className="App">
      <h1>Map Demo</h1>
      <USA values={values} />
    </div>
  );
}

export default App;
```

### Result

![result map](https://github.com/julesvigy/react-simple-maps/blob/master/packages/usa/images/map_demo.png?raw=true)

### Props

Props can be passed in to specify the color of the state and the size of the map. Every state is a key in the object. Every state in the object should be abreviated and lowercase. The Props object name and value should be named `values`.

example object:

```
{
    size: "50%",
    wi: {
      color: "green",
    },
    tx: {
      color: "blue",
    },
    al: {
      color: "red",
    },
    pa: {
        color: "yellow",
        },
    }
  };
```

### Credits

I would like to thank [simple maps](https://simplemaps.com/resources/svg-maps) for the open source SVG maps.
