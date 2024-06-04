// Sample data (replace with your actual data)
const messageId = 123;
const encryptedMessage = "AAArBnv15I2LrrHltipzXLSxfICi6k9SG0j/+hfCHJR1BUBlyD+fhPsRfafbEQ==";

// Function to convert a number to a byte array
function toBytes(value, length) {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push((value >> (i * 8)) & 0xFF);
    }
    return result;
}

// Create the payload
const payload = new Uint8Array([
    ...toBytes(messageId, 4),
    0x2C, // ASCII code for comma (,)
    ...toBytes(1, 4), // Assuming WAMetrics.MESSAGE is 1
    0x80, // Assuming the next byte is 0x80
    ...Array.from(encryptedMessage, char => char.charCodeAt(0)), // Convert characters to ASCII values
]);

// Output the result to the console
console.log(payload);
