public class PatternA {
    private static PatternA instance;
    private PatternA() {}

    public static PatternA getInstance()    {
        if (instance == null) {
            instance = new PatternA();
        }

        return instance;
    }

    public void doWork()
    {
        throw new UnsupportedOperationException();
    }
}

/* Write your answers and comments below this line

** Singleton **
Ensures that only one instance of a class exists and provides a global point of access to that instance.

** Pros: **
Global access: Provides a global point of access to the instance, making it easy to use across the application.
Lazy initialization: Allows for lazy initialization of the instance, meaning the instance is created only when it's needed, conserving resources.

** Cons: **
Global state: 
Introduces a global state which can make the system harder to understand and test.
Hiding dependencies: 
Can hide dependencies by allowing any part of the code to access the singleton instance, potentially leading to tight coupling and decreased flexibility.
Can be difficult to test: 
The singleton instance is shared across the application, making it difficult to isolate and test individual components.
*/ 
