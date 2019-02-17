1.Once you understand the role of MV* and its underlying patterns, though, you’ll be able to select one that best fits your environment. After all, no one knows your situation better than you do. You know the factors that affect your project, your end users, your budget, your timelines, and your development resources.
2.
■ Model—The model typically contains data, business logic, and validation logic. Conceptually, it might represent something like a customer or a payment. The model is never concerned with how data is presented.
■ View—The view is what the user sees and interacts with. It’s a visual representation of the model’s data. It can be a simple structure that relies on other parts of the framework for updates and responses to user interactions or it can contain logic, again depending on the MV* implementation
■ Controller—The controller is the entry point for the application, receiving sig- nals from controls in the UI. It also contains the logic that processes the user input and sends commands to the model to update its state based on the input received.

3.Traditional UI design pattern
  Central to these design patterns is the idea that an application’s code is easier to design, develop, and maintain if it’s segmented based on the type of responsibility each layer has.

  - model-view-controller
  Model-View-Controller (MVC) is one of the oldest patterns to try to separate data, logic, and presentation. MVC was proposed by Trygve Reenskaug and later implemented in the Smalltalk programming language in the 1970s.
  MVC was instrumental in the design of graphical user interfaces then and still is today. Since its inception, it and its variants have become common design patterns for all types of soft- ware development. The MVC pattern includes the model, the view, and a controller, 具体看images目录中的figure1.9

  - model-view-presenter
    The model would continue to represent data management. in MVP, there’s no controller acting as a gatekeeper. Each view is backed by a component called a presenter:
    ■ Presenter—The presenter contains the view’s presentation logic. The view merely responds to user interactions by delegating responsibility to the pre- senter. The presenter has direct access to the model for any necessary changes and propagates data changes back to the view. In this way, it acts as a “middle- man” between the model and the view.具体看images目录中的figure2.0

  - model-view-viewmodel
    ■ ViewModel—The ViewModel is a model or representation of the view in code, in addition to being the middleman between the model and the view. Anything needed to define and manage the view is contained within the ViewModel. This includes data properties as well as presentation logic. Each data point in the model that needs to be reflected in the view is mapped to a matching property in the ViewModel. Like a presenter in MVP, each view is backed by a ViewModel. It’s aware of changes in both the view and the model and keeps the two in sync. 具体看images目录中的figure2.1