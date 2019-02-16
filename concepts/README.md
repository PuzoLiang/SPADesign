英文部分来自书籍 SPA design and architecure, 仅供参考，请勿商用.
1.传统的应用程序架构，参考images目录中的figure1.1
  Figure 1.1 shows a large web application that uses a traditional server-side design.
With this design, each request for a new view (HTML page) results in a round-trip to the server. When fresh data is needed on the client side, the request is sent to the server side. On the server side, the request is intercepted by a controller object inside the presentation layer. The controller then interacts with the model layer via the ser- vice layer, which determines the components required to complete the model layer’s task. After the data is fetched, either by a data access object (DAO) or by a service agent, any necessary changes to the data are then made by the business logic in the business layer.Control is passed back to the presentation layer, where the appropriate view is cho- sen. Presentation logic dictates how the freshly obtained data is represented in the selected view. Often the resulting view starts off as a source file with placeholders, where data is to be inserted (and possibly other rendering instructions). This file acts as a kind of template for how the view gets stamped whenever the controller routes a request to it.
After the data and view are merged, the view is returned to the browser. The browser then receives the new HTML page and, via a UI refresh, the user sees the new view containing the requested data.
                      
2.SPA的应用程序架构中，参考images目录中的figure1.2
Figure 1.2 demonstrates how this design could look as an SPA. Notice what has hap- pened with the presentation layer and our transactions.
Moving the process for creating and managing views into the UI decouples it from the server. From an architectural standpoint, this gives the SPA an interesting advan- tage. Unless you’re doing partial rendering on the server, the server is no longer required to be involved in how the data is presented.
The overall SPA design is nearly the same as the traditional design. The key changes are as follows: no full browser refreshes, the presentation logic resides in the client, and server transactions can be data-only, depending on your preference for data rendering.

3.SPA Shell, 参考images目录中的figure1.3 
  the shell is minimal in structure and often contains a single, empty DIV tag that will house the rest of the application’s content. You can think of this shell HTML file as the mother ship and the initial container DIV as the docking bay.
