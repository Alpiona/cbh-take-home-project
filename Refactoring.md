# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

The function needed to be easier to read and understand, so I decreased the number of 'if' and 'else', reduced the number of their layers to just one, and added returns throughout the code so you don't have to read everything if you only want to understand the first return, for example.

The returns throughout are in order of complexity, starting from the simplest.
For example, if there is no input, the return will always be TRIVIAL_PARTITION_KEY, so it will be the first, because the logic used in the input object makes no difference to this one. So, it is easier to understand why when the return is TRIVIAL_PARTITION_KEY.

And with this I got the result of the function with 5 returns, and I made tests for each return to know that all possible scenarios are being tested.