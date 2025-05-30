/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { paymentsDisburse } from "../../funcs/paymentsDisburse.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: components.PaymentRequest$inboundSchema,
};

export const tool$paymentsDisburse: ToolDefinition<typeof args> = {
  name: "payments-disburse",
  description: `Disburse a payment from your balance to a phone number.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await paymentsDisburse(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
