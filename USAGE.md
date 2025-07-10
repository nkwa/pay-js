<!-- Start SDK Example Usage [usage] -->
```typescript
import { Pay } from "@nkwa-pay/sdk";

const pay = new Pay({
  apiKeyAuth: process.env["PAY_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await pay.payments.get({
    id: "7112258c-4254-455f-a167-30549365ca9d",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->