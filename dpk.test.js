const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns provided partition key when input has field partitionKey", () => {
    const input = {partitionKey: "customPartitionKey"}
    const output = deterministicPartitionKey(input);
    expect(output).toBe("customPartitionKey")
  })

  it("Returns hash of the input in JSON string when does not have the field 'partitionKey'", () => {
    const input = {anotherField: "customAnotherField"}
    const output = deterministicPartitionKey(input); 
    
    const expectedOutput = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(input))
      .digest("hex");

    expect(output).toEqual(expectedOutput);
  })

  it("Returns hash of the partitionKey field in input object when the field length exceeds 256", () => {
    const input = {partitionKey: "a".repeat(257)}
    const output = deterministicPartitionKey(input); 
    
    const expectedOutput = crypto
      .createHash("sha3-512")
      .update(input.partitionKey)
      .digest("hex");

    expect(output).toEqual(expectedOutput);
  })

  it("Returns 'partitionKey' field as a JSON string of the field if the field is an object ", () => {
    const input = {partitionKey: {nestedField: 'field'}}
    const output = deterministicPartitionKey(input); 

    expect(output).toEqual(JSON.stringify(input.partitionKey));
  })
  
});
