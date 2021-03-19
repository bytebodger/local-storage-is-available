# local-storage-is-available

`local-storage-is-available` is a tiny utility function to safely determine whether localStorage is available in the current environment. It's dangerous to _assume_ that `localStorage()` is available. It can be absent in non-supported browsers, or when scripts are invoked from the command line, or when the user's browser is in Incognito Mode. Trying to access `localStorage()` when it's unavailable can spawn an `Error`. So it's best to test for its existence before attempting to access it.

## Usage

After installation, import the package:

```javascript
import { localStorageIsAvailable } from '@toolz/local-storage-is-available';
```

### localStorageIsAvailable()

`localStorageIsAvailable()` attempts to set-and-remove a value in `localStorage`, returning a Boolean value based on its failure or success.

```javascript
const API = {
   arguments: {
      // none
   },
   returns: Boolean,
}
```

**Examples:**

```javascript
localStorageIsAvailable(); // returns Boolean TRUE in "normal" browser situations
localStorageIsAvailable(); // returns Boolean FALSE when invoked outside a "normal" browser
                           // or when the browser can localStorage disabled (e.g., Incognito Mode)
```
