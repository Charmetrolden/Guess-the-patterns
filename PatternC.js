import java.util.ArrayList;
import java.util.List;

public abstract class Bar {
    protected  Foo foo;

    protected Bar(Foo foo) {
        this.foo = foo;
    }

    public abstract void update();
}

public abstract class Foo {
    private List<Bar> list = new ArrayList<>();

    public void attach(Bar bar) {
        list.add(bar);
    }

    public void detach(Bar bar) {
        list.remove(bar);
    }

    public void signal() {
        for (Bar o : list){
            o.update();
        }
    }
}

/* Write your answers and comments below this line
Observer
Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

** Pros: **
Loose coupling: Allows for a loosely coupled design where subjects (observed objects) and observers (dependent objects) are independent and can be modified independently.
Encapsulation: Encapsulates the subject's state and notifies observers without exposing its internal implementation details.

** Cons: **
Unexpected updates: Observers may receive unexpected updates if they are not properly managed or if the subject's state changes frequently.
Memory leaks: If observers are not properly detached from the subject when they are no longer needed, it can lead to memory leaks.
*/ 
