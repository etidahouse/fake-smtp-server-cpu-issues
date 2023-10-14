import { send } from "../src/send";
import { mockMailClient } from "../src/utils";

test('sendMail', async () => {
    const transport = mockMailClient()

    await send({ 
        transport, 
        mail: { from: 'hello@test.com', to: ['test@hello.com'], subject: 'test', text: 'hello test' },
    })

    transport.close()
})