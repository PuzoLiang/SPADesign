1. 测试金字塔，参考images目录中的figure4.2
2. the benefits of unit test: 1) Can lead to better software designs 2) Helps detect issues early on 3) Gives you more confidence to make changes 4) Provide great examples of how your code works
3. 1) focus each test on a specific business-related concept, 避免一些事项参考images目录中的figure4.3 2)avoid creating APIs that are ambigous or too general 3) test order should be required,参考images目录中的figure4.4 4) unit test should be self-reliant 5） the focus of each test should be understand 
6) traditional test ，参考images目录中的figure4.5
4. TDD, because you're relying on a well-written test to help in the design of the code, you're forced to have a deep understanding of the requirements up front.参考images目录中的figure4.6
5. you can follow some simples rules of thumb when test unit test MV* frameworks.
  1)Don't share objects between tests. 2) kept tests DRY. 3) consult the MV* frameworks documentation for any special instructions around tests.