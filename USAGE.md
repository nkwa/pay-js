<!-- Start SDK Example Usage [usage] -->
```typescript
import { Pay } from "@nkwa-pay/sdk";

const pay = new Pay({
  apiKeyAuth: process.env["PAY_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await pay.getPaymentsId({
    id: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->