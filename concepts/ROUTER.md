1.traditional navigation, 参考目录中的images/figurer2.8
2.SPA navigation
  As the user navigates, views are seamlessly displayed. This, combined with the asyn- chronous fetching of data, gives the application a smooth, native-like feel that makes for a great user experience. No more of the jarring interruptions that you usually experience when a page is wiped clean and a new page is downloaded and displayed. The SPA does all of this without refreshing the initial page after it’s loaded.参考目录中的images/figure2.9
  
  客户端路由不仅仅是简单的组件切换，同时它还负责的view,data,logic的状态管理，这一切都由javascript负责，可行吗？事实证明，不仅可行，而且也是非常简单的。参考目录中的images/figure3.0

  路由匹配通用示例: images/目录中的figure3.1 

3. History API
  Using history.pushState() or history.replaceState(), the router can directly modify the browser’s history stack. Both methods also allow the router to work with “pretty,” natural-looking URL segments instead of hashes. Both methods take three parameters:
■ State object—An optional JavaScript object associated with the history entry
■ Title—Represents a new title for the history entry (though not implemented by
most browsers as of this writing)
■ URL—The URL that should be displayed in the browser’s address bar