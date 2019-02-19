1.pub/sub pattern based on observer pattern, 参考images目录中的figure3.6

2.这种模式真的是太激动人心了。
  Though not a requirement, notifi- cations with most pub/sub imple- mentations are topic based. A topic (or event name in AngularJS) is a simple name that’s used to repre- sent a particular notification. If another object wants to listen, it subscribes to that topic. When a topi- cal message is published, the mes- sage broker delivers that notification to any of the topic’s subscribers. 
  这里有一个案例，In the case of your application, you’ve created a module whose sole purpose is to broadcast system-wide messages using AngularJS’s built-in pub/sub mechanism. This module will use pub/sub to publish a mes- sage with the topic userMessage.参考目录images中的figure3.7。
