简单来说什么是SPA呢？
SPA就是随着技术的发展，把原本放在服务端的逻辑通过javascript放到了客户端。
具体逻辑可以看images目录。

在SPA中，不使用page,使用view的概念。
There are almost as many libraries and frameworks as there are opinions about the correct approach to take. So admittedly, trying to find the pieces of the puzzle that not only fit together but also fit the needs of your project and the preferences of your team can be rather daunting.

在SPA中一个重要的原则就是javascript和html之间的松散耦合(loosely coupled)
How are these separate layers achieved? Enter MV* patterns. Patterns to separate data, logic, and the UI’s view have been around for years. Some of the most notable ones are Model-View-Controller (MVC), Model-View-Presenter (MVP), and Model- View-ViewModel (MVVM). In recent years, these patterns have begun appearing in the form of JavaScript libraries and frameworks to help apply these same concepts to the front end of web applications. The basic idea is that a framework or library, outside your own logic, manages the relationship between the JavaScript and the HTML. The MV* libraries and frameworks allow you to design the UI such that domain data (the model) and the resulting HTML “page” the user interacts with (the view) can commu- nicate but are maintained separately in code. The last component of the MV* pattern, the controller or ViewModel or presenter, acts as the orchestrator of all this.

保持视图、逻辑、数据分离，查看images目录中的figure1.7。 这种分离有以下几个好处：■ Designers and developers can more effectively collaborate. When the view is void of logic, each resource can work in parallel toward the same goal without stepping on each other’s toes.
■ Separate view and logic layers can also help developers create cleaner unit tests, because they have to worry about only the nonvisual aspect of a feature.
■ Separate layers help with maintenance and deployments. Isolated code can more easily be changed without affecting other parts of the application.