public abstract class SomeObject {
}

public class ConcreteSomeObject extends SomeObject {
}

public abstract class PatternB {
    public abstract SomeObject create();
}


public class PatternBImpl extends PatternB {
    public SomeObject create() {
        return new ConcreteSomeObject();
    }
}

/* Write your answers and comments below this line
** Abstract Factory **
Provides an interface for creating families of related or dependent objects without specifying their concrete classes.

** Pros: **
Encapsulates object creation: Allows the system to be independent of how objects are created, composed, and represented, making it easy to change the concrete implementations.
Supports Open/Closed Principle: New variants of E.g. products can be introduced without changing existing client code, promoting extensibility.

** Cons: **
Complexity: Introduces additional complexity by defining multiple factory interfaces and their corresponding implementations.
Can lead to a large number of classes: As the number of E.g product families increases, the number of product classes also increases, potentially leading to a large number of classes to manage.
*/ 
