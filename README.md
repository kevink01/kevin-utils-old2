# Kevin-utils

## A package for utility functions that can be reused in projects

---

### Dates

#### msToTimestamp

```ts
import { msToTimestamp } from 'kevin-utils';

const ms = 400;
console.log(msToTimstamp(ms)); // 0:00

// Seconds
const ms1 = 5_000;
console.log(msToTimestamp(ms1)); // 0:05

// Minutes
const ms2 = 63_000;
console.log(msToTimstamp(ms2)); // 1:03

// Hours
const ms3 = 3_605_000;
console.log(msToTimstamp(ms3)); // 1:00:05
```

#### msToTime

```ts
import { msToTime } from 'kevin-utils';

const ms = 400;
console.log(msToTime(ms)); // 0 seconds

const ms1 = 5_000;
console.log(msToTime(ms1)); // 5 seconds

const ms2 = 63_000;
console.log(msToTime(ms2)); // 1 minute and 3 seconds

const ms3 = 3_605_000;
console.log(msToTime(ms3)); // 1 hour and 5 seconds

const ms4 = 4_474_000;
console.log(msToTime(ms4)); // 1 hour, 14 minutes, and 34 seconds
```

#### dateToUTC

```ts
import { dateToUTC } from 'kevin-utils';

const date = new Date(); // -05:00 (New York)
const utc_date = dateToUTC(date); // UTC +00:00
```

---

### String

#### getInitials

```ts
import { getInitials } from 'kevin-utils';

const name = '';
console.log(getInitials(name)); // AA

const name2 = 'Joe';
console.log(getInitials(name2)); // J

const name3 = 'John Smith';
console.log(getInitials(name3)); // JS
```

#### capitalize

```ts
import { capitalize } from 'kevin-utils';

const str = 'a';
console.log(capitalize(str)); // A

const str2 = 'avocado';
console.log(capitalize(str2)); // Avocado
```

#### ellipse

```ts
import { ellipse } from 'kevin-utils';

const str = 'string';
// Defaults to print string if second parameter is negative
console.log(ellipse(str, -10)); // string

const str2 = 'string';
console.log(ellipse(str, 0)); // (empty string)

const str3 = 'string';
console.log(ellipse(str, 100)); // string

const str4 = 'string';
console.log(ellipse(str, 3)); // str...
```

---

### Math

#### round

```ts
import { round } from 'kevin-utils';

const num = 10.34;
console.log(round(num, 1)); // 10.3

const num2 = 8.3;
console.log(round(num2, 0)); // 8

const num3 = -8.7;
console.log(round(num3, 0)); // -9
```

#### fix

```ts
import { fix } from 'kevin-utils';

const num = 8.3;
console.log(fix(num, 4)); // 8.3000

const num2 = 13;
console.log(fix(num3, 2)); // 13.00
```

### Shuffle

### shuffle

```ts
import { shuffle } from 'kevin-utils';

const array = [1, 4, 6, 8, 9];
console.log(shuffle(array)); // [4,6,1,9,8]

console.log(shuffle(array)); // [9,1,6,8,4]
```
